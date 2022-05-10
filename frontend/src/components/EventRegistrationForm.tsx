import { useEffect, useState } from "react";
import { Event } from "src/types/event";
import { getToken, Token } from "src/types/token";
import { axiosInstance } from "src/utils/axios";
import Spinner from "./Spinner";

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

  useEffect(() => {
    getUser();
    fetchEventDetails();
  }, []);

  function getUser() {
    const token = getToken();
    setToken(token);
  }

  async function fetchEventDetails() {
    setLoading(true);

    try {
      const eventRes = await axiosInstance.get(`/event/${eventId}`);
      setEvent(eventRes.data.result);

      const canRegister = await axiosInstance.post(`/event/register/check`, {
        userId: token?.user.id,
      });

      console.log(canRegister)
    } catch (error) {
      console.log(error);
      setError((error as Error).message);
    }

    setLoading(false);
  }

  return (
    <div className="h-full flex flex-col items-center justify-center overflow-y-scroll">
      {loading ? (
        <Spinner />
      ) : error ? (
        <>
          <h1 className="font-primary text-2xl">
            An Unexpected error occured{" "}
          </h1>
          <p>{error}</p>
        </>
      ) : (
        <>
          <h1 className="font-primary text-2xl">
            Register to {event?.eventName}
          </h1>
        </>
      )}
    </div>
  );
}
