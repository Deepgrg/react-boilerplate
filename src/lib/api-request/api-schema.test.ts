import {
  basicAuthCredentials,
  getAxiosParams,
  getBasicAuthCredentials,
  getFormData,
  getQueryString,
  getRequestHeaders,
  handleLogout,
  manageErrorResponse,
  sanitizeApiController,
  transformRequestData,
} from '@/lib/api-request/api-schema'
import { ApiDetailType, RequestBodyType, RequestMethod } from '@/lib/api-request/api-types'
import { rest, server } from '@/lib/testServer'
import Axios from 'axios'
import { vi } from '@/lib/__test__'
import TokenService from '@/service/token/token.service'

describe('sanitizeApiController()', () => {
  it('transforms controller name if pathvariable is provided', () => {
    expect(sanitizeApiController({ controllerName: '/{2}/{3}' }, { '2': 'two', '3': 'three' })).toMatchObject({
      controllerName: '/two/three',
    })
  })

  it('leaves controllerName as it is if pathvariable is not provided', () => {
    expect(sanitizeApiController({ controllerName: '/{2}/{3}' })).toMatchObject({ controllerName: '/{2}/{3}' })
  })
})

describe('getFormData()', () => {
  it('converts provided object into formData object', () => {
    const obj = { hello: 'world' }
    const fd = getFormData(obj)

    expect(Object.fromEntries(fd.entries())).toEqual(obj)
  })

  // todo: code unreachable
  it.todo('provides correct formdata object if input object is an object containing array as value', () => {
    // const obj = { "hello": [] };
    // const fd = getFormData(obj);
    // expect(Object.fromEntries(fd.entries())).toEqual(obj);
  })
})

describe('transformRequestData()', () => {
  it('returns empty object if request data is not provided', () => {
    expect(
      transformRequestData({
        controllerName: '/',
      }),
    ).toEqual({})
  })
  it("returns config object with 'data' key if request data object is passed", () => {
    const reqBody = { hello: 'world' }
    expect(transformRequestData({ controllerName: '/' }, reqBody)).toEqual(reqBody)
  })
  it("returns config object containing 'data' key as FormData if requestBodyType is 'FORM-DATA'", () => {
    const reqData = { heello: 'world' }
    expect(
      transformRequestData(
        {
          controllerName: '/',
          requestBodyType: RequestBodyType.FORM_DATA,
        },
        reqData,
      ),
    ).toBeInstanceOf(FormData)

    expect(
      transformRequestData(
        {
          controllerName: '/',
          requestBodyType: RequestBodyType.FORM_DATA,
        },
        reqData,
      ),
    ).toEqual(getFormData(reqData))
  })
  it("returns config object containing 'data' key as URLSearchParams if requestBodyType is 'QUERY-STRING'", () => {
    const reqData = { helo: 'world' }
    const expected = transformRequestData(
      {
        controllerName: '/',
        requestBodyType: RequestBodyType.QUERY_STRING,
      },
      reqData,
    )

    expect(expected).toBeInstanceOf(URLSearchParams)
    expect(expected).toEqual(getQueryString(reqData))
  })
})

describe('manageErrorResponse()', async () => {
  beforeEach(() => {
    server.use(
      rest.get<
        never,
        { type: 'networkError' | 'timeout' },
        BackendErrorResponse<{
          message: string
        }>
      >('*', (req, res, ctx) => {
        if (req.url.searchParams.get('type') === 'networkError') {
          return res.networkError('helo')
        }
        if (req.url.searchParams.get('type') === 'timeout') {
          return res(
            ctx.delay(5000),
            ctx.status(400),
            ctx.json({
              error: {
                message: 'Some error',
              },
              message: 'There was some error',
              status: 500,
              success: false,
            }),
          )
        }
        return res(
          ctx.status(400),
          ctx.json({
            error: { err: 'err', message: 'Bad Request' },
            message: 'Bad Request',
            status: 400,
            success: false,
          }),
        )
      }),
    )
  })

  const createTimeoutReq = () =>
    Axios({
      baseURL: 'https://test.com',
      params: {
        type: 'timeout',
      },
      method: 'GET',
      timeout: 500,
      signal: AbortSignal.timeout(500),
    }).catch((err) => {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw manageErrorResponse(err)
    })
  const createNetworkErrorReq = () =>
    Axios({
      baseURL: 'https://test.com',
      method: 'GET',
      timeout: 500,
      params: {
        type: 'networkError',
      },
      signal: AbortSignal.timeout(500),
    }).catch((err) => {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw manageErrorResponse(err)
    })
  const createNormalErrorReq = () =>
    Axios({
      baseURL: 'https://test.com',
      method: 'GET',
      timeout: 500,
      signal: AbortSignal.timeout(500),
    }).catch((err) => {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw manageErrorResponse(err)
    })
  // this should have been tested by ts, but ts can't test because data key is explicitly type casted when errorResponse object is defined.
  it('always returns data object', () => {
    const timeoutReq = createTimeoutReq()
    const networkErrorReq = createNetworkErrorReq()
    const normalError = createNormalErrorReq()

    const timeoutAssertion = expect(timeoutReq).rejects.toEqual(
      expect.objectContaining({
        data: expect.objectContaining({}),
      }),
    )
    const networkErrorAssertion = expect(networkErrorReq).rejects.toEqual(
      expect.objectContaining({
        data: expect.objectContaining({}),
      }),
    )
    const normalErrorAssertion = expect(normalError).rejects.toEqual(
      expect.objectContaining({
        data: expect.objectContaining({}),
      }),
    )

    return Promise.all([timeoutAssertion, networkErrorAssertion, normalErrorAssertion])
  })
  it("has key 'success' as false in 'data' object when there is any HTTP error", () => {
    const timeoutReq = createTimeoutReq()
    const networkErrorReq = createNetworkErrorReq()
    const normalError = createNormalErrorReq()

    expect(timeoutReq).rejects.toEqual(
      expect.objectContaining({
        data: expect.objectContaining({ success: false }),
      }),
    )
    expect(networkErrorReq).rejects.toEqual(
      expect.objectContaining({
        data: expect.objectContaining({ success: false }),
      }),
    )
    expect(normalError).rejects.toEqual(
      expect.objectContaining({
        data: expect.objectContaining({ success: false }),
      }),
    )
  })
  it("has key 'noconnection' as true when server can't connect/timeout", () => {
    const timeoutReq = createTimeoutReq()
    const networkErrorReq = createNetworkErrorReq()

    const timeoutAssert = expect(timeoutReq).rejects.toEqual(
      expect.objectContaining({
        noconnection: true,
      }),
    )
    const networkErrAssert = expect(networkErrorReq).rejects.toEqual(
      expect.objectContaining({
        noconnection: true,
      }),
    )

    return Promise.all([timeoutAssert, networkErrAssert])
  })
})

