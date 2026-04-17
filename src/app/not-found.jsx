import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        <span className="text-emerald-900 font-black text-6xl">404</span> - Page Not Found
      </h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link href="/" className="btn bg-emerald-900 text-white mt-4">
        Go back home
      </Link>
    </div>
  );
}
