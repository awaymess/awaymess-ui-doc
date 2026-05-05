'use client'

import React, { useState } from 'react'
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from '@awaymess/ui'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useThemeMode } from './ThemeRegistry'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import packageJson from '../../package.json'

const drawerWidth = 260
const version =
  packageJson.dependencies?.['@awaymess/ui']?.replace(/^[~^]/, '') || '0.1.13'

type MenuItemType = { label: string; path: string }
type MenuCategory = { category: string; items: MenuItemType[] }

const MENU: (MenuItemType | MenuCategory)[] = [
  { label: 'Introduction', path: '/' },
  {
    category: 'Custom Components',
    items: [
      { label: 'GlassCard', path: '/components/glass-card' },
      { label: 'UserCard', path: '/components/user-card' },
    ],
  },
  {
    category: 'Inputs',
    items: [
      { label: 'Buttons & Icons', path: '/components/buttons' },
      { label: 'Text Fields', path: '/components/text-fields' },
      { label: 'Select & Autocomplete', path: '/components/select' },
      { label: 'Checkbox & Switch', path: '/components/switches' },
      { label: 'Forms', path: '/components/form' },
    ],
  },
  {
    category: 'Data Display',
    items: [
      { label: 'Typography', path: '/components/typography' },
      { label: 'Lists', path: '/components/lists' },
      { label: 'Tables', path: '/components/tables' },
      { label: 'Chip & Tooltip', path: '/components/chip-tooltip' },
    ],
  },
  {
    category: 'Feedback',
    items: [
      { label: 'Alerts & Progress', path: '/components/feedback' },
      { label: 'Dialogs', path: '/components/dialogs' },
    ],
  },
  {
    category: 'Surfaces & Navigation',
    items: [
      { label: 'Paper & Card', path: '/components/surfaces' },
      { label: 'AppBar & Drawer', path: '/components/appbar-drawer' },
      { label: 'Tabs & Stepper', path: '/components/tabs-stepper' },
    ],
  },
  {
    category: 'Layout & Utils',
    items: [
      { label: 'Layout (Box, Stack, Grid)', path: '/components/layout' },
      { label: 'Hooks', path: '/components/hooks' },
    ],
  },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const { mode, toggleColorMode } = useThemeMode()
  const pathname = usePathname()

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant='h6' color='primary' sx={{ fontWeight: 'bold' }}>
          @awaymess/ui
        </Typography>
        <Typography variant='caption' color='text.secondary'>
          v{version || '0.1.13'}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ flexGrow: 1, overflowY: 'auto', pb: 2 }}>
        <List sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {MENU.map((menuBlock, idx) => {
            if ('category' in menuBlock) {
              return (
                <React.Fragment key={idx}>
                  <Box component='li' sx={{ listStyle: 'none' }}>
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      sx={{
                        display: 'block',
                        mt: 2,
                        mb: 1,
                        ml: 2,
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {menuBlock.category}
                    </Typography>
                  </Box>
                  {menuBlock.items.map((item) => {
                    const isActive = pathname === item.path
                    return (
                      <ListItem key={item.label} disablePadding>
                        <ListItemButton
                          component={Link}
                          href={item.path}
                          selected={isActive}
                          onClick={() => {
                            if (!isDesktop) setMobileOpen(false)
                          }}
                          sx={{ borderRadius: 2 }}
                        >
                          <ListItemText
                            primary={item.label}
                            sx={{
                              '& .MuiTypography-root': {
                                fontSize: '0.875rem',
                                fontWeight: isActive ? 600 : 500,
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    )
                  })}
                </React.Fragment>
              )
            }

            const isActive = pathname === menuBlock.path
            return (
              <ListItem key={menuBlock.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={menuBlock.path}
                  selected={isActive}
                  onClick={() => {
                    if (!isDesktop) setMobileOpen(false)
                  }}
                  sx={{ borderRadius: 2 }}
                >
                  <ListItemText
                    primary={menuBlock.label}
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '0.875rem',
                        fontWeight: isActive ? 600 : 500,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar
        position='fixed'
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={toggleColorMode} color='inherit'>
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component='nav'
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: { xs: 3, md: 6 },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: 8, // Offset for the fixed App Bar
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
