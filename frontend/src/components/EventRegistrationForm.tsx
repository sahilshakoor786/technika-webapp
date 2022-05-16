import { useEffect, useState } from "react";
import { Event } from "src/types/event";
import { getToken, setUser, Token } from "src/types/token";
import { axiosInstance } from "src/utils/axios";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Spinner from "./Spinner";

import useRazorpay, { RazorpayOptions } from "react-razorpay";

type EventRegistrationFormProps = {
  eventId: string;
};

export default function EventRegistrationForm({
  eventId,
}: EventRegistrationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState<Token>();
  const [event, setEvent] = useState<Event>();
  const [userTscId, setUserTscId] = useState("");
  const [description, setDescription] = useState("");

  const [registered, setRegistered] = useState<boolean>(false);
  const [payment, setPayment] = useState<boolean>(false);
  const [participants, setParticipants] = useState<Array<string>>([]);
  const [accomation, setAccomation] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    const token = getToken();
    setUserTscId(token?.user.tscId || "");
    setToken(token);
    fetchEventDetails(token);
  }

  async function fetchEventDetails(token?: Token) {
    if (token) {
      setLoading(true);

      try {
        const eventRes = await axiosInstance.get(`/event/${eventId}`);
        setEvent(eventRes.data.result);

        setParticipants([
          ...Array<string>(eventRes.data.result.minTeamSize - 1),
        ]);
      } catch (error: any) {
        setError(error.response.data.message);
      }

      try {
        const res = await axiosInstance.post(`/event/register/check`, {
          eventId: eventId,
          userId: token?.user.id ?? "",
        });

        setRegistered(res.data.success);
      } catch (error) {
        setRegistered(false);
      }

      try {
        const res = await axiosInstance.post(`/event/register/check/payment`, {
          userId: token?.user.id ?? "",
        });

        setPayment(res.data.success);
      } catch (error) {
        setPayment(false);
      }

      setLoading(false);
    }
  }

  function addMoreParticipant() {
    if (event && participants.length < event.maxTeamSize - 1) {
      setParticipants([...participants, ""]);
    }
  }

  function removeParticipant(i: number) {
    if (event) {
      let part = [...participants];
      part.splice(i, 1);

      setParticipants(part);
    }
  }

  function setParticipantData(i: number, data: string) {
    if (event) {
      let part = [...participants];
      part[i] = data;

      setParticipants(part);
    }
  }

  async function handleRegister() {
    if (token && event) {
      setLoading(true);

      try {
        await axiosInstance.post(
          `/event/register`,
          {
            eventId: event?.eventId,
            eventLeadTSCId: userTscId,
            teamMembersTSCIds: participants,
            description: description,
          },
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        );

        setRegistered(true);
      } catch (error: any) {
        setError(error.response.data.message);
      }

      setLoading(false);
    }
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
            setLoading(true);

            try {
              await axiosInstance.post(`/event/register/payment/verify`, args, {
                headers: {
                  authorization: `Bearer ${token.token}`,
                },
              });

              const userRes = await axiosInstance.get(`/me`, {
                headers: {
                  authorization: `Bearer ${token.token}`,
                },
              });

              console.log(userRes);

              setUser(userRes.data.user);
              setUserTscId(userRes.data.user.tscId);

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
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center overflow-y-scroll">
      {loading ? (
        <Spinner />
      ) : error ? (
        <>
          <h1 className="font-primary text-2xl text-center">
            An Unexpected error occured{" "}
          </h1>
          <p>{error}</p>
        </>
      ) : (
        <>
          {registered ? (
            <span className="font-primary text-xl">Registered to event</span>
          ) : payment ? (
            <>
              <h1 className="font-primary text-3xl text-center font-bold">
                Register to {event?.eventName}
              </h1>

              <div
                className="grid grid-cols-2 gap-2 p-5
            text-slate-600 bg-slate-100 rounded-lg m-5"
              >
                <span className="font-primary font-bold text-slate-800">
                  Solo Event
                </span>
                <span>{event?.isSoloEvent ? "Yes" : "No"}</span>

                <span className="font-primary font-bold text-slate-800 ">
                  Max Team Size
                </span>
                <span>{event?.maxTeamSize}</span>

                <span className="font-primary font-bold text-slate-800">
                  Min Team Size
                </span>
                <span>{event?.minTeamSize}</span>
              </div>

              <p>Team Leader</p>
              <input
                className="shadow px-4 py-2 rounded focus:outline-none bg-slate-100 my-2"
                value={userTscId}
                readOnly
              />

              <p>Description</p>
              <textarea
                className="shadow  px-4 py-2 resize rounded-md focus:outline-none rounded bg-slate-100"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {event && event?.minTeamSize > 1 && <p>Team Members</p>}

              {participants.map((_, i) => (
                <span key={i} className="space-x-2 relative">
                  <input
                    className="shadow px-4 py-2 rounded focus:outline-none bg-slate-100 my-2"
                    placeholder="Enter TSC ID of member"
                    onChange={(e) => setParticipantData(i, e.target.value)}
                  />
                  <button
                    onClick={() => removeParticipant(i)}
                    className="transition ease-in-out delay-15 absolute hover:scale-110 top-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#666"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                </span>
              ))}

              <div className="w-full flex space-x-2 justify-center">
                {event && event?.minTeamSize > 1 && (
                  <SecondaryButton
                    text="Add more"
                    onClick={addMoreParticipant}
                  />
                )}
                <PrimaryButton text="Register now" onClick={handleRegister} />
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="font-primary text-3xl text-center rounded-lg shadow-lg ">
                  ₹400 ticket-
                </h1>
                <ul className="list-disc m-5">
                  <li className=" hover:bg-blue-50 ">
                    Access to participate and compete in all 36 competitions
                    organized in 'Technika'
                  </li>

                  <li className=" hover:bg-blue-50 ">
                    Free pass to celebrity night
                  </li>

                  <li className=" hover:bg-blue-50 ">Free pass to fun fair </li>

                  <li className="hover:bg-blue-50 ">Free pass to EDM Night</li>
                </ul>

                <h1 className="font-primary text-3xl text-center rounded-lg shadow-lg ">
                  ₹2000 ticket-
                </h1>

                <ul className="list-disc m-5">
                  <li className="hover:bg-blue-50 ">
                    3 days stay in HBTU hostels, breakfast, dinner, and snacks
                    included
                  </li>

                  <li className="hover:bg-blue-50 ">
                    Access to participate and compete in all 36 competitions
                    organized in 'Technika'
                  </li>

                  <li className="hover:bg-blue-50">
                    Free pass to celebrity night
                  </li>

                  <li className="hover:bg-blue-50">Free pass to fun fair</li>

                  <li className="hover:bg-blue-50">Free pass to EDM Night</li>
                </ul>
              </div>
              <span className="flex justify-center space-x-2 items-center w-full">
                <span>Need accomations?</span>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setAccomation(e.target.value == "on" ? true : false)
                  }
                />
              </span>
              <PrimaryButton
                text="Pay for all events now"
                onClick={handlePayment}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
