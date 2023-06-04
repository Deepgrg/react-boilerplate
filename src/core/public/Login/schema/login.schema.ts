import { ILoginRequest } from '@/core/public/Login/schema/login.interface'

const loginInitialValues: ILoginRequest = {
  email: '',
  password: '',
}

const validationSchema = {}

export { loginInitialValues, validationSchema }
