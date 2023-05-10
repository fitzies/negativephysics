import Link from "next/link";
import Logo from "./Logo";

type props = {};

const Nav = (props: props) => {
  const items = ["Courses", "Account"];

  return (
    <div className="w-screen flex px-4 py-3 border-b border-shadow gap-3 justify-between">
      <Logo />
      <div className="flex gap-3">
        {items.map((item) => (
          <Link
            className="bg-shadow p-2 rounded-lg cursor-pointer hover:bg-primary duration-200"
            key={item}
            href={item.toLowerCase()}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
