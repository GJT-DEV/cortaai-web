import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white gap-10 bg-[#032235] [background-image:linear-gradient(90deg,_rgba(255,255,255,0.05)_1px,_transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:45px_45px]">
      <Image src={"/logo.svg"} alt="" width={128} height={50} />
      <Loader2 className="h-12 w-12 animate-spin text-white" />
    </div>
  );
}
