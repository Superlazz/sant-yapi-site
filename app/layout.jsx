import "./globals.css";

export const metadata = {
  title: "Sant Yapı | Teknik Çizim Ofisi",
  description:
    "Sant Yapı; kalıp, donatı ve uygulama detay çizimleri üzerine çalışan teknik çizim ofisidir."
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
