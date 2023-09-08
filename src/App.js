import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="text-center">
        <h1 className='bg-black text-white pt-5 text-xl'>Increment/Decrement counter</h1>
        <h4 className="bg-black text-white pb-5 text-2xl">using React and Redux</h4>
        <div className='bg-slate-400 p-8 h-[100vh]'>
          <button  className='h-10 w-10 bg-black text-white active:bg-slate-800 text-lg' title="Decrement" onClick={() => dispatch(decNumber(1))}><span>-</span></button>
          <input type="text" name="quantity" className='text-center h-10 text-lg'value={myState} />
          <button  className='h-10 w-10 bg-black text-white active:bg-slate-800 text-lg' title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;
