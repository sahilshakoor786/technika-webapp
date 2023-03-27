import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Auth from "src/components/Auth";
import Layout from "src/components/Layout";
import PrimaryButton from "src/components/PrimaryButton";
import ProfileUpdate from "src/components/ProfileUpdate";
import SecondaryButton from "src/components/SecondaryButton";
import { getToken, Token } from "src/types/token";
import { axiosInstance } from "src/utils/axios";
import gsap from "gsap";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import Spinner from "src/components/Spinner";
import { Registration } from "src/types/event";

import EventEditForm from "src/components/EventEditForm";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [editActive, setEditActive] = useState(false);
  const [eventEdit, setEventEdit] = useState(false);

  const [token, setToken] = useState<Token>();
  const [payment, setPayment] = useState<boolean>(false);
  const [accomation, setAccomation] = useState<Boolean>(false);

  const [registrations, setRegistrations] = useState<Registration[]>([
    {
      _id: "628201f3bc07732fd55443b4",
      eventId: "TSCCE09",
      isTeamRegistration: true,
      leaderId: "627a64f0951870870aaf4e33",
      teamMembers: ["626d25690ac9e00f00574e68"],
      description: "test",
      event: {
        _id: "627a7da3ca43c860d6a5593c",
        eventId: "TSCCE09",
        eventName: "test",

        eventDescription:
          "Well what is any fest without a good, mind boggling, discombobulating (big fests need big words defining it) treasure hunt based on your technical and basic scientific knowledge.",
        eventTime: "2022-05-21T03:30:00.000Z",
        eventVenue: "East capmus",
        isSoloEvent: false,
        minTeamSize: 2,
        maxTeamSize: 4,
      },
      leader: {
        _id: "627a64f0951870870aaf4e33",
        id: "626d25690ac9e00f00574e68",
        tscId: "TSC2200504",
        googleId: "117887387656993132961",
        name: "TEJPRATAP SINGH",
        email: "tejpratapsingh545@gmail.com",
        isHbtuStudent: false,
        isTSCTeamMember: false,
        isTSCAdmin: false,
        college: "hbtu",
        city: "Kanpur",
        phone: "09935973863",
        picture:
          "https://lh3.googleusercontent.com/a-/AOh14GjVSHLC1dKFg2UzqCkp2dl3i5pMOH2KY03nECqdRA=s96-c",
        batch: "2023",
        branch: "Computer Science & Engineering",
      },
      teamMembersDetails: [
        {
          _id: "626d25690ac9e00f00574e68",
          id: "626d25690ac9e00f00574e68",
          tscId: "TSC2200524",
          googleId: "108283714822442297303",
          name: "Ayush Kumar",
          email: "ayushskywalker@gmail.com",
          isHbtuStudent: false,
          isTSCTeamMember: false,
          isTSCAdmin: false,
          college: "HBTU",
          city: "Kanpur",
          phone: "6393443885",
          picture:
            "https://lh3.googleusercontent.com/a-/AOh14GiwKHTKHtH-D35ZKWPsHq1bhQH-plqr1IOrx-7Dbw=s96-c",
          batch: "2023",
          branch: "Information Technology",
        },
      ],
    },
  ]);

  const [editEventRegistration, setEditEventRegistration] =
    useState<Registration>({
      _id: "628201f3bc07732fd55443b4",
      eventId: "TSCCE09",
      isTeamRegistration: true,
      leaderId: "627a64f0951870870aaf4e33",
      teamMembers: ["626d25690ac9e00f00574e68"],
      description: "test",
      event: {
        _id: "627a7da3ca43c860d6a5593c",
        eventId: "TSCCE09",
        eventName: "test",
        eventDescription:
          "Well what is any fest without a good, mind boggling, discombobulating (big fests need big words defining it) treasure hunt based on your technical and basic scientific knowledge.",
        eventTime: "2022-05-21T03:30:00.000Z",
        eventVenue: "East capmus",
        isSoloEvent: false,
        minTeamSize: 2,
        maxTeamSize: 4,
      },
      leader: {
        _id: "627a64f0951870870aaf4e33",
        id: "627a64f0951870870aaf4e33",
        tscId: "TSC2200504",
        googleId: "117887387656993132961",
        name: "TEJPRATAP SINGH",
        email: "tejpratapsingh545@gmail.com",
        isHbtuStudent: false,
        isTSCTeamMember: false,
        isTSCAdmin: false,
        college: "hbtu",
        city: "Kanpur",
        phone: "09935973863",
        picture:
          "https://lh3.googleusercontent.com/a-/AOh14GjVSHLC1dKFg2UzqCkp2dl3i5pMOH2KY03nECqdRA=s96-c",
        batch: "2023",
        branch: "Computer Science & Engineering",
      },
      teamMembersDetails: [
        {
          _id: "626d25690ac9e00f00574e68",
          id: "627a64f0951870870aaf4e33",
          tscId: "TSC2200524",
          googleId: "108283714822442297303",
          name: "Ayush Kumar",
          email: "ayushskywalker@gmail.com",
          isHbtuStudent: false,
          isTSCTeamMember: false,
          isTSCAdmin: false,
          college: "HBTU",
          city: "Kanpur",
          phone: "6393443885",
          picture:
            "https://lh3.googleusercontent.com/a-/AOh14GiwKHTKHtH-D35ZKWPsHq1bhQH-plqr1IOrx-7Dbw=s96-c",
          batch: "2023",
          branch: "Information Technology",
        },
      ],
    });

  const [popup, setPopup] = useState(false);

  function handleEventFormPopup(eventRegistration: Registration) {
    setEditEventRegistration(eventRegistration);
    if (!popup) {
      gsap.to("#event-popup", {
        top: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      });
    } else {
      gsap.to("#event-popup", {
        top: "100%",
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      });
    }

    setPopup(!popup);
  }

  useEffect(() => {
    getInitData();
  }, []);

  async function getInitData() {
    const token = getToken();

    try {
      const res = await axiosInstance.post(`/event/register/check/payment`, {
        userId: token?.user.id ?? "",
      });

      setPayment(res.data.success);
    } catch (error) {
      setPayment(false);
    }

    try {
      const res = await axiosInstance.get(`/events/${token?.user.id}`);
      setRegistrations(res.data.result);
    } catch (error) {
      console.log(error);
    }

    setToken(token);
  }

  function profileSaveSuccess() {
    getInitData();

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
            setLoading(true);

            try {
              await axiosInstance.post(`/event/register/payment/verify`, args, {
                headers: {
                  authorization: `Bearer ${token.token}`,
                },
              });

              setPayment(true);

              window.location.reload();
            } catch (error) {
              setMessage("Payment failed");
            }

            setLoading(false);
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

  function formatDate(dateString: string) {
    var d = new Date(dateString);

    return `${d.getDate()}/5 ${d.getHours()}:${d.getMinutes()}`;
  }

  return (
    // // <Auth>
    <Layout>
      <main
        className="h-full min-h-screen 
          overflow-x-hidden flex justify-center"
      >
        <div className="w-full max-w-5xl grid md:grid-cols-2 place-items-center gap-8 my-20 mt-32">
          <div
            style={{ height: 600 }}
            className="p-10 w-full h-3/4 backdrop-blur 
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
                          {token?.user.tscId || "-"}
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
                  <span className="text-center">{token?.user.name || "-"}</span>

                  <span className="font-bold">City</span>
                  <span className="text-center">{token?.user.city || "-"}</span>

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
            style={{ height: 600 }}
            className="p-10 w-full backdrop-blur 
              flex flex-col space-y-3
              shadow-lg rounded-lg bg-slate-50/20 overflow-y-scroll"
          >
            <h1 className="font-primary font-bold text-2xl text-center text-white">
              Your event registrations
            </h1>
            {registrations.length == 0 && (
              <p className="font-bold text-center my-10">
                No registrations yet
              </p>
            )}
            {registrations.map((registration) => (
              <div
                key={registration.eventId}
                className="bg-white/50 rounded-lg px-10 py-5 my-5 
                relative shadow-md flex flex-col"
              >
                {registration.leaderId == token?.user.id &&
                  !registration.event.isSoloEvent && (
                    <button
                      onClick={() => handleEventFormPopup(registration)}
                      className="transition ease-in-out delay-15 z-20 -right-4 -top-4 
              absolute rounded-full w-12 h-12 bg-pink-500 
              shadow-lg grid place-items-center hover:scale-110"
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
                  )}

                <span className="font-bold mt-2 text-slate-600">
                  Event: {registration.event.eventName}
                </span>

                <span className="font-bold mt-2 text-slate-600">
                  Venue: {registration.event.eventVenue}
                </span>
                <span className="font-bold mt-2 text-slate-600">
                  Timings: {formatDate(registration.event.eventTime)}
                </span>

                <div className="flex space-x-2 my-3">
                  <img
                    src={registration.leader.picture}
                    className="w-10 h-10 border-2 border-white rounded-full"
                  />
                  {registration.teamMembersDetails.map((user) => (
                    <img
                      key={user.tscId}
                      src={user.picture}
                      className="w-10 h-10 border-2 border-white rounded-full"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="event-popup"
          className="fixed w-screen h-screen  top-full left-0 flex justify-center items-center 
            backdrop-blur opacity-0 px-5 z-40 scale-50"
        >
          <div className="w-full max-w-xl h-97/100 bg-white shadow-lg relative rounded-lg">
            <button
              onClick={() =>
                handleEventFormPopup({
                  _id: "628201f3bc07732fd55443b4",
                  eventId: "TSCCE09",
                  isTeamRegistration: true,
                  leaderId: "627a64f0951870870aaf4e33",
                  teamMembers: ["626d25690ac9e00f00574e68"],
                  description: "",
                  event: {
                    _id: "627a7da3ca43c860d6a5593c",
                    eventId: "TSCCE09",
                    eventName: "test",
                    eventDescription:
                      "Well what is any fest without a good, mind boggling, discombobulating (big fests need big words defining it) treasure hunt based on your technical and basic scientific knowledge.",
                    eventTime: "2022-05-21T03:30:00.000Z",
                    eventVenue: "East capmus",
                    isSoloEvent: false,
                    minTeamSize: 2,
                    maxTeamSize: 4,
                  },
                  leader: {
                    _id: "627a64f0951870870aaf4e33",
                    id: "626d25690ac9e00f00574e68",
                    tscId: "TSC2200504",
                    googleId: "117887387656993132961",
                    name: "TEJPRATAP SINGH",
                    email: "tejpratapsingh545@gmail.com",
                    isHbtuStudent: false,
                    isTSCTeamMember: false,
                    isTSCAdmin: false,
                    college: "hbtu",
                    city: "Kanpur",
                    phone: "09935973863",
                    picture:
                      "https://lh3.googleusercontent.com/a-/AOh14GjVSHLC1dKFg2UzqCkp2dl3i5pMOH2KY03nECqdRA=s96-c",
                    batch: "2023",
                    branch: "Computer Science & Engineering",
                  },
                  teamMembersDetails: [
                    {
                      _id: "626d25690ac9e00f00574e68",
                      id: "626d25690ac9e00f00574e68",
                      tscId: "TSC2200524",
                      googleId: "108283714822442297303",
                      name: "Ayush Kumar",
                      email: "ayushskywalker@gmail.com",
                      isHbtuStudent: false,
                      isTSCTeamMember: false,
                      isTSCAdmin: false,
                      college: "HBTU",
                      city: "Kanpur",
                      phone: "6393443885",
                      picture:
                        "https://lh3.googleusercontent.com/a-/AOh14GiwKHTKHtH-D35ZKWPsHq1bhQH-plqr1IOrx-7Dbw=s96-c",
                      batch: "2023",
                      branch: "Information Technology",
                    },
                  ],
                })
              }
              className="transition ease-in-out delay-15 z-20 -right-4 -top-4 
              absolute rounded-full w-12 h-12 bg-pink-500 
              shadow-lg grid place-items-center hover:scale-110"
            >
              <img
                src="https://d2jf5yk8vvx0ti.cloudfront.net/images/close.svg"
                className="w-6 h-6"
              />
            </button>

            <EventEditForm registration={editEventRegistration} />
          </div>
        </div>
      </main>
    </Layout>
    // // </Auth>
  );
}
