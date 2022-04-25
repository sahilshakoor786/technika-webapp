import Head from "next/head";
import FakeMouse, { FakeMouseMoveHandler } from "src/components/FakeMouse";
import Footer from "../components/Footer";

import Header from "../components/Header";

export default function RegisterPage() {
  return (
    <div onMouseMove={FakeMouseMoveHandler}>
      <Head>
        <title>Tecknika - Register</title>
        <meta name="description" content="Technical Sub-Council HBTU takes initiative, promotes, conducts, and
          manages all the technical events and activities in HBTU to foster
          technical growth and problem solving among its students" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <main
        className="overflow-x-hidden bg-black 
      bg-cover bg-fixed bg-main-image h-screen flex justify-center items-center"
      >
        <div
          className="-10 relative text-white md:w-1/2  h-1/2
      bg-blue-800/10 backdrop-blur flex flex-col justify-center shadow-lg py-6 px-2 space-y-2 rounded-lg"
        >
          <h1 className="font-primary text-3xl md:text-5xl text-center">Registrations not started yet</h1>
        </div>
      </main>

      <Footer />
      <FakeMouse />
    </div>
  );
}
