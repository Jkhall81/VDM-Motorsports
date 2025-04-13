import { LandingMain } from "./components/landing-page/landing-main";
import { LandingMiddle } from "./components/landing-page/landing-middle";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="bg-neutral-200">
      <LandingMain />
      {/* <Separator className="mx-20 bg-black" />
      <LandingMiddle /> */}
    </main>
  );
}
