export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>World Letters</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
