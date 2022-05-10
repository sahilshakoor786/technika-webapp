import Head from "next/head";
import { ReactElement, useEffect } from "react";
import { getToken, setUser } from "src/types/token";
import { axiosInstance } from "src/utils/axios";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
export default function Layout({ children }: { children: ReactElement }) {
  const router = useRouter();
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    const token = getToken();

    if (token) {
      axiosInstance
        .get(`/me`, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          localStorage.clear();
          router.push("/");
        });
    }
  }

  return (
    <>
      <Head>
        <title>Tecknika</title>
        <meta
          name="description"
          content="Technical Sub-Council HBTU takes initiative, promotes, conducts, and
      manages all the technical events and activities in HBTU to foster
      technical growth and problem solving among its students"
        />
        <link
          rel="icon"
          href="https://d2jf5yk8vvx0ti.cloudfront.net/images/TECHNIKA+LOGO+WHITE.png"
        />
      </Head>

      <Header />
      <div className="bg-fixed bg-black bg-main-image bg-cover">{children}</div>
      <Footer />
    </>
  );
}
