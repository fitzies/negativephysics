type props = {
  text: string;
  onClick?: () => any;
};

const Button = (props: props) => {
  return (
    <div
      className="bg-shadow p-2 rounded-lg cursor-pointer hover:bg-primary duration-200 flex"
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
};

export default Button;
