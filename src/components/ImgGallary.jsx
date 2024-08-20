const ImgGallary = ({ className }) => {
  return (
    <div className={`w-screen flex justify-center items-center ${className}`}>
      <div className=" w-[85%] flex flex-col md:flex-row justify-between gap-12">
        <div className="w-full md:w-[60%] overflow-hidden">
          <img
            src="/catlogo.jpg"
            alt="catlogo"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-[35%] flex flex-col gap-6">
          <div className="w-full h-36 overflow-hidden">
            <img
              src="/pic1.png"
              alt="pic1"
              className="h-full w-full object-cover object-center rounded-2xl"
            />
          </div>
          <div className="flex justify-between">
            <img
              src="/pic2.png"
              alt="pic2"
              className="w-[47%] h-full object-cover object-center rounded-2xl"
            />
            <img
              src="/pic3.png"
              alt="pic3"
              className="w-[47%] h-full object-cover object-center rounded-2xl"
            />
          </div>
          <div className="w-full h-[28%] flex justify-between">
            <div className="w-[48%] h-[100%] flex justify-between overflow-hidden ">
              <img
                src="/pic4.png"
                alt="pic4"
                className="w-full h-[90%] object-cover object-center rounded-2xl"
              />
            </div>
            <div className="w-[48%] h-[110%] flex justify-between overflow-hidden ">
              <img
                src="/pic5.png"
                alt="pic5"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgGallary;
