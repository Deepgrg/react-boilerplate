import { Icon } from '@/components/ui/core/Icon'
import { Activity } from 'phosphor-react'
import Example from '@/components/functional/Form/FormExample'

function Child1() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const states = 'active'
  return (
    <>
      <h3>Child1</h3>
      {/* <Activity size='400px' color="red"/> */}
      <Icon icon={Activity} size="xxxl" alt="activity" color="text-red-500" />
      <Example />
    </>
  )
}

export default Child1
