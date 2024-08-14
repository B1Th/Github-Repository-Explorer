import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main className="relative h-screen w-screen">
      <div className="absolute inset-0 z-0 bg-[url('/bg.jpg')] h-screen w-screen bg-cover bg-center opacity-20" />

      <div className="px-20 h-screen w-screen">
        <Navbar />
        <section className="relative h-[90%] z-10 flex justify-center items-center">
          <h1 className="text-8xl font-extrabold">
            Discover <br /> The
          </h1>
          <img src="/github.png" alt="github logo" />
          <h1 className="text-8xl font-extrabold text-right">
            Github <br /> Universe
          </h1>
        </section>
      </div>
    </main>
  );
};

export default Hero;
