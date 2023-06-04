/* eslint-disable */

import { FC, useState } from 'react'
import { Box, Button, Flexbox, Icon, Text } from '@/components/ui'
import { Link, NavLink } from '@/router'
import { OptionType, Select } from '@/components/functional/Select'
import { selectMockData } from '@/components/functional/Select/Select.schema'
import { Grid } from '@/components/ui/core/Grid'
import { OptionsType } from 'react-select'
import { Form } from '@/components/functional'
import { useForm } from 'react-hook-form'
import { Minus, Plus } from 'phosphor-react'

const QueryTest: FC = () => {
  // const { data } = useTestQuery()

  const [selectValue, setSelectValue] = useState<OptionsType<OptionType<string>> | null>()

  const { control, handleSubmit } = useForm({
    values: { select: selectValue },
  })

  return (
    <Box className={'p-10'}>
      <Text variant={'h1'}>
        This file is created is <b> Diwash Baral</b> and should not be used by other as it will invite conflicts.
      </Text>
      <Grid sm={'sm:grid-cols-3'} className={'my-10'}>
        <Grid.Col xs={'xs:col-span-1'}>{`xs={'xs:col-span-1'}`}</Grid.Col>
        <Grid.Col xs={'xs:col-span-1'}>{`xs={'xs:col-span-1'}`}</Grid.Col>
        <Grid.Col xs={'xs:col-span-1'}>{`xs={'xs:col-span-1'}`}</Grid.Col>
      </Grid>
      <Link to={'/test'} params={{}} query={{ nepal: 'nepal', india: 'india' }}>
        Link
      </Link>
      <Select
        isMultiCheckbox
        value={selectValue}
        options={selectMockData}
        onChange={(value) => {
          setSelectValue(value)
        }}
      />
      <NavLink to="/test/:param/:param2/:param3" params={{ param: 'adasd', param2: 'asdhkah', param3: 'ashdkjasjd' }}>
        <Text color="text-ss-50" className={'mt-24'} variant="h1" as="h2">
          NavLink
        </Text>
      </NavLink>
      <Box className={'mt-3'}>
        {['a', 'b', 'c'].map((i) => {
          return [1, 2, 3].map((j) => (
            <div key={j}>
              {i}, {j}
            </div>
          ))
        })}
      </Box>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/* eslint-disable-next-line no-console */}
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Form.Select
          calculateValueOnChange
          label={'Select'}
          control={control}
          options={selectMockData}
          name={'select'}
        />
        <Button type={'submit'}>Submit</Button>
      </form>
      <Text>Field Array</Text>
      <Form
        onSubmit={(data) => console.log(data)}
        initialValues={{ select: selectValue, array: [{ select: '', text: '' }] }}
      >
        <Form.Select
          calculateValueOnChange
          label={'Select'}
          control={control}
          options={selectMockData}
          name={'select'}
        />
        <Form.FieldArray name={'array'}>
          {({ fields, append, remove }) => (
            <>
              {fields.map((field, index) => (
                <Flexbox key={field.id}>
                  <Form.Select
                    calculateValueOnChange
                    label={'Select'}
                    options={selectMockData}
                    name={`array.${index}.select`}
                  />

                  <Form.Input name={`array.${index}.text`} />

                  <Button onClick={() => remove(index)}>
                    <Icon icon={Minus} />
                  </Button>
                </Flexbox>
              ))}
              <Button onClick={() => append({ select: '', text: '' })}>
                <Icon icon={Plus} />
              </Button>
            </>
          )}
        </Form.FieldArray>

        <Button type={'submit'}>Submit</Button>
      </Form>
    </Box>
  )
}

export default QueryTest
