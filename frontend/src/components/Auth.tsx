import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";

export default function Auth({ children }: { children: ReactElement }) {
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  function checkAuth() {
    const ts = localStorage.getItem("token");
    if(ts || ts == "" ) {
        router.replace("/error")
    }
  }

  return <>{children}</>;
}
