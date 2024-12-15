"use client";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import HelpCenter from "@/components/HelpCenter";
import ContactUs from "@/components/ContactUs";
import Counter from "@/components/Counter";
import TrackPackage from "@/components/TrackPackage";
import Footer from "@/components/Footer";
import Herosection from "@/components/HeroSection";
import Pages from "@/components/Pages";
import Maps from "@/components/Maps";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <HelpCenter />
      <ContactUs />
      <Counter />
      <TrackPackage />
      <Pages />
      <Services />
      <Maps />
      <Testimonials />
      <Footer />
    </>
  )
}