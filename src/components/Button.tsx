import Link from "next/link";

type props = {
  text: string;
  onClick?: () => any;
  type?: "solid" | "hollow";
  link?: string;
};

const Button = (props: props) => {
  if (props.type === "hollow" && !props.link) {
    return (
      <div
        className="border-2 border-shadow p-2 rounded-lg cursor-pointer hover:bg-primary duration-200 flex justify-center"
        onClick={props.onClick}
      >
        {props.text}
      </div>
    );
  }

  if (props.type === "hollow" && props.link) {
    return (
      <Link
        href={props.link}
        className="border-2 border-shadow p-2 rounded-lg cursor-pointer hover:bg-primary duration-200 flex justify-center"
        onClick={props.onClick}
      >
        {props.text}
      </Link>
    );
  }

  if ((props.type === "solid" || !props.type) && props.link) {
    return (
      <Link
        href={props.link}
        className="bg-shadow p-2 rounded-lg cursor-pointer hover:bg-primary duration-200 flex justify-center"
        onClick={props.onClick}
      >
        {props.text}
      </Link>
    );
  }

  return (
    <div
      className="bg-shadow p-2 rounded-lg cursor-pointer hover:bg-primary duration-200 flex justify-center"
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
};

export default Button;
