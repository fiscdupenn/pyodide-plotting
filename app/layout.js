export const metadata = {
  title: "seaborn pyodide",
  description: "seaborn pyodide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
