import Learn from "@/components/Home/Learn";
import Mission from "@/components/Home/Mission";
import Programs from "@/components/Home/Programs";
import Image from "next/image";
import Testimonials from "@/components/Home/Testimonials";
import Action from "@/components/Home/Action";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section Background */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-gray-100" /> */}

      {/* Mission Section */}
      <section className="relative z-10 bg-white">
        <Mission />
      </section>

      {/* Programs Section */}
      <section className="relative z-10 py-12">
        <Programs />
      </section>

      {/* Learn Section */}
      <section className="relative z-10 py-12">
        <Learn />
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-12">
        <Testimonials />
      </section>
      <section className="relative z-10 py-12 bg-white">
        <Action imagePath="/accelerate.webp" title="Join A* Accelerator!"/>
      </section>
    </main>
  );
}
