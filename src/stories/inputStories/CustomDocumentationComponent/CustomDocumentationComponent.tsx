interface IProps {
  title: string
  description: string
}

const CustomDocumentationComponent = (props: IProps) => {
  const { title, description } = props
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  )
}

export default CustomDocumentationComponent
