import Heading from "./Heading";

const Browse = ({ className }) => {
  return (
    <div
      className={`w-screen h-screen flex justify-center items-center ${className}`}
    >
      <div className="w-[85%] flex justify-between items-center overflow-hidden">
        <div className="w-[48%]">
          <div className="mb-[20%]">
            <Heading text="Browse through repository" className="mb-[5%]" />
            <p className="text-[#D9D9D9] opacity-90">
              Our advanced search algorithm helps you find the most relevant
              GitHub repositories based on github’s username, including the
              project description, languages, stars, and recent commits.
            </p>
          </div>
          <div>
            <Heading text="Master GitHub" className="mb-[5%]" />
            <p className="text-[#D9D9D9] opacity-90">
              Dive deep into repository analytics by understanding commit
              patterns, contributor dynamics, and code evolution over time.
            </p>
            <p className="text-green-800 mt-[2%]">Start Your GitHub Journey</p>
          </div>
        </div>
        <div className="w-[48%]">
          <img src="/computer.jpg" alt="computer" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Browse;
