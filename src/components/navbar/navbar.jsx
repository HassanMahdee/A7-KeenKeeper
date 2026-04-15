"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { RiHome9Line } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdQueryStats } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const active = ["bg-emerald-900", "text-white"]
  return (
    <div className="navbar flex-col lg:flex-row bg-base-100 shadow-sm sticky top-0 z-50 px-4 lg:px-20">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold"><Image src="/assets/logo.png" alt="Logo" width={141} height={29} /></Link>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/" className={`flex items-center justify-center gap-1 ${pathname === "/" ? active.join(" ") : ""}`}><RiHome9Line /> Home</Link>
          </li>
          <li>
            <Link href="/timeline" className={`flex items-center justify-center gap-1 ${pathname === "/timeline" ? active.join(" ") : ""}`}><FaClockRotateLeft /> Timeline</Link>
          </li>
          <li>
            <Link href="/stats" className={`flex items-center justify-center gap-1 ${pathname === "/stats" ? active.join(" ") : ""}`}><MdQueryStats /> Stats</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
