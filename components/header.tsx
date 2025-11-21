import Link from "next/link";
import Image from "next/image";

export default function Header() {

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md transition-transform duration-300 shadow-sm`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/sentia-logo.png" alt="Sentia" width={80} height={80} />
        </Link>

        <nav className="flex items-center gap-6 text-base font-medium">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/reviews" className="hover:text-gray-600 transition-colors">
            Reviews
          </Link>
          <Link href="/team" className="hover:text-gray-600 transition-colors">
            Team
          </Link>
        </nav>
      </div>
    </header>
  );
}
