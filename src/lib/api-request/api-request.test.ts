import { initApiRequest } from '@/lib/api-request/api-request'
import { ApiDetailType, RequestBodyType, RequestMethod } from '@/lib/api-request/api-types'
import { rest, server } from '@/lib/testServer'
import * as ApiSchema from '@/lib/api-request/api-schema'
import HttpException from '@/utility/exceptions/http-exception'
import { vitest } from 'vitest'
import { URL } from 'node:url'
import TokenService from '@/service/token/token.service'

interface IResponse<IReqBody = { [key: string]: string }> {
  pathname: string
  params: { [key: string]: string }
  reqBody: IReqBody
  baseUrl: string
  controllerName: string
  requestMethod: string
  headers: GenericObj
  isReqBodyFormData?: boolean
}

const defaultApiDetails: ApiDetailType = {
  actionName: 'TEST_API_REQUEST',
  requestMethod: RequestMethod.GET,
  controllerName: ``,
}

describe('initApiRequest', () => {
  const RefreshTokenUrl = new URL(ApiSchema.refreshTokenApiDetails.controllerName, process.env.VITE_API_ENDPOINT)
  const TestUrl = new URL('/test', process.env.VITE_API_ENDPOINT)

  describe('request tests', () => {
    beforeEach(() => {
      server.use(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rest.all<any, any, IResponse>(`*`, async (req, res, ctx) => {
          const isMultipart: boolean = req.headers.get('content-type') === 'multipart/form-data'

          let isFormData = false
          if (isMultipart) {
            const data: ArrayBuffer = await req.arrayBuffer()
            isFormData = data instanceof FormData
          }
          return res(
            ctx.status(200),
            ctx.json({
              pathname: req.url.pathname,
              reqBody: isMultipart ? {} : req.body,
              params: Object.fromEntries(req.url.searchParams.entries()),
              baseUrl: req.url.origin,
              controllerName: req.url.pathname,
              requestMethod: req.method.toUpperCase(),
              headers: Object.fromEntries(req.headers.entries()),
              isReqBodyFormData: isFormData,
            }),
          )
        }),
      )
    })

    it('uses the provided pathvariables', async () => {
      const pathVariables = {
        first: '1',
        second: '2',
        third: '3',
      }
      const res = await initApiRequest<IResponse>({
        apiDetails: {
          ...defaultApiDetails,
          controllerName: `/{first}/{second}/{third}`,
        },
        pathVariables,
      })
      expect(res?.data.pathname).toBe(`/${Object.values(pathVariables).join('/')}`)
    })

    it('uses the provided params', async () => {
      const params = {
        a: 'a',
        b: 'b',
      }
      const res = await initApiRequest<IResponse>({
        apiDetails: {
          actionName: 'TEST_API_REQUEST',
          requestMethod: RequestMethod.GET,
          controllerName: `test`,
          baseUrl: process.env.VITE_API_ENDPOINT,
        },
        params,
      })

      expect(res?.data.params).toEqual(params)
    })

    it('uses the provided request body', async () => {
      const requestData = {
        hello: 'wold',
      }
      const res = await initApiRequest<IResponse<typeof requestData>>({
        apiDetails: {
          actionName: 'TEST_API_REQUEST',
          requestMethod: RequestMethod.POST,
          controllerName: `test`,
          baseUrl: process.env.VITE_API_ENDPOINT,
        },
        requestData,
      })

      expect(res?.data.reqBody).toEqual(requestData)
    })

    it('uses the provided base url', async () => {
      const baseUrl = 'https://test.com'
      const res = await initApiRequest<IResponse>({
        apiDetails: {
          ...defaultApiDetails,
          baseUrl,
        },
      })

      expect(res?.data.baseUrl).toBe(baseUrl)
    })

    it('uses the provided controllerName', async () => {
      const controllerName = '/helo'
      const res = await initApiRequest<IResponse>({
        apiDetails: {
          ...defaultApiDetails,
          controllerName,
        },
      })

      expect(res?.data.controllerName).toBe(controllerName)
    })

    it('uses the provided request method', async () => {
      const requestMethod = RequestMethod.HEAD
      const res = await initApiRequest<IResponse>({
        apiDetails: {
          ...defaultApiDetails,
          requestMethod,
        },
      })

      expect(res?.data.requestMethod).toBe(requestMethod)
    })

    // RequestBodyType.AUTH is not used anywhere so it is not tested
    describe('uses the provided request body type', () => {
      it('when request body type is FORM_DATA', async () => {
        const res = await initApiRequest<IResponse>({
          apiDetails: {
            actionName: 'TEST_API_REQUEST',
            requestMethod: RequestMethod.POST,
            controllerName: `/hello1`,
            requestBodyType: RequestBodyType.FORM_DATA,
          },
          requestData: {
            hello: 'worldsssss',
          },
        })
        expect(res?.data.isReqBodyFormData).toBeTruthy()
        expect(res?.data.headers['content-type']).toBe('multipart/form-data')
      })

      it('when request body type is NO-AUTH, it sends basic auth request', async () => {
        const res = await initApiRequest<IResponse>({
          apiDetails: {
            actionName: 'TEST_API_REQUEST',
            requestMethod: RequestMethod.GET,
            controllerName: `test12232323`,
            baseUrl: process.env.VITE_API_ENDPOINT,
            requestBodyType: RequestBodyType.NO_AUTH,
          },
          requestData: {
            hello: 'worldsssss',
          },
        })

        expect(res?.data.headers.authorization).toBe(
          `Basic ${Buffer.from(Object.values(ApiSchema.basicAuthCredentials).join(':')).toString('base64')}`,
        )
      })

      // todo : should accept headers be tested ?
      it('when request body type is FILE', async () => {
        const res = await initApiRequest<IResponse>({
          apiDetails: {
            actionName: 'TEST_API_REQUEST',
            requestMethod: RequestMethod.GET,
            controllerName: `test12232323`,
            baseUrl: process.env.VITE_API_ENDPOINT,
            requestBodyType: RequestBodyType.FILE,
          },
          requestData: {
            hello: 'worldsssss',
          },
        })

        expect(res?.data).toBeInstanceOf(Blob)
      })
    })
  })

  describe('response tests', () => {
    // todo include api-schema tests ?
    describe('on error response', () => {
      beforeEach(() => {
        server.use(
          rest.get('*', (req, res, ctx) => {
            return res(
              ctx.status(500),
              ctx.json({
                error: 'error',
              }),
            )
          }),
        )
      })

      // white box
      it('throws exception', async () => {
        await expect(
          initApiRequest({
            apiDetails: {
              ...defaultApiDetails,
            },
          }),
        ).rejects.toThrow(HttpException)
      })
    })

    describe('on success', () => {
      beforeEach(() => {
        server.use(
          rest.get('*', (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                message: 'success',
              }),
            )
          }),
        )
      })

      it("doesn't throw error", async () => {
        await expect(
          initApiRequest({
            apiDetails: {
              ...defaultApiDetails,
            },
          }),
        ).resolves.not.toThrow()
      })
    })

    describe('auth token tests', () => {
      beforeEach(() => {
        server.use(
          rest.get(new URL('/test*', process.env.VITE_API_ENDPOINT).href, (req, res, ctx) => {
            if (req.headers.get('authorization')?.split(' ')[1]) {
              return res(
                ctx.status(200),
                ctx.json({
                  pathname: req.url.pathname,
                  reqBody: req.body,
                  params: Object.fromEntries(req.url.searchParams.entries()),
                  baseUrl: req.url.origin,
                  controllerName: req.url.pathname,
                  requestMethod: req.method.toUpperCase(),
                  headers: Object.fromEntries(req.headers.entries()),
                }),
              )
            }
            return res(
              ctx.status(401),
              ctx.json({
                error: 'Unauthorized',
              }),
            )
          }),
          rest.put(RefreshTokenUrl.href, (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                message: 'Success',
                success: true,
                data: {
                  accessToken: 'token',
                },
              }),
            )
          }),
        )
      })

      afterEach(() => {
        server.events.removeAllListeners()
      })

      // white box
      it('calls logout if refresh token api fails', async () => {
        server.use(
          rest.get(RefreshTokenUrl.href, (req, res, ctx) => {
            return res(
              ctx.status(401),
              ctx.json({
                error: 'Unauth',
              }),
            )
          }),
        )
        const logoutSpy = vitest.spyOn(ApiSchema, 'handleLogout')
        logoutSpy.mockImplementation(() => {})

        await initApiRequest({
          apiDetails: {
            ...defaultApiDetails,
            controllerName: `${ApiSchema.refreshTokenApiDetails.controllerName}`,
          },
        })
        expect(logoutSpy).toBeCalledTimes(1)
      })

      // blackbox
      it('requests refresh token if response status is 401 unauthorized', async () => {
        const urls: string[] = []

        server.events.on('request:start', (req) => {
          urls.push(req.url.href)
        })

        const controllerName = '/test'
        await initApiRequest({
          apiDetails: {
            ...defaultApiDetails,
            controllerName,
          },
        })

        expect(urls).toEqual([TestUrl.href, RefreshTokenUrl.href, TestUrl.href])
      })

      // blackbox
      it('requests refresh token only once for multiple 401 requests', async () => {
        sessionStorage.removeItem(TokenService.tokenKey)
        const url1 = new URL('/test1', process.env.VITE_API_ENDPOINT)
        const url2 = new URL('/test2', process.env.VITE_API_ENDPOINT)
        const url3 = new URL('/test3', process.env.VITE_API_ENDPOINT)

        const urlHits: { url: string; token: string }[] = []
        server.events.on('request:start', (req) => {
          urlHits.push({
            url: req.url.href,
            token: req.headers.get('authorization')?.split(' ')[1] || '',
          })
        })

        await Promise.all([
          initApiRequest({
            apiDetails: {
              ...defaultApiDetails,
              controllerName: url1.pathname,
            },
          }),
          initApiRequest({
            apiDetails: {
              ...defaultApiDetails,
              controllerName: url2.pathname,
            },
          }),
          initApiRequest({
            apiDetails: {
              ...defaultApiDetails,
              controllerName: url3.pathname,
            },
          }),
        ])

        expect(urlHits).toEqual([
          expect.objectContaining({ url: url1.href, token: '' }),
          expect.objectContaining({ url: url2.href, token: '' }),
          expect.objectContaining({ url: url3.href, token: '' }),
          expect.objectContaining({
            url: RefreshTokenUrl.href,
            token: '',
          }),
          expect.objectContaining({ url: url1.href, token: 'token' }),
          expect.objectContaining({ url: url2.href, token: 'token' }),
          expect.objectContaining({ url: url3.href, token: 'token' }),
        ])
      })
    })
  })
})
