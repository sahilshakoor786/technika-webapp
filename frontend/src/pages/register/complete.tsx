import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Auth from "src/components/Auth";
import Layout from "src/components/Layout";
import ProfileUpdate from "src/components/ProfileUpdate";

export default function RegisterPage() {
  const router = useRouter();

  function profileSaveSuccess() {
    router.replace("/events");
  }

  function profileSaveError() {
    router.replace("/error");
  }

  return (
    // <Auth>
    <Layout>
      <main
        className="h-full min-h-screen overflow-x-hidden
          flex justify-center items-center"
      >
        <div
          className="z-10 mx-10 p-10 relative md:w-1/3 h-fit backdrop-blur flex flex-col
          shadow-lg space-y-3 rounded-lg bg-slate-50/10 md:mt-20 mb-10"
        >
          <h1 className="font-primary text-2xl text-center text-white">
            Complete your registration
          </h1>

          <ProfileUpdate
            onSuccess={profileSaveSuccess}
            onError={profileSaveError}
          />
        </div>
      </main>
    </Layout>
    // </Auth>
  );
}
