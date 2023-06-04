import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLoginMutation } from '@/core/public/Login/login.query'

function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [erros, setErrors] = useState({
    email: '',
    password: '',
  })

  const { mutate: loginAction, isLoading } = useLoginMutation()

  const handleValidate = (params?: { key: string; value: string }) => {
    const newErros = { ...erros }
    if (params?.key) {
      if (!params?.value.trim()) {
        newErros[
          params?.key as keyof typeof newErros
        ] = `${params?.key} is required`
      } else {
        newErros[params?.key as keyof typeof newErros] = ''
      }
    } else {
      Object.keys(formValues).forEach((item) => {
        if (!formValues[item as keyof typeof formValues].trim()) {
          newErros[item as keyof typeof newErros] = `${item} is required`
        } else {
          newErros[item as keyof typeof newErros] = ''
        }
      })
    }
    setErrors(newErros)
    return newErros
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validateErrors = handleValidate()
    let hasErros = false
    Object.keys(validateErrors).forEach((item) => {
      if (validateErrors[item as keyof typeof validateErrors]) {
        hasErros = true
      }
    })
    if (!hasErros) {
      loginAction(formValues)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValidate({ key: e.target.name, value: e.target.value })
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="text"
            value={formValues.email}
            onChange={(e) => handleChange(e)}
            onBlur={() =>
              handleValidate({ key: 'email', value: formValues.email })
            }
          />
          {erros.email && <p>{erros.email}</p>}
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={(e) => handleChange(e)}
            onBlur={() =>
              handleValidate({ key: 'password', value: formValues.password })
            }
          />
          {erros.password && <p>{erros.password}</p>}
        </label>
        <button disabled={isLoading} type="submit">
          {isLoading ? 'Loading' : 'Submit'}
        </button>
        <NavLink to="/forgot-password">Forgot Password!!!!!!</NavLink>
      </form>
    </>
  )
}

export default Login
