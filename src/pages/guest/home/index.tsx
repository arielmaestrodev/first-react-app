import { useState } from "react";
import { cn } from "@/lib/cn";

import { HomePageBannerSection } from "@/components/features/home/homepage-banner-section";
import { CardDataSection } from "@/components/features/home/card-data-section";
import { ProfileSection } from "@/components/features/home/profile-section";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [box, setBox] = useState("Closed");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const boxSwitch = () => {
    if (box === "Open") {
      setBox("Closed");
    } else {
      setBox("Open");
    }
  }

  const loginAccount = (e: any) => {
    e.preventDefault();

    const message = email + password;
    alert(message);
  }

  return (
    <>
      <HomePageBannerSection />
      <CardDataSection />
      <ProfileSection />
      <section className={cn(box === "Closed" ? "h-0" : "h-20", "transition-[height] delay-150 duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-200")}>
        <h1 className={cn(box === "Closed" ? "opacity-0" : "opacity-100", "transition delay-150 duration-300")}>Box</h1>
        {/* <Button onClick={() => setBox("Closed")}>Click</Button> */}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button onClick={boxSwitch}>Click Me</Button>
      </section>

      {/* Forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1>My Email: {email}</h1>
        <h1>My Password: {password}</h1>
        <form onSubmit={loginAccount} className="flex flex-col gap-4">
          <input onChange={(e) => setEmail(e.target.value)} className="border" type="email" placeholder="Enter email" />
          <input onChange={(e) => setPassword(e.target.value)} className="border" type="password" placeholder="Enter password" />
          <Button type="submit">Login</Button>
        </form>
      </section>
    </>
  )
}