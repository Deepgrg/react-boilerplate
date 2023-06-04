interface IInputProps {
  name: string
  type: 'text' | 'email' | 'number' | 'password'
  placeholder?: string
  size?: number
  onChange?: () => void
}

const InputComponentStory = (props: IInputProps) => {
  const { name, type, placeholder, size, onChange } = props
  return (
    <input
      type={type}
      name={name}
      size={size || 50}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default InputComponentStory
