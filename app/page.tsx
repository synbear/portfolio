import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
