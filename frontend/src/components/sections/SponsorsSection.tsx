export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="h-full max-h- bg-slate-500 bg-cover bg-main-image
    flex-wrap p-10 flex justify-center items-center"
    >
      <h1 className="text-white font-primary text-5xl my-10 px-10 py-2 backdrop-blur rounded-lg">
        Sponsors
      </h1>
      <div className="flex justify-center items-center space-y-10 gap-x-5 md:space-x-10  gap-y-2 px-10 py-2 flex-wrap backdrop-blur  ">
        <a
          href="https://urban-vada-pav.ueniweb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-16 mt-10"
            src="https://speedy.uenicdn.com/b6c3d851-9ab7-4969-8a0e-9437434c9619/c64_64a/image/upload/v1564333804/business/b6c3d851-9ab7-4969-8a0e-9437434c9619/SAVE-20190626-235506jpg.jpg"
            alt=""
          />
        </a>
        <a
          href="https://www.pizzahut.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-16 w-16"
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/Pizza-Hut-Logo-20142.jpg"
            alt=""
          />
        </a>
        <a
          href="https://baskinrobbinsindia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-14"
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/Baskin-Robbins-symbol.jpg"
            alt=""
          />
        </a>
        <a
          href="https://www.imsindia.com/center/kanpur/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-15"
            src="https://www.imsindia.com/center/ims-logo-bg-small.png"
            alt=""
          />
        </a>
        <a
          href="https://www.feedingindia.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-12"
            src="https://b.zmtcdn.com/data/o2_assets/68ab7bac05d3ec3bff89a2e428e5b4f71619504075.png"
            alt=""
          />
        </a>
      </div>

      <h1 className="text-white font-primary text-5xl my-10 px-10 py-2 backdrop-blur rounded-lg">
        Media partner
      </h1>

      <div className="flex justify-center items-center space-y-10 gap-x-5 md:space-x-10  gap-y-2 px-10 py-2 flex-wrap backdrop-blur  ">
        <a
          href="https://urban-vada-pav.ueniweb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-16 mt-10"
            src="https://d2jf5yk8vvx0ti.cloudfront.net/images/a1times.jpeg"
            alt=""
          />
        </a>
      </div>
    </section>
  );
}
