import Image from "next/image";
import Link from "next/link";
import curve from "@/public/images/curve.svg";
import Hero from "@/public/images/hero-image.png";
import methods from "@/resources/resume-builder/methods.json";

export default function Landing() {
  return (
    <>
      <main className=" w-full box-border curvy-box h-[800px] relative pt-[150px] max-[1050px]:pt-[50px] px-10 max-[500px]:px-5 flex justify-between max-[1050px]:h-auto max-[1050px]:flex-col max-[1050px]:items-center">
        <div className="w-[50%] pr-[50px] max-[900px]:px-0 h-[610px] max-[800px]:h-auto max-[800px]:py-16 flex flex-col justify-center max-[1050px]:items-center max-[1050px]:w-full max-[1050px]:presume-0">
          <p className="text-black/50 max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            THE BEST RESUME BUILDER ONLINE
          </p>
          <p className="text-black/80 text-[3.5rem] max-[1050px]:text-center max-[700px]:text-3xl leading-[4.5rem] font-extrabold py-2">
            Craft Your Professional Resume
          </p>
          <p className="text-AnalogueShiftsTextColor/70 max-[700px]:text-3xl text-[3.5rem] leading-[4.5rem] font-extrabold ">
            Effortlessly...
          </p>
          <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pt-3">
            Experience the ease of our AI-driven resume builder. Harness the
            capabilities of our Genius resume maker to swiftly and effortlessly
            craft your professional resume.
          </p>
          <div className="pt-12">
            <Link
              className="bg-AnalogueShiftsTextColor w-max px-8 flex justify-center items-center duration-300 hover:-translate-y-1 text-black/70 font-medium text-sm py-3 rounded-lg"
              href="/resume-builder/app/how-to-start"
            >
              Build My Resume Now
            </Link>
          </div>
        </div>
        <div className="w-[50%] h-[610px] flex justify-end items-center max-[1050px]:w-[70%] max-[800px]:w-full max-[800px]:h-auto max-[1050px]:pb-10">
          <Image src={Hero} alt="Hero BG" />
        </div>
      </main>
      <Image className="w-full absolute " src={curve} alt="Curve" />
      <div className="w-full px-10 h-auto py-[120px] max-[1000px]:py-[40px] flex flex-wrap gap-x-10 gap-y-10">
        {methods.map((data) => {
          return (
            <div
              key={crypto.randomUUID()}
              className="w-[calc(33.3%-28px)]  flex flex-col gap-5 max-[1000px]:w-[calc(50%-40px)] max-[700px]:w-full max-[700px]:items-center"
            >
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-AnalogueShiftsTextColor/40 shape-box">
                <Image
                  src={data.image}
                  width={40}
                  height={40}
                  alt="Icon"
                  className="w-[60%] h-[60%]"
                />
              </div>
              <p className="text-black/80 font-bold text-lg pl-2">
                {data.title}
              </p>
              <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
                {data.subTitle}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
