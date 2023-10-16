import clsx from "clsx";

type Custom = "signup" | "login";

interface ButtonProps {
  title: string;
  custom?: Custom;
}

let Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ title, custom }) => {
  return (
    <>
      <button
        className={clsx(``, {
          "rounded-full bg-slate-900 hover:bg-gray-800  font-medium text-white w-24 p-2":
            custom === "signup",
          "rounded-full bg-gray-400/20 hover:bg-gray-400/40 font-medium mr-3 w-24 p-2":
            custom === "login",
        })}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
