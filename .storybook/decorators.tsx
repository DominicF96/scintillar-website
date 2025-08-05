import React from 'react'
import { Decorator } from '@storybook/react'
import { ThemeProvider } from 'next-themes'
import { LocaleProvider } from '../src/lib/providers/locale.context'
import { SettingsPanelProvider } from '../src/lib/providers/settings-panel.context'
import { SidebarProvider } from '../src/lib/providers/sidebar.context'
import { PrimarySidebarProvider } from '../src/lib/providers/primary-sidebar.context'
import { LoadingProvider } from '../src/lib/providers/loading.context'

// Base theme decorator for all stories
export const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light'
  return (
    <ThemeProvider attribute="class" defaultTheme={theme} forcedTheme={theme}>
      <div className="min-h-screen bg-background text-foreground">
        <Story />
      </div>
    </ThemeProvider>
  )
}

// Locale decorator for components that need i18n
export const withLocale: Decorator = (Story, context) => {
  const locale = context.globals.locale || 'en'
  return (
    <LocaleProvider locale={locale}>
      <Story />
    </LocaleProvider>
  )
}

// Settings panel decorator for components that use settings
export const withSettingsPanel: Decorator = (Story) => (
  <SettingsPanelProvider>
    <Story />
  </SettingsPanelProvider>
)

// Sidebar decorators for navigation components
export const withSidebar: Decorator = (Story) => (
  <SidebarProvider>
    <Story />
  </SidebarProvider>
)

export const withPrimarySidebar: Decorator = (Story) => (
  <PrimarySidebarProvider>
    <Story />
  </PrimarySidebarProvider>
)

// Loading context decorator
export const withLoading: Decorator = (Story) => (
  <LoadingProvider>
    <Story />
  </LoadingProvider>
)

// Complete app context - includes all providers for complex components
export const withAppContext: Decorator = (Story, context) => {
  const locale = context.globals.locale || 'en'
  const theme = context.globals.theme || 'light'
  return (
    <ThemeProvider attribute="class" defaultTheme={theme} forcedTheme={theme}>
      <LocaleProvider locale={locale}>
        <LoadingProvider>
          <SettingsPanelProvider>
            <SidebarProvider>
              <PrimarySidebarProvider>
                <div className="min-h-screen bg-background text-foreground">
                  <Story />
                </div>
              </PrimarySidebarProvider>
            </SidebarProvider>
          </SettingsPanelProvider>
        </LoadingProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}

// Layout-specific decorator for components that need app layout context
export const withLayoutContext: Decorator = (Story, context) => {
  const locale = context.globals.locale || 'en'
  const theme = context.globals.theme || 'light'
  return (
    <ThemeProvider attribute="class" defaultTheme={theme} forcedTheme={theme}>
      <LocaleProvider locale={locale}>
        <SettingsPanelProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Story />
          </div>
        </SettingsPanelProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}