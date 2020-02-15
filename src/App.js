import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {increment} from './actions';
import {decrement} from './actions';


function App() {
  const counter = useSelector(state => state.myCount);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable info not to see if not logged in</h3> : 'NOT logged in'}
      
    </div>
  );
}

export default App;
