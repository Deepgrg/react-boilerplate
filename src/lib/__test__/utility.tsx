import { initApiRequest, RequestMethod } from '@/lib/api-request'
import TokenService, { TokenData } from '@/service/token/token.service'
import React from 'react'
import AppProvider from '@/providers/AppProvider'
import { BrowserRouter } from 'react-router-dom'
import { render, renderHook, RenderHookOptions, RenderHookResult, RenderOptions } from '@testing-library/react'
import { SidebarProvider } from '@/providers/SidebarProvider'
import { queries, Queries } from '@testing-library/dom'

const customWrapper = (props: { children: React.ReactElement }, additionalWrapper?: React.ComponentType) => {
  return (
    <AppProvider>
      <SidebarProvider>
        <BrowserRouter>
          {additionalWrapper ? React.createElement(additionalWrapper, {}, props.children) : props.children}
        </BrowserRouter>
      </SidebarProvider>
    </AppProvider>
  )
}

/**
 * Abstracted Renderer from the testing library render
 * AppProvider and Browser router are default wrapper
 * Additional Wrappers are the children to the default wrapper
 * @param ui
 * @param options // wrapper is omitted
 * @param additionalWrapper
 */
export const customRender = (
  ui: React.ReactElement,
  options: Omit<RenderOptions, 'wrapper'> = {},
  additionalWrapper?: React.ComponentType,
) => {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: (props) => customWrapper(props, additionalWrapper),
    ...options,
  })
}

/**
 * Abstracted Hook Renderer from the testing library renderHook
 * AppProvider and Browser router are default wrapper
 * Additional Wrappers are the children to the default wrapper
 * @param renderer
 * @param options // wrapper is omitted
 * @param additionalWrapper
 */
export const customRenderHook = <
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container,
>(
  renderer: (initialProps: Props) => Result,
  options: Omit<RenderHookOptions<Props, Q, Container, BaseElement>, 'wrapper'> = {},
  additionalWrapper?: React.ComponentType,
): RenderHookResult<Result, Props> => {
  return renderHook(renderer, {
    // wrap provider(s) here if needed
    wrapper: (props) => customWrapper(props as { children: React.ReactElement }, additionalWrapper),
    ...options,
  })
}

interface LoginCredential {
  email: string
  password: string
}

export const JSDomLogin = async (loginCredential: LoginCredential) => {
  const login = await initApiRequest<BackendSuccessResponse<TokenData>>({
    apiDetails: {
      controllerName: '/v1/auth/login',
      requestMethod: RequestMethod.POST,
    },
    requestData: {
      ...loginCredential,
    },
  })

  if (login?.data.success) TokenService.set(login?.data.data)
}
