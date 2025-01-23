import React from "react";
import Hero from "@/components/Home/Hero";
import Aboutus from "@/components/Home/AboutUs";
import Dedicated from "@/components/Home/Dedicated";
import Digital from "@/components/Home/Digital";
import Beliefs from "@/components/Home/Beliefs";
import Work from "@/components/Home/Work";
import Team from "@/components/Home/Team";
import Featured from "@/components/Home/Featured";
import Manage from "@/components/Home/Manage";
import FAQ from "@/components/Home/FAQ";
import Testimonial from "@/components/Home/Testimonials";
import Articles from "@/components/Home/Articles";
import Join from "@/components/Home/Joinus";
import Insta from "@/components/Home/Insta";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Desgy Solutions",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonial />
      <Articles />
      <Join />
      <Insta />
    </main>
  );
}
