"use client";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme";
import Navbar from "./_Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar /> 
              <Toaster>
                {children}
              </Toaster>
          </ThemeProvider>
        </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}
