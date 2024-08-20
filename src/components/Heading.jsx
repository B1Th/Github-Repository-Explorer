const Heading = ({ text, className }) => {
  return (
    <h1 className={`text-5xl font-semibold ${className}`}>
      {text}
    </h1>
  );
};

export default Heading;
