import Dropzone from '@/components/functional/Dropzone/Dropzone'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, vitest } from 'vitest'

describe('Dropzone', () => {
  it.todo('renders children')

  it.todo('provides files in onchange callback when file is upload', () => {
    const onChangeCb = vitest.fn()
    render(<Dropzone datatest-id="dz" onChange={(e) => onChangeCb(e)} />)
    const dzone = screen.getByTestId('dz')
    const fileObj = new File(['foo'], 'foo.txt', {
      type: 'text/plain',
    })
    userEvent.upload(dzone, fileObj)

    expect(onChangeCb).toHaveBeenCalledWith(expect.arrayContaining(['']))
  })

  it.todo('provides files in onchange callback when file is dragged')
})

describe('Dropzone with upload', () => {
  it.todo('renders the children fileview components')
})
