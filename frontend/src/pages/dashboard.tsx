import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Auth from "src/components/Auth";
import Layout from "src/components/Layout";
import PrimaryButton from "src/components/PrimaryButton";
import ProfileUpdate from "src/components/ProfileUpdate";
import SecondaryButton from "src/components/SecondaryButton";
import { getToken, Token } from "src/types/token";
import { axiosInstance } from "src/utils/axios";

import useRazorpay, { RazorpayOptions } from "react-razorpay";
import Spinner from "src/components/Spinner";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [editActive, setEditActive] = useState(false);

  const [token, setToken] = useState<Token>();
  const [payment, setPayment] = useState<boolean>(false);
  const [accomation, setAccomation] = useState<Boolean>(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const token = getToken();

    try {
      const res = await axiosInstance.post(`/event/register/check/payment`, {
        userId: token?.user.id ?? "",
      });

      setPayment(res.data.success);
    } catch (error) {
      setPayment(false);
    }

    setToken(token);
  }

  function profileSaveSuccess() {
    getUser();

    setEditActive(false);
    setMessage("Profile saved");
  }

  function profileSaveError() {
    setMessage("Error saving profile");
  }

  function signOut() {
    localStorage.clear();
    router.push("/");
  }

  function copyText() {
    navigator.clipboard.writeText(token?.tscId ?? "");
    setMessage("TSC Id Copied");
  }

  const Razorpay = useRazorpay();

  const handlePayment = async () => {
    if (token) {
      setLoading(true);

      try {
        const res = await axiosInstance.post(
          `/event/register/payment/create`,
          {
            isAccommodation: accomation,
          },
          {
            headers: {
              authorization: `Bearer ${token.token}`,
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
            console.log(args);

            await axiosInstance.post(`/event/register/payment/verify`, args, {
              headers: {
                authorization: `Bearer ${token.token}`,
              },
            });

            setPayment(true);
          },
        };
        const rzpay = new Razorpay(options);

        rzpay.on("payment.failed", function (response: any) {
          setMessage("Payment failed");
        });

        rzpay.open();
      } catch (error: any) {
        setMessage("Payment failed");
      }

      setLoading(false);
    }
  };

  return (
    <Auth>
      <Layout>
        <main
          className="h-full min-h-screen 
          overflow-x-hidden flex justify-center"
        >
          <div className="w-full max-w-5xl grid md:grid-cols-2 place-items-center gap-8 my-20 mt-32">
            <div
              className="p-10 w-full h-full backdrop-blur 
              flex flex-col space-y-3
              shadow-lg rounded-lg bg-slate-50/20"
            >
              <h1 className="font-primary font-bold text-2xl text-center text-white">
                Update your profile
              </h1>

              {editActive ? (
                <ProfileUpdate
                  onSuccess={profileSaveSuccess}
                  onError={profileSaveError}
                />
              ) : (
                <div>
                  <div className="flex justify-center">
                    <img
                      src={token?.user.picture}
                      alt="profile"
                      className="bg-gray-300 rounded-full w-20 h-20"
                    />
                  </div>

                  <div>
                    {payment ? (
                      <div
                        className="bg-white/50 rounded-lg px-10 py-5 my-5 
                grid grid-cols-2 gap-2 relative shadow-md"
                      >
                        <span className="font-bold">TSC ID</span>
                        <span className="text-center">
                          <span>
                            {token?.tscId || "-"}
                            <button
                              onClick={copyText}
                              className="absolute p-3 bg-white/10 shadow-lg 
                    rounded-full right-2 top-3 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#666"
                                viewBox="0 0 16 16"
                              >
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                              </svg>
                            </button>
                          </span>
                        </span>
                      </div>
                    ) : (
                      <div className="bg-white/50 rounded-lg px-10 py-5 my-5 grid place-items-center relative shadow-md">
                        {loading ? (
                          <Spinner />
                        ) : (
                          <>
                            <span className="flex justify-center space-x-2 items-center w-full">
                              <span>Need accomations?</span>
                              <input
                                type="checkbox"
                                onChange={(e) =>
                                  setAccomation(
                                    e.target.value == "on" ? true : false
                                  )
                                }
                              />
                            </span>
                            <PrimaryButton
                              text="Pay for all events now"
                              onClick={handlePayment}
                            />
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div
                    className="bg-white/50 rounded-lg px-10 py-5 my-5 
                  grid grid-cols-2 gap-2 relative shadow-md"
                  >
                    <span className="font-bold">Name</span>
                    <span className="text-center">
                      {token?.user.name || "-"}
                    </span>

                    <span className="font-bold">City</span>
                    <span className="text-center">
                      {token?.user.city || "-"}
                    </span>

                    <span className="font-bold">College</span>
                    <span className="text-center">
                      {token?.user.college || "-"}
                    </span>

                    <span className="font-bold">Gradution</span>
                    <span className="text-center">
                      {token?.user.batch || "-"}
                    </span>

                    <span className="font-bold">Branch</span>
                    <span className="text-center">
                      {token?.user.branch || "-"}
                    </span>

                    <button
                      className="absolute p-3 bg-pink-800 shadow-lg 
                    rounded-full -right-2 -top-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500"
                      onClick={() => setEditActive(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

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
