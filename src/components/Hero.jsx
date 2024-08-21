import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main className="relative h-screen w-screen flex justify-center overflow-hidden">
      <div className=" h-screen w-[90%] overflow-hidden">
        <Navbar />
        <section className="relative h-[90vh] w-full z-10 flex justify-center items-center flex-col">
          <div className="absolute top-[25%] md:top-[10%] h-[40%] md:h-[60%] w-[60%] md:w-[35%] flex justify-center">
            <img
              src="/github.png"
              alt="github logo"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="h-[65%]  w-full flex justify-between items-center flex-col md:flex-row">
            <h1 className="w-full md:w-[33%] text-[5vw] font-extrabold ">
              Discover <br className="hidden md:block" /> The
            </h1>
            <h1 className="w-full md:w-[33%] text-[5vw] font-extrabold text-right ">
              Github <br className="hidden md:block" /> Universe
            </h1>
          </div>
          <button className="border-2 border-white px-[8%] py-[1.5%] rounded">
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
};

export default Hero;
