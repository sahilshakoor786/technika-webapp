import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { getToken } from "src/types/token";

export default function Auth({ children }: { children: ReactElement }) {
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  function checkAuth() {
    const token = getToken();
    if (!token) {
      router.replace("/register");
    }
  }

  return <>{children}</>;
}
