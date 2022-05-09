import { useState } from "react";
import SecondaryButton from "./SecondaryButton";

type EventRegisterButtonProps = {
  eventId: string;
};

export default function EventRegisterButton({}: EventRegisterButtonProps) {
  const [popup, setPopup] = useState(false);

  return (
    <>
      {/* <div className="fixed w-full h-full left-0 top-0 grid place-items-center z-20">
        <div className=" w-full max-w-xl h-1/3 left-1/2 bg-red-50 rounded-lg"></div>
      </div> */}
      <SecondaryButton
        text="Register to event"
        onClick={() => setPopup(true)}
      />
    </>
  );
}
