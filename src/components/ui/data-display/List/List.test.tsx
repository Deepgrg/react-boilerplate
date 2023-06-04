import { render } from '@/lib/__test__'
import List from '@/components/ui/data-display/List/List'
import { Icon } from '@/components/ui/core/Icon'
import { ArrowDown, Question } from 'phosphor-react'
import Avatar from '../Avatar/Avatar'

describe('List Data Display', () => {
  it('List Data Display to rendered on the dom', () => {
    render(
      <List
        heading="Heading"
        lead={<Avatar variant="icon" />}
        subHeadingIcon={<Icon icon={Question} />}
        subHeading={['hello', 'hi']}
        trail={<Icon icon={ArrowDown} />}
      />
    )
  })
})
