import { StylesProvider } from './styles-provider'
import './globals.css'
export const metadata = {
  title: 'Create Solito App',
  description: 'Generated by create Solito app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  )
}