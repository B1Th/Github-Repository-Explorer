import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          <div className="App">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
