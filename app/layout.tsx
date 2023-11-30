import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from "@/components/providers/theme-provider";
import {Toaster} from "sonner";
import {ClerkProvider} from "@clerk/nextjs";
import {SettingsModalProvider} from "@/components/providers/settings-modal-provider";


const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Lytvynenko Cloud',
    description: 'The cloud where better and faster work happens.',
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/logo.svg",
                href: "/logo.svg"
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/logo-dark.svg",
                href: "/logo.svg"
            },
        ]
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
            {/* suppressHydrationWarning added, due to theme provider can add hydration errors*/}
            <body className={inter.className}>
                <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="Lytvynenko-theme"
              >
                    <Toaster position="bottom-center" />
                    <SettingsModalProvider />
                        {children}
                </ThemeProvider>

                </body>
            </html>
        </ClerkProvider>
    )
}
