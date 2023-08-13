import { useState } from 'react';
import './App.css';

function App() {

  const [cal, setCal] = useState([]);
  // const [valueC, setValueC] = useState([]);
  const [valueC, setValueC] = useState();
  const calOper = ['C','=','/','-','+','x'];

  const onPressBtn = e => {
    if(calOper.includes(e?.target?.value?.toString())){
      // setValueC(prev => [...prev, e?.target?.value])
      setValueC(e?.target?.value)
      // setCal(prev => [...prev, e?.target?.value?.toString()]);
      console.log('operator pressed');
      if(e?.target?.value?.toString() === '='){
        let toCalculate = cal.join("").split("+");
        toCalculate = toCalculate.reduce((a,b)=>+a+ +b,0);
        console.log('toCalculate', toCalculate);
      }
      else if(e?.target?.value?.toString() === '+'){
        setCal(prev => [...prev, e?.target?.value?.toString()]);
      }
    } else {
      // setValueC(prev => [...prev, e?.target?.value.toString()])
      setValueC(e?.target?.value)
      setCal(prev => [...prev, e?.target?.value?.toString()]);
    }
    console.log('cal',cal);
  }
  
  return (
    <div>
      <div className="w-[50%] bg-slate-500 m-auto h-screen flex flex-col gap-2 p-5">
        <div className="bg-cyan-300 h-[80px] w-full rounded-full relative">
        <input type='number' value={valueC} className="bg-slate-200 h-[80%] w-[97%] rounded-full m-2 outline-0 p-3" onChange={ e => setValueC(e?.target?.value)}/>
        </div>
        <div className="bg-cyan-300 h-[90%] w-full rounded place-content-center">
            <div className="grid grid-cols-4 gap-4 p-2">
              <button onClick={onPressBtn} value={1} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">1</button>
              <button onClick={onPressBtn} value={2} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">2</button>
              <button onClick={onPressBtn} value={3} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">3</button>
              <button onClick={onPressBtn} value={'+'} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">+</button>
              <button onClick={onPressBtn} value={4} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">4</button>
              <button onClick={onPressBtn} value={5} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">5</button>
              <button onClick={onPressBtn} value={6} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">6</button>
              <button onClick={onPressBtn} value={'-'} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">-</button>
              <button onClick={onPressBtn} value={7} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">7</button>
              <button onClick={onPressBtn} value={8} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">8</button>
              <button onClick={onPressBtn} value={9} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">9</button>
              <button onClick={onPressBtn} value={'/'} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">/</button>
              <button onClick={onPressBtn} value={'0'} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">0</button>
              <button onClick={onPressBtn} value={'='} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">=</button>
              <button onClick={onPressBtn} value={'x'} className="bg-orange-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">x</button>
              <button onClick={onPressBtn} value={'C'} className="bg-red-400 p-5 text-center rounded hover:scale-105 ease-in-out duration-300 text-lg font-bold">C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
