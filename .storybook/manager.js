import { addons } from '@storybook/manager-api'
import { themes, create } from '@storybook/theming'

// Create a custom dark theme based on Storybook's dark theme
const customDarkTheme = create({
  base: 'dark',
  brandTitle: 'Your App Storybook',
  brandUrl: '/',
})

// Set Storybook UI to dark theme
addons.setConfig({
  theme: customDarkTheme,
})