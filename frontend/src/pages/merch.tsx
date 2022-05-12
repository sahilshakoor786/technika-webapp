import { useEffect, useState } from "react";
import Auth from "src/components/Auth";
import FancyImage from "src/components/FancyImage";
import Layout from "src/components/Layout";
import { Merch } from "src/types/merch";
import { axiosInstance } from "src/utils/axios";

import gsap from "gsap";
import MerchForm from "src/components/MerchForm";

export default function Page() {
  const [popup, setPopup] = useState(false);

  const [merchs, setMerchs] = useState<Merch[]>([]);
  const [merchId, setMerchId] = useState("");
  const [merchName, setMerchName] = useState("");

  useEffect(() => {
    getInitData();
  }, []);

  async function getInitData() {
    try {
      const res = await axiosInstance.get(`/merchandise/products`);
      setMerchs(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFormPopup(id: string, name: string) {
    setMerchId(id);
    setMerchName(name);

    if (!popup) {
      gsap.to("#popup", {
        top: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      });
    } else {
      gsap.to("#popup", {
        top: "100%",
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "slow(0.7, 0.7, false)",
      });
    }

    setPopup(!popup);
  }

  return (
    <Layout>
      <main
        className="h-full min-h-screen overflow-x-hidden 
          flex justify-center items-center"
      >
        <div
          className="p-10 relative text-white w-full md:w-3/4  h-1/2
        bg-blue-800/10 backdrop-blur flex flex-col justify-center
          shadow-lg py-6 px-2 space-y-2 rounded-lg"
        >
          <h1
            className="font-primary text-3xl md:text-5xl text-center 
                mt-32 md:mt-20 mb-10"
          >
            Merch Store
          </h1>

          <div className="flex justify-center items-center gap-y-8 gap-x-8 flex-wrap">
            {merchs.map((merch) => (
              <FancyImage
                key={merch._id}
                src={merch.image}
                width={400}
                height={300}
                //   text={merch._id}
                onClick={() => handleFormPopup(merch._id, merch.name)}
              />
            ))}
          </div>
        </div>

        <div
          id="popup"
          className="fixed w-screen h-screen top-full left-0 flex justify-center items-center 
            backdrop-blur opacity-0 px-5 z-40 scale-50"
        >
          <div className="w-full max-w-xl h-2/3 bg-white shadow-lg relative rounded-lg">
            <button
              onClick={() => handleFormPopup("", "")}
              className="transition ease-in-out delay-15 z-20 -right-4 -top-4 
              absolute rounded-full w-12 h-12 bg-pink-500 
              shadow-lg grid place-items-center hover:scale-110"
            >
              <img
                src="https://d2jf5yk8vvx0ti.cloudfront.net/images/close.svg"
                className="w-6 h-6"
              />
            </button>

            <MerchForm merchId={merchId} merchName={merchName} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
