import { useEffect, useState } from "react";
import { Event, Registration } from "src/types/event";
import { getToken, setUser, Token } from "src/types/token";
import { axiosInstance } from "src/utils/axios";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Spinner from "./Spinner";

type EventRegistrationFormProps = {
  registration: Registration;
};

export default function EventEditForm({
  registration,
}: EventRegistrationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState<Token>();
  const [userTscId, setUserTscId] = useState("");

  const [participants, setParticipants] = useState<Array<string>>(
    registration?.teamMembersDetails.map((e) => e.tscId)
  );
  const [event, setEvent] = useState<Event>(registration?.event || null);

  useEffect(() => {
    console.log(registration);

    getUser();
  }, []);

  function getUser() {
    const token = getToken();
    setUserTscId(token?.user.tscId || "");
    setToken(token);
  }

  function addMoreParticipant() {
    if (
      registration?.event &&
      participants.length < registration?.event.maxTeamSize - 1
    ) {
      setParticipants([...participants, ""]);
    }
  }

  function removeParticipant(i: number) {
    if (registration?.event) {
      let part = [...participants];
      part.splice(i, 1);

      setParticipants(part);
    }
  }

  function setParticipantData(i: number, data: string) {
    if (registration?.event) {
      let part = [...participants];
      part[i] = data;

      setParticipants(part);
    }
  }

  async function handleRegister() {
    console.log("handleRegister");

    if (token) {
      setLoading(true);

      try {
        await axiosInstance.post(
          `/event/register/update`,
          {
            id: registration._id,
            teamMembersTSCIds: participants,
          },
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
            },
          }
        );
      } catch (error: any) {
        setError(error.response.data.message);
      }

      setLoading(false);
    }
  }

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
          <h1 className="font-primary text-3xl text-center font-bold">
            Update {registration?.event?.eventName}
          </h1>

          <div
            className="grid grid-cols-2 gap-2 p-5
            text-slate-600 bg-slate-100 rounded-lg m-5"
          >
            <span className="font-primary font-bold text-slate-800">
              Solo Event
            </span>
            <span>{registration?.event.isSoloEvent ? "Yes" : "No"}</span>

            <span className="font-primary font-bold text-slate-800 ">
              Max Team Size
            </span>
            <span>{registration?.event.maxTeamSize}</span>

            <span className="font-primary font-bold text-slate-800">
              Min Team Size
            </span>
            <span>{registration?.event?.minTeamSize}</span>
          </div>

          <p>Team Leader</p>
          <input
            className="shadow px-4 py-2 rounded focus:outline-none bg-slate-100 my-2"
            value={userTscId}
            readOnly
          />

          {registration?.event && registration?.event?.minTeamSize > 1 && (
            <p>Team Members</p>
          )}

          {participants?.map((v, i) => (
            <span key={i} className="space-x-2 relative">
              <input
                className="shadow px-4 py-2 rounded focus:outline-none bg-slate-100 my-2"
                placeholder="Enter TSC ID of member"
                onChange={(e) => setParticipantData(i, e.target.value)}
                value={v}
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
            {registration?.event && registration?.event?.minTeamSize > 1 && (
              <SecondaryButton text="Add more" onClick={addMoreParticipant} />
            )}
            <PrimaryButton text="Update" onClick={handleRegister} />
          </div>
        </>
      )}
    </div>
  );
}
