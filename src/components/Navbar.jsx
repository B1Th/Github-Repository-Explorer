const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[10%] w-full relative z-20">
      <div className="h-10 w-28">
        <img src="/logo.png" alt="logo" />
      </div>
      <ul className="flex justify-center items-center gap-10">
        <li> Home </li>
        <li> About </li>
        <li> Contact </li>
        <li> FAQ </li>
      </ul>
    </div>
  );
};
export default Navbar;
