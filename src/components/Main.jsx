import appIllustrationImg from "../images/illustration-app.png";
import bgPattern2 from "../images/bg-pattern-2.svg";
import iconApple from "../images/icon-apple.svg";
import iconAndroid from "../images/icon-android.svg";

const Main = () => {
  return (
    <main className="mb-16 flex w-full max-w-[26.75rem] flex-col items-center self-center md:mb-[5.438rem] md:w-[43.5rem] md:max-w-[43.5rem] md:items-start xl:w-[69.375rem] xl:max-w-[69.375rem]">
      <div className="z-10">
        <img
          className="h-[26.875rem] w-[13.061rem] md:ml-16 md:h-[34.75rem] md:w-[16.888rem] xl:ml-[6.375rem] xl:h-[40.125rem] xl:w-[19.5rem]"
          src={appIllustrationImg}
          alt=""
        />
      </div>
      <div className="-mt-[20.75rem] flex h-[37.5rem] w-full justify-center overflow-hidden rounded-[12px] bg-[#191826] md:-mt-[26.125rem] xl:justify-start">
        <div>
          <img
            className="w-[17.5rem] md:-mt-[1.938rem] xl:-mt-10 xl:ml-[21rem] xl:w-[19.5rem]"
            src={bgPattern2}
            alt=""
          />
        </div>
      </div>
      <div className="-mt-[13.75rem]  flex h-[34.125rem] w-full flex-col rounded-[12px] bg-[#FA7453] py-12 px-9 md:z-20 md:-mt-[28.125rem] md:ml-[14.938rem] md:w-[24.938rem] md:p-12 xl:-mt-[31.875rem] xl:ml-[35.563rem] xl:h-[39.063rem] xl:w-[27.875rem] xl:py-[3.625rem] xl:px-[3.375rem]">
        <div className="mb-9 flex flex-col gap-[0.75rem] xl:mb-[2.438rem] xl:gap-[1.375rem]">
          <h2 className="text-[2rem] font-bold leading-[2.5rem]  tracking-normal text-[#FCFAF9] xl:text-[2.5rem] xl:leading-[3.25rem]">
            Premium EQ
          </h2>
          <p className="text-lg font-normal tracking-normal text-[#FCFAF9] xl:text-xl xl:leading-[2.125rem]">
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
        </div>
        <div className="mb-8 flex items-center gap-4 text-[1.25rem] font-normal leading-[2rem] tracking-[-0.2px] text-[#FCFAF9] xl:mb-[2.875rem]">
          <span className="text-[4.063rem] font-bold leading-[3.25rem] tracking-normal">
            $4
          </span>{" "}
          / month
        </div>
        <div className="flex flex-col gap-4">
          <a
            className="flex h-[3.813rem] w-full items-center justify-center gap-2 rounded-[12px] bg-[#191826] text-[1.125rem] font-bold leading-[2rem] tracking-[-0.18px] text-[#FCFAF9] hover:bg-[#66E2DC] hover:text-[#FCFAF9]"
            href="#"
          >
            <img src={iconApple} alt="" />
            iOS Download
          </a>
          <a
            className="flex h-[3.813rem] w-full items-center justify-center gap-2 rounded-[12px] bg-[#FCFAF9] text-[1.125rem] font-bold leading-[2rem] tracking-[-0.18px] text-[#191826] hover:bg-[#FFB964] hover:text-[#191826]"
            href="#"
          >
            <img src={iconAndroid} alt="" />
            Android Download
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
