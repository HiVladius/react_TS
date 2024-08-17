import { ContadorReducer } from "./componets/ContadorReducer";
import { Counter } from "./componets/Counter";
import { TimerPadre } from './componets/TimerPadre';
import { Usuario } from "./componets/Usuario";

function App() {
  return (
    <>
      <>
        <h1>Proyecto React + TS</h1>
        <hr />
        <Counter />

        

        <Usuario />
        <hr />


        <TimerPadre />

        <hr />

        <ContadorReducer />
      </>
    </>
  );
}

export default App;
