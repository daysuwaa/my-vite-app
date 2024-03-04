import { twMerge } from "tailwind-merge";

const Spinner = ({ className = "", ...props }) => (
  <i
    className={twMerge(
      "block w-6 h-6 border-2 border-transparent border-t-current rounded-full animate-spin",
      className
    )}
    {...props}
  />
);

export default Spinner;
