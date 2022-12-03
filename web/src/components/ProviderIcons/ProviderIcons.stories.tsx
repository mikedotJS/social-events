// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProviderIcons> = (args) => {
//   return <ProviderIcons {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProviderIcons from './ProviderIcons'

export const generated = () => {
  return <ProviderIcons />
}

export default {
  title: 'Components/ProviderIcons',
  component: ProviderIcons,
} as ComponentMeta<typeof ProviderIcons>
