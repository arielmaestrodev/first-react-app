import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { HeroBannerSection } from "@/components/features/home/hero-banner-section";
import { UserCardSection } from "@/components/features/home/user-card-section";

export default function HomePage() {


  return (
    <>`
      <Header />`
      <main className="flex-1">
        <UserCardSection />
        <HeroBannerSection />
      </main>
      <Footer />
    </>
  )
}``