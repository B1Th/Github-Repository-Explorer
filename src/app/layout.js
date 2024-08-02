import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="App">
            <h1>GitHub Repository Explorer</h1>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
