import React, { FC, useEffect, useState } from "react";
import { AppProps } from "next/app";

import "../styles/globals.css";
import Loading from "src/components/LoadingScreen";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>

      {loading ? <Loading />: ``}
    </>
  );
}

export default MyApp;
