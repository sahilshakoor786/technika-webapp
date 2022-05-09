import SecondaryButton from "./SecondaryButton";

type EventRegisterButtonProps = {
    eventId: string;
};

export default function EventRegisterButton({}: EventRegisterButtonProps) {
    return <SecondaryButton text="Register to event" />
}