const Browse = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[80%] flex justify-between items-center overflow-hidden">
        <div className="w-[48%]">
          <div className="mb-[20%]">
            <h1 className="text-5xl font-semibold mb-[5%]">
              Browse through repository
            </h1>
            <p>
              Our advanced search algorithm helps you find the most relevant
              GitHub repositories based on github’s username, including the
              project description, languages, stars, and recent commits.
            </p>
          </div>
          <div className="">
            <h1 className="text-5xl font-semibold mb-[5%]">Master GitHub </h1>
            <p>
              Dive deep into repository analytics by understanding commit
              patterns, contributor dynamics, and code evolution over time.
            </p>
            <p className="text-green-800 mb-[2%]">Start Your GitHub Journey</p>
          </div>
        </div>
        <div className="w-[48%]">
          <img src="/computer.jpg" alt="computer" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default Browse;