describe('getAxiosParams() returns an object with correct', () => {
  const apiDetails: ApiDetailType = {
    controllerName: '/',
    baseUrl: 'http://test.com',
    requestMethod: RequestMethod.GET,
    requestBodyType: RequestBodyType.FORM_DATA,
  }

  describe('returns an object with correct baseURL when base url is', () => {
    it('passed in apiDetails', () => {
      expect(getAxiosParams(apiDetails)).toEqual(
        expect.objectContaining({
          baseURL: apiDetails.baseUrl,
        }),
      )
    })
    it('not passed in apiDetails', () => {
      const apiDetailsWithoutBaseurl = {
        ...apiDetails,
      }

      delete apiDetailsWithoutBaseurl.baseUrl
      expect(getAxiosParams(apiDetailsWithoutBaseurl)).toEqual(
        expect.objectContaining({
          baseURL: process.env.VITE_API_ENDPOINT,
        }),
      )
    })
  })

  describe('returns an object with correct method when requestMethod is', () => {
    it('passed in apiDetails', () => {
      const apiDetailsWithPostMethod: typeof apiDetails = { ...apiDetails, requestMethod: RequestMethod.DELETE }

      expect(getAxiosParams(apiDetails)).toEqual(
        expect.objectContaining({
          method: apiDetails.requestMethod,
        }),
      )
      expect(getAxiosParams(apiDetailsWithPostMethod)).toEqual(
        expect.objectContaining({
          method: apiDetailsWithPostMethod.requestMethod,
        }),
      )
    })
    it('not passed in apiDetails', () => {
      const apiDetailsWithoutMethod = { ...apiDetails }
      delete apiDetailsWithoutMethod.requestMethod

      expect(getAxiosParams(apiDetails)).toEqual(
        expect.objectContaining({
          method: RequestMethod.GET,
        }),
      )
    })
  })

  it('returns an object with correct responseType', () => {
    expect(getAxiosParams(apiDetails)).toEqual(
      expect.objectContaining({
        responseType: 'json',
      }),
    )
  })

  it('returns an object with timeout key', () => {
    expect(getAxiosParams(apiDetails)).toEqual(
      expect.objectContaining({
        timeout: expect.any(Number),
      }),
    )
  })

  it('returns an object with abortSignal key', () => {
    expect(getAxiosParams(apiDetails).signal).toBeInstanceOf(AbortSignal)
  })

  it('returns an object with correct headers', () => {
    expect(getAxiosParams(apiDetails).headers).toEqual(getRequestHeaders(apiDetails))
  })
})

describe('requestRefreshToken()', () => {
  it.todo('')
})

describe('handleLogout()', () => {
  it('calls clearToken', () => {
    const clearTokenSpy = vi.spyOn(TokenService, 'clear')
    handleLogout()

    expect(clearTokenSpy).toHaveBeenCalledTimes(1)
  })
  it('calls reloads', () => {
    const actualLocation = window.location

    // because cant redefine reload ( can't spy on reload )
    Object.defineProperty(window, 'location', {
      writable: true,
      value: vi.fn(),
    })

    Object.defineProperty(window.location, 'reload', {
      writable: true,
      value: vi.fn(),
    })

    const reloadSpy = vi.spyOn(window.location, 'reload')
    handleLogout()
    expect(reloadSpy).toHaveBeenCalledTimes(1)

    window.location = actualLocation
  })
})

describe('getBasicAuthCredentials()', () => {
  it("returns config object containing 'auth' key as basicAuth if requestBodyType is 'NO-AUTH'", () => {
    expect(getBasicAuthCredentials(RequestBodyType.NO_AUTH)).toEqual(basicAuthCredentials)
  })
})
