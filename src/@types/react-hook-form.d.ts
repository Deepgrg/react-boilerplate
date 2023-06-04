import 'react-hook-form'

declare module 'react-hook-form' {
  export type UnPackAsyncDefaultValues<TFieldValues> = TFieldValues extends () => Promise<infer U> ? U : TFieldValues;
}
