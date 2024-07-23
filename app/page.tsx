import { BentoGridz } from "@/components/BentoGridz";
import { NavbarDemo } from "@/components/NavbarDemo";
import { SparklesPreview } from "@/components/SparklesPreview";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-5xl w-full">
        <NavbarDemo />
        <div className=" bg-black-100 pb-10 pt-30 flex flex-col gap-5">
          <SparklesPreview />
          <BentoGridz />
          {/* <Meteorz /> */}
        </div>
      </div>
    </main>
  );
}
