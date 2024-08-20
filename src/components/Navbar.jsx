const Navbar = () => {
  return (
    <div className="h-[10vh] w-full relative flex justify-between items-center z-20">
      <div className="h-10 w-28">
        <img
          src="/logo.png"
          alt="logo"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <ul className="flex justify-center items-center gap-5 md:gap-10">
        <li> Home </li>
        <li> About </li>
        <li> Contact </li>
        <li> FAQ </li>
      </ul>
    </div>
  );
};
export default Navbar;
