const Start = () => {
  return (
    <div className="w-screen flex justify-center items-center flex-col mt-24">
      <h1 className="text-5xl font-semibold">
        Get Started with GitHub Repository Explorer
      </h1>
      <p className="text-[#D9D9D9] opacity-90 mt-5">
        Type the github username below to view the list of their repositories
      </p>
      <div className="w-screen text-center mt-16">
        <input type="text" className="w-[20%] text-black h-10 rounded m-3" />
        <button className="w-[10%] h-10 border-2 border-white rounded">
          Search
        </button>
      </div>
    </div>
  );
};
export default Start;
