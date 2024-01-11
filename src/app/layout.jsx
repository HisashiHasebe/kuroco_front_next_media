import "@/styles/style.scss";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { UserProvider } from "../components/common/userContext";

export const metadata = {
  title: "kuroco Trip",
  description: "Let's Travel and Enjoy!",
};

export default async function RootLayout({ children, initialUser }) {
  return (
    <html>
      <body>
        <UserProvider>
          <Header />
          {children}
          <Footer />
          </UserProvider>  
      </body>
    </html>
  );
}
