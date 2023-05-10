import Link from "next/link";

const Logo = () => {
  return (
    <Link
      className="flex justify-center items-center px-3 rounded-xl font-bold cursor-pointer"
      href="/"
    >
      —Physics
    </Link>
  );
};

export default Logo;
