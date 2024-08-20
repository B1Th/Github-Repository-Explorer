import Paragraph from "./Paragraph";

const Banner = ({ className }) => {
  return (
    <div className={`${className}`}>
      <img src="/bottom1.png" alt="bottom1" className="w-full" />
      <div className="relative">
        <img src="/bottom2.jpg" alt="bottom2" className="w-full" />
        <Paragraph
          text={"Unlock the Secrets of Successful GitHub Projects"}
          className="absolute top-[50%] text-center w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
