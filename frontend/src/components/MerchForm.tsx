import { useEffect, useState } from "react";
import { getToken, setUser, Token } from "src/types/token";
import { axiosInstance } from "src/utils/axios";
import PrimaryButton from "./PrimaryButton";
import Spinner from "./Spinner";

import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { useInput } from "src/utils/useInput";

type MerchFormProps = {
  merchId: string;
  merchName: string;
};

export default function MerchForm({ merchId, merchName }: MerchFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState<Token>();

  const [payment, setPayment] = useState(false);

  const nameInput = useInput({
    type: "text",
    placeholder: "Enter your name",
  });

  const phoneInput = useInput({
    type: "tel",
    placeholder: "Enter your mobile",
  });

  const emailInput = useInput({
    type: "email",
    placeholder: "Enter your email",
  });

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setPayment(false);
}, [merchId]);


  function getUser() {
    const token = getToken();

    nameInput.setValue(token?.user.name ?? "");
    phoneInput.setValue(token?.user.phone ?? "");
    emailInput.setValue(token?.user.email ?? "");

    setToken(token);
  }

  const Razorpay = useRazorpay();

  const handlePayment = async () => {
    setLoading(true);

    try {
      const res = await axiosInstance.post(
        `/merchandise/product/purchase/initiliaze`,
        {
          productId: merchId,
          name: nameInput.value,
          email: emailInput.value,
          phone: phoneInput.value,
        },
        {
          headers: {
            authorization: `Bearer ${token?.token}`,
          },
        }
      );

      const options: RazorpayOptions = {
        name: "Tecknika",
        description: "Events Registration Fee Tecknika",
        image: "https://d2jf5yk8vvx0ti.cloudfront.net/images/logo.png",
        amount: res.data.result.paymentAmount,
        key: res.data.result.key,
        currency: "INR",
        order_id: res.data.result.paymentId,
        prefill: res.data.result.user,
        notes: {
          address: "HBTU KANPUR",
        },
        handler: async (args) => {
          setLoading(true);

          try {
            await axiosInstance.post(
              `/merchandise/product/purchase/verify`,
              args,
              {
                headers: {
                  authorization: `Bearer ${token?.token}`,
                },
              }
            );

            setPayment(true);
          } catch (error) {
            setError("Payment failed");
          }

          setLoading(false);
        },
      };
      const rzpay = new Razorpay(options);

      rzpay.on("payment.failed", function (response: any) {
        setError("Payment failed");
      });

      rzpay.open();
    } catch (error: any) {
      setError("Payment failed");
    }

    setLoading(false);
  };

  return (
    <div className="h-full flex flex-col space-y-5 items-center justify-center overflow-y-scroll">
      {loading ? (
        <Spinner />
      ) : error ? (
        <>
          <h1 className="font-primary text-2xl text-center">
            An Unexpected error occured
          </h1>
          <p>{error}</p>
        </>
      ) : (
        <>
          <h1 className="font-primary text-2xl text-center font-bold">
            Buy {merchName}
          </h1>

          {nameInput.input}
          {phoneInput.input}
          {emailInput.input}

          {!payment ? (
            <PrimaryButton text="Buy Merch" onClick={handlePayment} />
          ) : (
            <p className="text-center text-xl text-pink-600 my-10">
              Thank you for buying <br />
              <span className="font-primary font-bold">Technika</span> merch
            </p>
          )}
        </>
      )}
    </div>
  );
}
