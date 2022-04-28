import Layout from "src/components/Layout";

export default function ErrorPage() {
  return (
    <Layout>
      <main
        className="overflow-x-hidden h-screen flex justify-center items-center"
      >
        <div
          className="z-10 mx-10 p-10 relative md:w-1/2  h-1/2
        bg-blue-800/10 backdrop-blur flex flex-col justify-center
          shadow-lg space-y-2 rounded-lg"
        >
           <h1 className="font-primary text-3xl text-center text-white">
              An unexpected error occurded
            </h1>
        </div>
      </main>
    </Layout>
  );
}
