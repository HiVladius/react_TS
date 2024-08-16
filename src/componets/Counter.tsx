import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = (num: number = 1): void => {
    setCounter(counter + num);
  };

  const decrement = (num: number = 1): void => {
    setCounter(counter - num);

    if (counter === 0) {
      setCounter(0);
    }
  };

  return (
    <div className="mt-5">
      <h2>Counter: State </h2>

      <h3>Contador: {counter}</h3>

      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary mt-2" onClick={() => decrement()}>
        -1
      </button>

      <button
        className="btn btn-danger mt-2 ml-20 mr-20"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
};
