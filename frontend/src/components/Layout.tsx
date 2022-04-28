import Head from "next/head";
import { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      <Head>
        <title>Tecknika</title>
        <meta
          name="description"
          content="Technical Sub-Council HBTU takes initiative, promotes, conducts, and
      manages all the technical events and activities in HBTU to foster
      technical growth and problem solving among its students"
        />
        <link rel="icon" href="https://d2jf5yk8vvx0ti.cloudfront.net/images/TECHNIKA+LOGO+WHITE.png" />
      </Head>

      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
