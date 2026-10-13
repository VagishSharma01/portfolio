import { Rail } from "@/components/Rail";
import { Chapters } from "@/components/Chapters";
import { MobileBar } from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <MobileBar />
      <div className="layout">
        <Rail />
        <Chapters />
      </div>
    </>
  );
}
