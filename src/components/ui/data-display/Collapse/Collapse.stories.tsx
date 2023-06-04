import Collapse from '@/components/ui/data-display/Collapse/Collapse'
import { CollapseBody } from '@/components/ui/data-display/Collapse/CollapseBody'
import { CollapseHead } from '@/components/ui/data-display/Collapse/CollapseHead'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof Collapse> = {
  title: 'Components/Ui/DataDisplay/Collapse',
  component: Collapse,
}

export default meta

const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>
    <CollapseHead>Click To Open</CollapseHead>
    <CollapseBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      consectetur, molestias voluptatem laudantium nobis minima.
    </CollapseBody>
  </Collapse>
)

export const NormalCollapse = Template.bind({})
NormalCollapse.args = {
  border: false,
}

export const BorderedCollapse = Template.bind({ border: true })
BorderedCollapse.args = {
  border: true,
}

export const CollapseWithOpenProp: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args}>
    <CollapseHead onClick={() => {}}>Click To Open</CollapseHead>
    <CollapseBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      consectetur, molestias voluptatem laudantium nobis minima.
    </CollapseBody>
  </Collapse>
)
CollapseWithOpenProp.args = {
  open: true,
}

export const CollapseWithoutHandlers: ComponentStory<typeof Collapse> = (
  args
) => (
  <Collapse {...args}>
    <CollapseHead>No handlers</CollapseHead>
    <CollapseBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      consectetur, molestias voluptatem laudantium nobis minima.
    </CollapseBody>
  </Collapse>
)
CollapseWithoutHandlers.args = {
  open: true,
}
