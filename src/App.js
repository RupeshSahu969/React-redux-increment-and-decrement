import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';


// import {COUNTER_DECREMENT,COUNTER_INCREMENT} from "./store/action.type"

import {add,substract,mul,div} from "./store/action"

function App() {

  
  const dispatch =useDispatch();

const count=useSelector((state) => state.count)


  return (
    <div className="App">
    
<h1>value : {count}</h1>
<div>
  <button onClick={() => dispatch(add(1))}>increment</button>
  <br/>
  <button onClick={() => dispatch(substract(1))}>decrement</button>
  <br/>
  <br/>
  <button onClick={() => dispatch(mul(1))}>X</button> &nbsp;&nbsp;
  <button onClick={() => dispatch(add(1))}>add</button> &nbsp;&nbsp;
  <button onClick={() => dispatch(add(1))}>multiply</button>
  <br/>
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  <button onClick={() => dispatch(substract(1))}>subtract</button>
  &nbsp;
  &nbsp;
  <button onClick={() => dispatch(add(1))}>divide</button>
</div>
    </div>
  );
}

export default App;
