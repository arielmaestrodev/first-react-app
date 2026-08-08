import { useState } from "react";

import { cn } from "@/lib/cn";
import { HomePageBannerSection } from "@/components/features/home/homepage-banner-section";
import { CardDataSection } from "@/components/features/home/card-data-section";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [ box, setBox ] = useState("open");

  const switchBox = () => {
    if (box === "closed") {
      setBox("open");
    } else if (box === "open") {
      setBox("closed");
    } else {
      setBox("Invalid Box");
    }
  }

  const alertMe = (message: string) => {
    alert(message);
  }

  return (
    <>
      <HomePageBannerSection />
      <CardDataSection />
      <section className={cn(box === "closed" ? "h-0" : "h-20", "duration-200 delay-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-300")}>
        <h1 className={cn(box === "closed" ? "opacity-0" : "opacity-100", "duration-200 delay-200")}>Box</h1>
        {/* <Button onClick={() => alertMe("You already clicked me!")}>Alert Me</Button> */}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button onClick={switchBox}>Click Me</Button>
      </section>
    </>
  )
}