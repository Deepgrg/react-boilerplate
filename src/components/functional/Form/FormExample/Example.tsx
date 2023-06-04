import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import Form from '@/components/functional/Form/Form'
import { Button } from '@/components/ui'
import { selectMockData } from '@/components/functional/Select/Select.schema'
import { initialValues, validationSchema } from '@/components/functional/Form/FormExample/schema'

const Example: React.FunctionComponent = () => {
  const onSubmit: SubmitHandler<typeof initialValues> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => {
        return (
          <>
            <Form.Input label='First Name' type='text' name='firstName' />
            <Form.Input label='Last Name' type='text' name='lastName' />
            <Form.Textarea name='description' label='Description' />
            <Form.Check
              label='Languages'
              name='languages'
              options={[
                {
                  label: 'react',
                  value: 'react',
                },
                {
                  label: 'angular',
                  value: 'angular',
                },
              ]}
            />
            <Form.Radio
              label='Gender'
              name='gender'
              options={[
                {
                  label: 'Male',
                  value: 'male',
                },
                {
                  label: 'Female',
                  value: 'female',
                },
              ]}
            />
            <Form.Select calculateValueOnChange label={'Select'} options={selectMockData} name={'select'} />
            <Button type='submit'>Submit</Button>
          </>
        )
      }}
    </Form>
  )
}

export default Example
