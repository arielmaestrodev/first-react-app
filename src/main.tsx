import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import GuestLayout from "@/pages/guest/layout";

<<<<<<< HEAD
import HomePage from "@/pages/guest/home";
=======
import HomePage from "@/pages/guest/home"
>>>>>>> e733de4 (august-1-pt2)
import AboutPage from "@/pages/guest/about";
import ContactPage from "@/pages/guest/contact";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {/* Guest Pages */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Dashboard Pages */}
    </Routes>
  </BrowserRouter>,
)