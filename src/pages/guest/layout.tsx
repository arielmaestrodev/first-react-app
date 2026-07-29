import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Outlet } from "react-router";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}