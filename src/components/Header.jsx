import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="mt-10 mb-[4.25rem] flex max-w-[26.75rem] flex-col gap-16 px-4 md:mb-[6.938rem] md:mt-[3.875rem] md:ml-10 md:max-w-[32.5rem] md:gap-[5.938rem] md:self-start md:px-0 xl:mb-[6.75rem] xl:ml-0 xl:max-w-[63.5rem] xl:gap-[7.938rem]">
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div className="flex flex-col gap-[1.25rem] md:gap-[1.75rem] xl:gap-10">
        <h1 className="text-[2.5rem] font-bold leading-[3rem] tracking-[-0.45px] text-[#191826] md:text-[4rem] md:leading-[4rem] xl:text-[5.5rem] xl:leading-[5.5rem] xl:tracking-[-1px]">
          We make your music sound extraordinary.
        </h1>
        <p className="text-base font-normal leading-[1.625rem] tracking-normal text-[#191826] md:text-lg xl:w-[51.563rem] xl:text-xl xl:leading-[2.125rem]">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
    </header>
  );
};

export default Header;
