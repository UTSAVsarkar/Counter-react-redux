import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../store";

const Controls = () => {
  const dipatch = useDispatch();
  const inputElement1 = useRef();
  const inputElemen2 = useRef();

  const handleIncrement = () => {
    dipatch(counterAction.increment());
  };

  const handleDecrement = () => {
    dipatch(counterAction.decrement());
  };

  const handleAdd = () => {
    dipatch(counterAction.add(inputElement1.current.value));
    inputElement1.current.value = "";
  };

  const handleSubtract = () => {
    dipatch(counterAction.subtract(inputElemen2.current.value));
    inputElemen2.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement1}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>

        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElemen2}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
