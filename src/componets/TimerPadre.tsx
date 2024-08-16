import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {

const [millisegundos, setMillisegundos] = useState(1000)

  return (
    <>
      <h3>useEffect y useRef</h3>

      <span> Milisegundos {millisegundos} </span>

      <hr />

      <button 
      className="btn btn-outline-success"
      onClick={() => setMillisegundos(1000)}
      >1000</button>

      <button 
      className="btn btn-outline-success"
      onClick={() => setMillisegundos(2000)}
      >2000</button>

<button 
      className="btn btn-outline-success"
      onClick={() => setMillisegundos(3000)}
      >3000</button>

      <Timer 
        milisegundos={millisegundos}      
      />
    </>
  );
};
