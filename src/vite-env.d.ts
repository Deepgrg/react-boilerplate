/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_ENDPOINT: string
  readonly PORT: string
  readonly HTTPS: string
  readonly BUILD_PATH: string
  readonly CI: string
  readonly MODE: string
  readonly GENERATE_SOURCEMAP: string

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
