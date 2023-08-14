import { useState } from 'react';
import './App.css';

function App() {

  const [cal, setCal] = useState([]);
  const [valueC, setValueC] = useState([]);
  const [toCalculate, setToCalculate] = useState(0)

  const calOper = ['C','=','/','-','+','x'];
  
  const onPressBtn = e => {
    if(calOper.includes(e?.target?.value?.toString())){
      setValueC([])
      console.log('if1')
      if(calOper.includes(cal[cal.length-1])){
        console.log('Operator already pressed');
      }
      else if(e?.target?.value?.toString() === '='){
        let incl = cal.filter(v=>!(Number(v)==v))
        if(incl[0] === '+'){
          let toCalculateD = cal.join("").split("+");
          toCalculateD = toCalculateD.reduce((a,b)=>+a + +b,0);
          setToCalculate(toCalculateD);
        }
        else if (incl[0] === '-'){
          let seeBefore = cal.slice(0,cal.indexOf('-'))
          let seeAfter = cal.slice(cal.indexOf('-',))
          let Subs = +seeAfter.join("") + +seeBefore.join("");
          setToCalculate(Subs);
        }
        else if (incl[0] === '/'){
          let seeBefore = cal.slice(0,cal.indexOf('/'))
          let seeAfter = cal.slice(cal.indexOf('/',)+1)
          let divs =  +seeBefore.join("") / +seeAfter.join("");
          setToCalculate(divs);
        }
        else if (incl[0] === 'x'){
          let seeBefore = cal.slice(0,cal.indexOf('x'))
          let seeAfter = cal.slice(cal.indexOf('x',)+1)
          let mult =  +seeBefore.join("") * +seeAfter.join("");
          setToCalculate(mult);
        }
      }
      else if(e?.target?.value?.toString() === '+' || e?.target?.value?.toString() === '-'|| e?.target?.value?.toString() === '/'|| e?.target?.value?.toString() === 'x'){
      setCal(prev => [...prev, e?.target?.value?.toString()]);
      }
      else if(e?.target?.value?.toString() === 'C'){
        setCal([])
        setValueC([])
        setToCalculate([])
      }
    } else {
      setValueC(prev => [...prev, e?.target?.value?.toString()])
      setCal(prev => [...prev, e?.target?.value?.toString()]);
    }
  }
  
  return (
    <div>
      {/* <div className="w-[50%] bg-slate-500 m-auto h-screen flex flex-col gap-2 p-5"> */}
      <div className="w-[50%] bg-gradient-to-b from-zinc-500 m-auto h-screen flex flex-col gap-2 p-5">
        {/* <div className="bg-cyan-300 h-[80px] w-full rounded-full relative"> */}
        {/* <div className="bg-gradient-to-r from-zinc-300 to-blue-500 h-[80px] w-full rounded-full relative"> */}
        <div className="bg-gradient-to-r from-zinc-300 to-blue-500 h-[80px] w-full rounded-xl relative">
        {/* <input type='number' disabled value={+toCalculate>0 ? toCalculate.toString() : valueC.join("")} className="bg-slate-200 h-[80%] w-[97%] rounded-full m-2 outline-0 p-3" /> */}
        <input type='number' disabled value={+toCalculate>0 ? toCalculate.toString() : valueC.join("")} className="bg-slate-200 h-[80%] w-[97%] rounded-xl m-2 outline-0 p-3 text-4xl" />
        </div>
        {/* <div className="bg-cyan-300 h-[90%] w-full rounded place-content-center"> */}
        <div className="bg-zinc-300 h-[90%] w-full rounded place-content-center">
            <div className="grid grid-cols-4 gap-4 p-5">
              {/* <button onClick={onPressBtn} value={1} className="bg-orange-400 p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-lg font-bold">1</button> */}
              <button onClick={onPressBtn} value={1} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">1</button>
              <button onClick={onPressBtn} value={2} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">2</button>
              <button onClick={onPressBtn} value={3} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">3</button>
              <button onClick={onPressBtn} value={'+'} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl">+</button>
              <button onClick={onPressBtn} value={4} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">4</button>
              <button onClick={onPressBtn} value={5} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">5</button>
              <button onClick={onPressBtn} value={6} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">6</button>
              <button onClick={onPressBtn} value={'-'} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl">-</button>
              <button onClick={onPressBtn} value={7} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">7</button>
              <button onClick={onPressBtn} value={8} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">8</button>
              <button onClick={onPressBtn} value={9} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">9</button>
              <button onClick={onPressBtn} value={'/'} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl">/</button>
              <button onClick={onPressBtn} value={'0'} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl text-white">0</button>
              <button onClick={onPressBtn} value={'='} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl">=</button>
              <button onClick={onPressBtn} value={'x'} className="bg-gradient-to-r from-teal-500 to-blue-400 shadow drop-shadow-xl p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-4xl">x</button>
              <button onClick={onPressBtn} value={'C'} className="bg-red-400 p-5 text-center rounded active:scale-110 ease-in-out duration-300 text-lg font-bold">C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
