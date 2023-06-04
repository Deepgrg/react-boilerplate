interface BackendSuccessResponse<T> {
  data: T
  status: number
  message: string
  success: true
}

interface BackendErrorResponse<T> {
  error: T
  status: number
  message: string
  success: false
}

interface GenericObj<Value = string> {
  [key: string]: Value
}

type OneOf<Obj, Key extends keyof Obj> = {
  [key in Exclude<keyof Obj, Key>]: null
} & Pick<Obj, Key>

type ValPrimitive = string | number | boolean

type ValueOf<Obj> = (
  Obj extends object
    ? {
      [K in keyof Obj]: Obj[K] extends object ? ValueOf<Obj[K]> : Obj[K]
    }[keyof Obj]
    : ''
  ) extends infer Val
  ? Val
  : never

type AddValue<Obj extends object, Value> = { [key in keyof Obj]: Obj[key] | Value }

// eslint-disable-next-line
type SelectedPartial<T, K extends keyof any> = Omit<T, K> & Partial<Pick<T, K>>
