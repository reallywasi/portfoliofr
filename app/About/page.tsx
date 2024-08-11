const AboutPage = () => {
  return (
    <>
      <div className="py-10 lg:py-16 px-3">
        <div className="mt-10 lg:mt-20 bg-gray-700 p-7 lg:p-10 bg-opacity-30 rounded-lg lg:rounded-2xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            <span className="text-[#f72b1c]">A</span>bout
          </h1>
        </div>
      </div>

      <div className="py-10 lg:py-16 px-3">
        <p className="text-gray-400 text-xs md:text-base leading-5 md:leading-8 text-center max-w-2xl lg:mx-auto">
          I was born in Dehradun, nestled in the foothills of the Himalayas. Since my school days, I've had a passion for coding. I'm currently a 3rd-year undergraduate in Computer Science, and apart from coding, I enjoy roller skating and trekking.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
