import { GridBg } from "@/components/GridBg";
import { HeroDemoPar } from "@/components/HeroDemoPar";
import { NavbarDemo } from "@/components/NavbarDemo";
import { SignupForm } from "@/components/SignUpForm";
import { SparklesPreview } from "@/components/SparklesPreview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-1xl w-full">
        <NavbarDemo />
        <SparklesPreview />
        <GridBg />
        {/* <HeroDemoPar /> */}
      </div>
    </main>
  );
}

/*
<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
    */
