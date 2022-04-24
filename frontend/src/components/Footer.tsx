export default function Footer() {
  return (
    <footer className="bg-black p-10 flex justify-center items-center flex-col">
      <h2 className="font-primary text-xl font-bold text-white">Proudly brought to you by</h2>
      <div className="flex justify-center items-center my-5">
        <img
          src="https://tscs3bucket.s3.ap-south-1.amazonaws.com/images/hbtu.jpg"
          className="h-20 mx-10"
        />
        <img
          src="https://d2jf5yk8vvx0ti.cloudfront.net/images/logo.png"
          className="h-20 mx-10"
        />
      </div>
    </footer>
  );
}
