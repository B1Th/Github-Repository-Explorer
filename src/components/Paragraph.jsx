const Paragraph = ({ text, className }) => {
  return (
    <p
      className={`text-[#D9D9D9] text-[clamp(.2rem,1vw+.2rem,3rem)] opacity-90 ${className}`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
