interface ITextareaProps {
  name: string
  placeholder?: string
  rows?: number
  onChange?: () => void
}
const TextareaComponentStory = (props: ITextareaProps) => {
  const { name, placeholder, rows, onChange } = props
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows || 4}
      onChange={onChange}
    />
  )
}

export default TextareaComponentStory
