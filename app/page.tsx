import Image from "next/image";
import { CardDemo } from "../components/CardDemo";
import { Tooltip } from "../components/Tooltip";
import { PinCode } from "../components/PinCode";
import { GlobeDemo } from "../components/GlobeDemo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Tooltip />
      <PinCode /> */}
      <GlobeDemo />
      {/* task to make a web similar to portifolio */}
    </main>
  );
}
