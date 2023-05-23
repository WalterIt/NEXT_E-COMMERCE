import "@styles/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "VS E-COMMERCE",
  description: "VS E-COMMERCE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
