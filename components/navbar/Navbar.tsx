import Link from "next/link";
import { RiHome3Line } from "react-icons/ri";

interface navItemsProps {
  path: string,
  text: string
}

const navItems : navItemsProps[] = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-3 m-2 rounded">
      <Link href={"/"} className="flex-1 flex gap-3 items-center"> 
        <RiHome3Line className="w-7 h-7"/>
        <span className="text-xl">Home </span>
      </Link>

      <div className="flex gap-4 text-xl">
        {
          navItems.map( items => 
              <Link href={items.path} key={items.path}>{items.text}</Link>   
          )
        }
      </div>
    </nav>
  );
};
