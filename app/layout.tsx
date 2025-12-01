import "./globals.css";

export const metadata = {
  title: "Afraz Hemraj",
  description: "A digital showcase of Afraz Hemraj's projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}