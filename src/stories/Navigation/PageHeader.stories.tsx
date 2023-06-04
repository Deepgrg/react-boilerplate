import { PageHeader } from '@/components/ui/navigation/PageHeader'
import { ComponentStory, ComponentMeta } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'navigation/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />



export const TiltleOnly = Template.bind({})
TiltleOnly.args = {
  type:'title-only',
  title:'Dashboard'
}

export const TitleWithBorder = Template.bind({})
TitleWithBorder.args = {
  type:'title-with-border',
  title:'Dashboard'
}


export const TitleSubtitle = Template.bind({})
TitleSubtitle.args = {
  type:'title-subtitle',
  title:'Dashboard',
  subtitle:'Blog Post'
}

export const BreadCrumbOnly = Template.bind({})
BreadCrumbOnly.args = {
  type:'breadcrumb-only'
}

export const breadcrumbSubtitle = Template.bind({})
breadcrumbSubtitle.args = {
  type:'breadcrumb-subtitle',
  subtitle:'Blog Post'
}

export const TitleBreadCrumb = Template.bind({})
breadcrumbSubtitle.args = {
  type:'title-breadcrump',
  title:'Dashboard'
}