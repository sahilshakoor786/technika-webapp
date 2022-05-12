import FancyImage from "../FancyImage";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="h-fit min-h-screen bg-cover bg-main-image
      flex-wrap p-10 flex justify-center items-center flex-col"
    >
      <h1 className="text-white font-primary text-5xl my-10 px-10 py-2 backdrop-blur rounded-lg">
        About
      </h1>

      <div className="flex justify-center items-center md:space-x-10 flex-wrap backdrop-blur rounded">
        <span
          id="about-image"
          className="h-0 md:px-10 w-full
        opacity-50 overflow-hidden grid place-items-center"
          style={{ maxWidth: 650 }}
        >
          <FancyImage
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/20220310191740__MG_8620.JPG"
            width={500}
            height={300}
          />
        </span>
        <div
          id="about-text"
          className="h-0 opacity-50
          overflow-hidden font-sans text-xl text-white text-center max-w-xl 
          grid place-items-center "
        >
          Born from the rage of the technological era, Technika is a perennial
          yearly three-day technical fest organized by the Technical sub-council
          of Harcourt Butler Technical University Kanpur (U.P). Technika
          inherits the idea to surpass the creative artistry among the budding
          minds by real-world problems. This origin will bear the eternal flame
          that will ignite the wings of the phoenix.
        </div>
      </div>
    </section>
  );
}
