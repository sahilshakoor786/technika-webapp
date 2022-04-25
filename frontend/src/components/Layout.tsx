import Head from "next/head";
import { ReactElement } from "react";
import FakeMouse, { FakeMouseMoveHandler } from "./FakeMouse";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div onMouseMove={FakeMouseMoveHandler}>
      <Head>
        <title>Tecknika</title>
        <meta
          name="description"
          content="Technical Sub-Council HBTU takes initiative, promotes, conducts, and
      manages all the technical events and activities in HBTU to foster
      technical growth and problem solving among its students"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <div>{children}</div>

      <Footer />
      <FakeMouse />
    </div>
  );
}
