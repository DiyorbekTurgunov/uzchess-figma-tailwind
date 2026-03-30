import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function  RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
        <body className={'flex flex-col justify-between antialiased'}>
            <Header/>
            {/*<Breadcrumbs/>*/}
            {children}
            <Footer/>
        </body>
    </html>
  );
}
