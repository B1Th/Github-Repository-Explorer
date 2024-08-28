import Paragraph from "./assets/Paragraph";

const Footer = () => {
  return (
    <div className="w-screen h-80 flex justify-center items-center flex-col">
      <div className="w-[85%] h-full flex justify-center items-center">
        <div className="w-[25%] h-[full] flex justify-center items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[50%] object-cover object-center"
          />
        </div>
        <div className="w-[75%] flex justify-center items-center">
          <div className="w-[75%] flex justify-between items-start text-[clamp(.2rem,1vw+.2rem,3rem)] ">
            <div className="flex justify-center items-center flex-col">
              <ul>
                <p className="mb-3">Explore</p>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex justify-center items-center flex-col">
              <ul>
                <p className="mb-3">Connect</p>
                <li>Linkedin</li>
                <li>Github</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="flex justify-center items-center flex-col">
              <ul>
                <p className="mb-3">Learn</p>
                <li>Tutorial</li>
                <li>Documentation</li>
                <li>Community</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Paragraph
        text={"©2024 All rights reserved & created By Bhuwan Thapa. "}
      />
    </div>
  );
};

export default Footer;
