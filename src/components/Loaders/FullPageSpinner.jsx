import Spinner from "./Spinner";

const FullPageSpinner = () => (
  <div className="absolute inset-0 grid place-items-center text-accent1 bg-white z-10">
    <Spinner />
  </div>
);

export default FullPageSpinner;
