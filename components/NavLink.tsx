import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-600 hover:after:w-full after:transition-all after:duration-700 after:ease-in-out"
    >
      {children}
    </Link>
  );
};

export default NavLink;
