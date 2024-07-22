import { HeroDemoPar } from "@/components/HeroDemoPar";
import { NavbarDemo } from "@/components/NavbarDemo";
import { SparklesPreview } from "@/components/SparklesPreview";

export default function Home() {
  return (
    <main className="h-[40rem] bg-black w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-1xl w-full">
        <NavbarDemo />
        <SparklesPreview />
      </div>
    </main>
  );
}

/*
https://www.reactbootcamp.com/#checkout
    */
