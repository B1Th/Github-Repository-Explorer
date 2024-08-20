import Heading from "./Heading";

const Community = ({ className }) => {
  return (
    <div
      className={`h-screen w-screen flex justify-center items-center overflow-hidden ${className}`}
    >
      <div className="h-full md:h-[80%] w-[85%] flex justify-between items-start flex-col md:flex-row">
        <div className="h-[50%] md:h-full w-full md:w-[48%]">
          <img
            src="/ballcat.jpg"
            alt="ballcat"
            className="w-full h-full object-cover object-center rounded-2xl"
          />
        </div>
        <div className="h-full w-full md:w-[48%] flex md:justify-between items-center flex-col mt-14 md:mt-0">
          <Heading
            text="Embrace the GitHub Community"
            className="mb-8 mr-auto"
          />
          <div className="h-[30%] w-full rounded-2xl overflow-hidden">
            <img
              src="/community1.jpg"
              alt="community1"
              className="w-[60%] object-cover ml-auto rounded-2xl"
            />
          </div>
          <div className="h-[30%] w-full rounded-2xl mt-[2%] md:mt-[5%] overflow-hidden">
            <img
              src="/community2.png"
              alt="community2"
              className="w-[60%] object-cover rounded-2xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
