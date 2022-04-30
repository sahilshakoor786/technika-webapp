import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Auth from "src/components/Auth";
import Layout from "src/components/Layout";
import ProfileUpdate from "src/components/ProfileUpdate";
import SecondaryButton from "src/components/SecondaryButton";

export default function DashboardPage() {
  const router = useRouter();

  const [message, setMessage] = useState("");

  function profileSaveSuccess() {
    setMessage("Profile saved");
  }

  function profileSaveError() {
    setMessage("Error saving profile");
  }

  function signOut() {
    localStorage.clear();
    router.push("/");
  }

  return (
    <Auth>
      <Layout>
        <main
          className="h-full min-h-screen 
          overflow-x-hidden flex justify-center"
        >
          <div className="max-w-5xl grid md:grid-cols-2 place-items-center gap-8 my-20 mt-32">
            <div
              className="p-10 w-full h-full backdrop-blur 
              flex flex-col space-y-3
              shadow-lg rounded-lg bg-slate-50/20"
            >
              <h1 className="font-primary font-bold text-2xl text-center text-white">
                Update your profile
              </h1>

              <ProfileUpdate
                onSuccess={profileSaveSuccess}
                onError={profileSaveError}
              />

              <SecondaryButton text="Sign out" onClick={signOut} />

              <span className="text-center font-bold">{message}</span>
            </div>

            <div
              className="p-10 w-full h-full backdrop-blur 
              flex flex-col space-y-3
              shadow-lg rounded-lg bg-slate-50/20"
            >
              <h1 className="font-primary font-bold text-2xl text-center text-white">
                Your event registrations
              </h1>
            </div>
          </div>
        </main>
      </Layout>
    </Auth>
  );
}
