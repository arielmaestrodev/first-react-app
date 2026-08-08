import { useState } from "react";

import { cn } from "@/lib/cn";
import { CardDataSection } from "@/components/features/home/card-data-section";
import { HomePageBannerSection } from "@/components/features/home/homepage-banner-section";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [ box, setBox ] = useState("Closed");

  const switchBox = () => {
    if (box === "Closed") {
      setBox("Open");
    } else if (box === "Open") {
      setBox("Closed")
    } else {
      setBox("Invalid Box")
    }
  }

  const alertMe = (message: string) => {
    alert(message);
  }

  return (
    <>
      <CardDataSection />
      <HomePageBannerSection />
      <section className={cn(box === "Closed" ? "h-0 opacity-0" : "h-20 opacity-100", "duration-200 delay-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200 mt-4")}>
        <h1>Box</h1>
        {/* <Button onClick={() => alertMe("Testing!!")}>Alert Me</Button> */}
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <Button onClick={switchBox}>Switch</Button>
      </section>
    </>
  )
}