/**
 * The file must and only contain the global variable declaration
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
  declare const __DEV__: boolean
  interface Window {
    __DEV__: boolean
  }
}

export {}
