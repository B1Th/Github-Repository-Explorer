import Heading from "./Heading";

const Community = ({ className }) => {
  return (
    <div
      className={`h-screen w-screen flex justify-center items-center ${className}`}
    >
      {/* <img
        src="/catchair.jpg"
        alt="catchair"
        className="h-[40%] w-[80%] rounded-2xl object-cover object-center"
      /> */}

      <div className="h-[80%] w-[85%] flex justify-between items-start">
        <div className="h-[100%] w-[48%]">
          <img
            src="/ballcat.jpg"
            alt="ballcat"
            className="w-full h-full object-cover object-center rounded-2xl"
          />
        </div>
        <div className="h-full w-[48%] flex justify-between items-center flex-col">
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
          <div className="h-[30%] w-full rounded-2xl mt-[5%] overflow-hidden">
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
