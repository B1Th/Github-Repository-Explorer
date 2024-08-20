const Banner = ({ className }) => {
  return (
    <div className={`${className}`}>
      <img src="/bottom1.png" alt="bottom1" className="w-full" />
      <div className="relative">
        <img src="/bottom2.jpg" alt="bottom2" className="w-full" />
        <p className="absolute top-[50%] left-[40%] text-[#D9D9D9] opacity-90">
          Unlock the Secrets of Successful GitHub Projects
        </p>
      </div>
    </div>
  );
};

export default Banner;
