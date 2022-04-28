import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "src/components/Layout";
import { axiosInstance } from "src/lib/axios";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState(false);

  useEffect(() => {
    googleRedirect();
  }, []);

  async function googleRedirect() {
    try {
      const res = await axiosInstance.get("/auth/google/url");
      router.replace(res.data.url);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }

  return (
    <Layout>
      <main
        className="overflow-x-hidden bg-black 
      bg-cover bg-fixed bg-main-image h-screen flex justify-center items-center"
      >
        <div
          className="-10 relative text-white md:w-1/2  h-1/2
        bg-blue-800/10 backdrop-blur flex flex-col justify-center
          shadow-lg py-6 px-2 space-y-2 rounded-lg"
        >
          {error && (
            <h1 className="font-primary text-2xl text-center">
              An unexpected error occurded during google login
            </h1>
          )}
        </div>
      </main>
    </Layout>
  );
}
