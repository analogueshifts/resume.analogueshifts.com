import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/public/images/house-icon.png";
import RightBracket from "@/public/images/right-bracket.png";
import resumeTemplates from "@/resources/resume-builder/resume-templates.json";
import ResumeList from "@/components/application/resume-list";

export default function Landing() {
  return (
    <>
      {" "}
      <main className="w-full items-center h-max py-[100px] px-10 max-[800px]:px-5  bg-white">
        <div className="flex w-full gap-4 items-center pb-8">
          <Link href="/" className="flex gap-1.5 items-center">
            <Image src={HomeIcon} alt="Home Icon" className="w-7 h-7" />
            <p className="text-black/80 font-medium text-sm hover:underline">
              Home
            </p>
          </Link>
          <Image src={RightBracket} alt="Divider Icon" className="w-5 h-4" />
          <p className="text-black/50 font-medium text-sm">Resume Templates</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Resume Templates
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Looking for a job? Our extensive collection of free resume templates
            can assist you. Just select your favorite, download directly to Word
            or open in Google Docs, and fill it out. We also offer a copy-paste
            template and provide guidance on how to complete your own resume
            template with an instructional video.
          </p>
          <div className="w-full flex max-[500px]:flex-col justify-center">
            <Link
              className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
              href="/resume-builder/app/how-to-start"
            >
              Build My Resume
            </Link>
          </div>
        </div>
      </main>
      <div className="w-full px-10 max-[800px]:px-5">
        <div className="w-full flex justify-center border-b ">
          <Link
            href="/resume-templates"
            className="w-[112px] flex justify-center pb-5 text-AnalogueShiftsTextColor/80 border-b border-AnalogueShiftsTextColor/80 text-base font-medium"
          >
            Resume
          </Link>
          <Link
            href="/cover-letter-templates"
            className="w-max px-14 pb-5 text-black/60  hover:text-black/80 text-base font-medium"
          >
            Cover Letter
          </Link>
        </div>
        <section
          style={{ backgroundImage: "url(/pop-bg.svg)" }}
          className="mt-10 w-full h-max flex flex-col  bg-no-repeat"
        >
          <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Use an AnalogueShifts Resume Template
          </p>
          <ResumeList data={resumeTemplates.slice(0, 2)} />
        </section>
        <div className="w-full  h-max py-[60px] flex justify-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Free Resume Templates to Download
          </p>
        </div>
      </div>
    </>
  );
}
