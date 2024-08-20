import { ContadorReducer } from "./componets/ContadorReducer";
import { Counter } from "./componets/Counter";
import { TimerPadre } from './componets/TimerPadre';
import { Usuario } from "./componets/Usuario";
import { Formulario } from './componets/Formulario';

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


        <hr />
        <br />
        <br />

        
        <Formulario />
      </>
    </>
  );
}

export default App;
