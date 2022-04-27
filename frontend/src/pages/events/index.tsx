import Layout from "src/components/Layout";

export default function EventsPage() {
  return (
    <Layout>
      <main
        className="overflow-x-hidden bg-black 
      bg-cover bg-fixed bg-main-image h-screen flex justify-center items-center"
      >
        <div
          className="-10 relative text-white md:w-1/2  h-1/2
        bg-blue-800/10 backdrop-blur flex flex-col justify-center
          shadow-lg py-6 px-2 space-y-2 rounded-lg"
        >
          <h1 className="font-primary text-3xl md:text-5xl text-center">
            More about events coming soon
          </h1>
        </div>
      </main>
    </Layout>
  );
}