import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 px-4 lg:px-60 pt-8 lg:pt-20 bg-emerald-900 text-white">
      <div className="flex flex-col items-center gap-4">
        <Image src="/assets/logo-xl.png" alt="Logo" width={412} height={61} />
        <p className="text-center text-base-300 font-light">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg font-bold">Social Links</p>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <Image src="/assets/facebook.png" alt="Facebook" width={40} height={40} />
          </li>
          <li className="cursor-pointer">
            <Image src="/assets/instagram.png" alt="Instagram" width={40} height={40} />
          </li>
          <li className="cursor-pointer">
            <Image src="/assets/twitter.png" alt="Twitter" width={40} height={40} />
          </li>
        </ul>
      </div>
      <hr className="w-full border-base-300/30" />
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 pb-8">
        <p className="text-base-300/60">Copyright © 2025 Keen Keeper. All rights reserved.</p>
        <div className="flex gap-4">
          <p className="cursor-pointer font-light text-base-300/60">Privacy Policy</p>
          <span>&bull;</span>
          <p className="cursor-pointer font-light text-base-300/60">Terms of Service</p>
          <span>&bull;</span>
          <p className="cursor-pointer font-light text-base-300/60">Cookies</p>
        </div>
      </div>
    </footer>
  );
}
