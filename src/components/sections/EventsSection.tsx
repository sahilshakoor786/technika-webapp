import FancyImage from "../FancyImage";

export default function EventsSection() {
  return (
    <section
      id="events"
      className="h-screen bg-slate-400 border-t
    flex justify-center items-center md:space-x-10 flex-wrap"
    >
      <FancyImage
        src="https://dummyimage.com/300x400"
        width={200}
        height={300}
      />

      <FancyImage
        src="https://dummyimage.com/300x400"
        width={200}
        height={300}
      />

      <FancyImage
        src="https://dummyimage.com/300x400"
        width={200}
        height={300}
      />

      <FancyImage
        src="https://dummyimage.com/300x400"
        width={200}
        height={300}
      />
    </section>
  );
}
