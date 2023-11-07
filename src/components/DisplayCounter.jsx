import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">
        Counter Currer Value "<b>{counterVal}</b>"
      </p>
    </div>
  );
};

export default DisplayCounter;
