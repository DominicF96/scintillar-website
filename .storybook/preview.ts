import type { Preview } from '@storybook/react'
import '../app/globals.scss'
import { withTheme, withLocale } from './decorators'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    backgrounds: {
      default: 'theme-background',
      values: [
        {
          name: 'theme-background',
          value: 'hsl(var(--background))',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark', 
          value: '#0a0a0a',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
        ],
        showName: true,
      },
    },
  },
  decorators: [withTheme, withLocale],
  tags: ['autodocs'],
}

export default preview