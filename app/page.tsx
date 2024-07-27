import { Activityz } from "@/components/BentoGridz";
import { Blogz } from "@/components/CardCarousel";
import { CoWorkerz } from "@/components/ExpandableCard";
import Footer from "@/components/Footer";
import { Certificates } from "@/components/ImageSliderz";
import { Languages } from "@/components/MultiStepLoaderz";
import { Navbarz } from "@/components/NavbarDemo";
import { Header } from "@/components/SparklesPreview";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-5xl w-full">
        <Navbarz />
        <div className="bg-black-100 pb-10 pt-30 flex flex-col gap-3">
          <Header />
          <Activityz />
          <Languages />
          <Blogz />
          <Certificates />
          <CoWorkerz />
          <Footer />
        </div>
      </div>
    </main>
  );
}
