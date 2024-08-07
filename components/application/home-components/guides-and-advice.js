import Link from "next/link";
import MasonryGrid from "../mansory-grid";

export default function GuidesAndAdvice({ blogData }) {
  return (
    <div className="w-full h-[1070px] flex flex-col items-center bg-white justify-center p-5 max-[1200px]:h-max">
      <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
        EXPERT GUIDES & ADVICE
      </p>
      <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
        Explore guides to enhance your resume
      </p>
      <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
        Whether you&apos;re a newcomer to job hunting, transitioning fields, or
        aiming for a higher-paying position, we&apos;ll guide you on crafting a
        resume that attracts more interviews
      </p>
      <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
        <Link
          className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
          href="/blog"
        >
          Visit Our Blog
        </Link>
      </div>
      <div className="w-full flex justify-between flex-wrap gap-y-5">
        {blogData[0] && <MasonryGrid posts={blogData} />}
      </div>
    </div>
  );
}
