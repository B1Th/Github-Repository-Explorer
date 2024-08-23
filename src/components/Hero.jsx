import {
  IconHome,
  IconMessage,
  IconUser,
  IconBook,
  IconBulb,
} from "@tabler/icons-react";
import { FloatingNav } from "./Navbar";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Learn",
    link: "/learn",
    icon: <IconBook className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "FAQ",
    link: "/faq",
    icon: <IconBulb className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const Hero = () => {
  return (
    <main className="relative h-screen w-screen flex justify-center items-center overflow-hidden">
      <section className=" h-screen w-[90%] overflow-hidden">
        <div className="relative w-full">
          <FloatingNav navItems={navItems} />
        </div>
        <div className="h-[85%] w-full flex justify-center items-center flex-col md:flex-row">
          <h1 className="w-full md:w-[32%] text-[5vw] font-extrabold ">
            Discover <br className="hidden md:block" /> The
          </h1>
          <div className="w-[70%] md:w-[36%] ">
            <img
              src="/github.png"
              alt="github logo"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h1 className="w-full md:w-[32%] text-[5vw] font-extrabold text-right">
            Github <br className="hidden md:block" /> Universe
          </h1>
        </div>
        <div className="h-[15%] w-full flex justify-center items-start">
          <button className="relative  inline-flex h-16 w-56 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <a
                href="#Start"
                className="h-full w-full flex justify-center items-center"
              >
                Get Started
              </a>
            </span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
