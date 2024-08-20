import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { decrement, incremet, reset, incrementByAmount } from '../features/counter/counterSlice';


export const Counter = () => {
  
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <h2>Counter: State </h2>

      <h3>Contador: {count}</h3>

      <button className="btn btn-primary mt-2" onClick={() => dispatch(incremet()) }>
        +1
      </button>

      <button className="btn btn-primary mt-2" onClick={() => dispatch(decrement())}>
        -1
      </button>

      <button
        className="btn btn-danger mt-2 ml-20 mr-20"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>

    <button
      className='btn btn-primary mt-2'
      onClick={() => dispatch(incrementByAmount(5))}
    >
       increment By Ammount
    </button>


    </div>
  );
};
