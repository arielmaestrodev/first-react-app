import { Outlet } from "react-router";
<<<<<<< HEAD

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

=======

import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

>>>>>>> e733de4 (august-1-pt2)
export default function GuestLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}