import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Auth from "src/components/Auth";
import Layout from "src/components/Layout";
import PrimaryButton from "src/components/PrimaryButton";
import Spinner from "src/components/Spinner";
import { getToken, Token } from "src/types/token";
import { User } from "src/types/user";
import { axiosInstance } from "src/utils/axios";
import { useInput } from "src/utils/useInput";
import { useSelect } from "src/utils/useSelect";

export default function RegisterPage() {
  const router = useRouter();

  const [token, setToken] = useState<Token>();
  const [loading, setLoading] = useState(false);

  const nameInput = useInput({
    type: "text",
    placeholder: "Enter your name",
  });

  const phoneInput = useInput({
    type: "tel",
    placeholder: "Enter your mobile",
  });

  const cityInput = useInput({
    type: "text",
    placeholder: "Enter your city",
  });

  const collegeInput = useInput({
    type: "text",
    placeholder: "Enter your college",
  });

  const branchInput = useSelect({
    options: [
      {
        value: "",
        label: "Select your branch",
      },
      {
        value: "Chemical Engineering",
        label: "Chemical Engineering",
      },
      {
        value: "Civil Engineering",
        label: "Civil Engineering",
      },
      {
        value: "Computer Science & Engineering",
        label: "Computer Science & Engineering",
      },
      {
        value: "Electrical Engineering",
        label: "Electrical Engineering",
      },
      {
        value: "Electronics Engineering",
        label: "Electronics Engineering",
      },
      {
        value: "Information Technology",
        label: "Information Technology",
      },
      {
        value: "Mechanical Engineering",
        label: "Mechanical Engineering",
      },
      {
        value: "Biochemical Engineering",
        label: "Biochemical Engineering",
      },
      {
        value: "Leather Technology",
        label: "Leather Technology",
      },
      {
        value: "Food Technology",
        label: "Food Technology",
      },
      {
        value: "Oil Technology",
        label: "Oil Technology",
      },
      {
        value: "Paint Technology",
        label: "Paint Technology",
      },
      {
        value: "Plastic Technology",
        label: "Plastic Technology",
      },
    ],
    placeholder: "Select your Branch",
  });

  const batchInput = useSelect({
    options: [
      {
        value: "",
        label: "Select your batch",
      },
      {
        value: "1st Year",
        label: "1st Year",
      },
      {
        value: "2nd Year",
        label: "2nd Year",
      },
      {
        value: "3rd Year",
        label: "3rd Year",
      },
      {
        value: "Final Year",
        label: "Final Year",
      },
    ],
    placeholder: "Select your batch",
  });

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    const token = getToken();

    nameInput.setValue(token?.user.name ?? "");
    phoneInput.setValue(token?.user.phone ?? "");
    cityInput.setValue(token?.user.city ?? "");

    collegeInput.setValue(token?.user.college ?? "");
    branchInput.setValue(token?.user.branch ?? "");
    batchInput.setValue(token?.user.batch ?? "");

    setToken(token);
  }

  async function saveProfile() {
    setLoading(true);

    try {
      const res = await axiosInstance.put(
        `/profile/${token?.id}`,
        {
          name: nameInput.value,
          phone: phoneInput.value,
          city: cityInput.value,

          college: collegeInput.value,
          branch: branchInput.value,
          batchInput: batchInput.value,
        },
        {
          headers: {
            authorization: `Bearer ${token?.token}`,
          },
        }
      );
      
      if(token) {
        token.user = res.data.user;
        localStorage.setItem("token", JSON.stringify(token));
      }

      router.replace("/events");
    } catch (error) {
      router.replace("/error");
    }

    setLoading(false);
  }

  return (
    <Auth>
      <Layout>
        <main
          className="overflow-x-hidden bg-black 
      bg-cover bg-fixed bg-main-image h-screen flex justify-center items-center"
        >
          <div
            className="z-10 mx-10 p-10 relative md:w-1/3 h-fit backdrop-blur flex flex-col
          shadow-lg space-y-3 rounded-lg bg-white/50"
          >
            <h1 className="font-primary text-2xl text-center text-white">
              Complete your registration
            </h1>
            <div className="flex justify-center">
              <img
                src={token?.user.picture}
                alt="profile"
                className="bg-gray-300 rounded-full w-20 h-20"
              />
            </div>
            {nameInput.input}
            {phoneInput.input}
            {cityInput.input}
            {collegeInput.input}
            {branchInput.input}
            {batchInput.input}

            {!loading ? (
              <PrimaryButton text="Save Profile" onClick={saveProfile} />
            ) : (
              <Spinner />
            )}
          </div>
        </main>
      </Layout>
    </Auth>
  );
}
