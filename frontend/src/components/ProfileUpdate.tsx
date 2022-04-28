import { useEffect, useState } from "react";
import { getToken, Token } from "src/types/token";
import { axiosInstance } from "src/utils/axios";
import { useInput } from "src/utils/useInput";
import { useSelect } from "src/utils/useSelect";
import PrimaryButton from "./PrimaryButton";
import Spinner from "./Spinner";


type ProfileUpdateProps = {
    onSuccess: () => void;
    onError: () => void;
  };
  
export default function ProfileUpdate({ onSuccess, onError }: ProfileUpdateProps) {
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
      {
        value: "Other",
        label: "Other",
      },
    ],
    placeholder: "Select your Branch",
  });

  const batchInput = useInput({
    type: "number",
    placeholder: "Year of graduation",
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

      if (token) {
        token.user = res.data.user;
        localStorage.setItem("token", JSON.stringify(token));
      }

      onSuccess();
    } catch (error) {
      onError();
    }

    setLoading(false);
  }
  return (
    <>
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
    </>
  );
}
