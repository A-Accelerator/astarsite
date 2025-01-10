import Learn from "@/components/Home/Learn";
import Mission from "@/components/Home/Mission";
import Programs from "@/components/Home/Programs";
import Image from "next/image";
import Testimonials from "@/components/Home/Testimonials";
import Action from "@/components/Home/Action";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section Background */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-gray-100" /> */}

      {/* Mission Section */}
      <section className="relative z-10 py-12 bg-white">
        <Mission />
      </section>

      {/* Programs Section */}
      <section className="relative z-10 py-12 bg-gradient-to-r from-green-50 to-white">
        <Programs />
      </section>

      {/* Learn Section */}
      <section className="relative z-10 py-12 bg-gradient-to-b from-white via-gray-50 to-gray-200">
        <Learn />
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <Testimonials />
      </section>
      <section className="relative z-10 py-12 bg-white">
        <Action imagePath="/camp.svg" title="Join A* Accelerator!"/>
      </section>
    </main>
  );
}
