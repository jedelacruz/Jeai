import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-[#121824]">
        <header className="h-[10vh] flex px-5 md:px-20 justify-between items-center fixed w-screen">
          <div className="flex gap-3">
          <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
          
          </div>
          <Link href={"/dashboard"}><Button className="pl-10 pr-10 py-5">Get Started</Button></Link>
        </header>

        <div className="h-screen flex justify-center items-center flex-col gap-4">
          <h1 className="text-center text-4xl md:text-7xl text-white font-semibold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">JEAI</span>, a free AI Tool<br></br>for Everyone</h1>
          <p className="text-slate-200 text-center">Revolutionize your tasks with my AI-powered website, delivering high quality text in seconds</p>
          <Link className="mt-3" href={"/dashboard"}><Button className="pl-10 pr-10 py-5">Get Started</Button></Link>
        </div>
    </div>
  );
}
