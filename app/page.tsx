import Learn from "@/components/Home/Learn";
import Mission from "@/components/Home/Mission";
import Programs from "@/components/Home/Programs";
import Image from "next/image";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Mission />
      <Programs />
      <Learn />
      <Testimonials />
    </>
  );
}
