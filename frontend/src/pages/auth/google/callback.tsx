import { useRouter } from "next/router";
import { useEffect } from "react";
import { axiosInstance } from "src/utils/axios";

export default function GoogleCallback() {
  const router = useRouter();

  useEffect(() => {
    googleCallback();
  }, []);

  async function googleCallback() {
    try {
      let params = new URLSearchParams(location.search);
      const res = await axiosInstance.post("/auth/google/callback", {
        code: params.get("code"),
      });

      localStorage.setItem("token", JSON.stringify(res.data));
      router.replace("/register/complete");
    } catch (error) {
      console.log(error);
      router.replace("/error");
    }
  }

  return <></>;
}
