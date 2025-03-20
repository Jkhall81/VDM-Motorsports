import { LandingMain } from "./components/landing-page/landing-main";
import { LandingMiddle } from "./components/landing-page/landing-middle";

export default function Home() {
  return (
    <main className="bg-neutral-200">
      <LandingMain />
      <LandingMiddle />
    </main>
  );
}
