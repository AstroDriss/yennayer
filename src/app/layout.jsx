import StructuredData from "./components/StructuredData";
import "./globals.css";

export const metadata = {
  title: "ESTA-Yennayer",
  description: "Yennayer Event in Agadir",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="27" viewBox="0 0 17 27"><text id="_" data-name="ⵣ" transform="translate(0 22)" stroke="%23fff" strokeWidth="1px" fill="%23707070" font-size="20" font-family="Ebrima"><tspan x="0" y="0">ⵣ</tspan></text></svg>',
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth scroll-pt-14" lang="en">
      <StructuredData
        data={`{
          "@context": "http://schema.org",
          "@type": "Event",
          "name": "Yennayer ESTA 2024",
          "description":
            "Ecole Superieur de Technologie Agadir organiz an event about the amazigh's new year",
          "startDate": "2024-01-13T19:00",
          "endDate": "2024-01-13T20:00",
          "location": {
            "@type": "Place",
            "name": "ESTA",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "sidi youssef",
              "addressLocality": "Agadir",
              "postalCode": "80000",
              "addressRegion": "Souss-Massa",
              "addressCountry": "Morocco",
            },
          },
          "image": [
            "/public/images/cover2.webp",
            "https://sudestmaroc.com/wp-content/uploads/2020/11/Ahwach-tete-page-1024x427.jpg",
          ],
          "performer": {
            "@type": "PerformingGroup",
            "name": "EST students",
          }
        }`}
      />
      <body className="bg-[#f7f7f7]">{children}</body>
    </html>
  );
}

`

`;
