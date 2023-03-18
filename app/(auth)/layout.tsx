import '../../styles/global.css'
import GlassScreen from '@/components/GlassScreen'

export interface LayoutProps {
    children: React.ReactNode
}

export default function AuthRootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" className="h-screen w-screen rainbow-mesh p-6">
            <body>
                <GlassScreen className="w-full h-full flex items-center justify-center">
                    {children}
                </GlassScreen>
            </body>
        </html>
    )
}
