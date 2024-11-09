import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span className="flex-1 text-xl">Home</span>

      <div className="flex gap-4 text-xl">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/pricing">Princing</Link> 
      </div>
    </nav>
  );
};
