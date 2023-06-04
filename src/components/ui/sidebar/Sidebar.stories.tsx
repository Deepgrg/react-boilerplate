import { Sidebar } from '@/components/ui/sidebar/Sidebar'
import { SidebarProvider } from '@/providers/SidebarProvider'
import { RouterDecorator } from '@/stories/Decorators/RouterDecorator.stories'
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Components/Ui/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
    RouterDecorator,
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Sidebar>

export default meta

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const SidebarSimple = Template.bind({})
