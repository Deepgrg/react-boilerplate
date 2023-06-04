import * as Yup from 'yup'

export const initialValues = {
  firstName: '',
  lastName: '',
  description: '',
  languages: [],
  gender: '',
}

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required')
    .min(3, 'First Name must be of atleast 3 characters'),
  lastName: Yup.string()
    .required('Last Name is required')
    .max(50, 'Last Name can be of maximum 50 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be of atleast 10 characters'),
  languages: Yup.array()
    .min(1, 'At least 1 Language must be selected')
    .required('Language is required'),
  gender: Yup.string().required('Gender is required'),
})
