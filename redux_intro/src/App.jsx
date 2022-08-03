
import './App.css'
import { handleDec, handleInc } from './Redux/action';
import { store } from './Redux/store'
import { useDispatch, useSelector } from 'react-redux';

function App() {
//   const {dispatch} =store;
//  const{counter} = store.getState();
const counter = useSelector((store)=>store.counter);
const dispatch = useDispatch();

   console.log(counter)

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={()=> dispatch(handleInc())}>Inc</button>
      <button onClick={()=> dispatch(handleDec())}>Dec</button>
    </div>
  )
}

export default App
