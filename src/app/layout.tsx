import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import Header from '@/components/Header';

export const metadata = {
  title: 'Neil Moon',
  description: 'Neil Moon \'s personal website',
};

const DRAWER_WIDTH = 240;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Header />
          </AppBar>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: `${DRAWER_WIDTH}px`,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
