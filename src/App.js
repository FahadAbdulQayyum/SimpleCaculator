import { useState } from 'react';
import './App.css';
import Button from './button';

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
      <div className="w-[50%] bg-gradient-to-b from-zinc-500 m-auto h-screen flex flex-col gap-2 p-5">
        <div className="bg-gradient-to-r from-zinc-300 to-blue-500 h-[80px] w-full rounded-xl relative">
        <input type='number' disabled value={+toCalculate>0 ? toCalculate.toString() : valueC.join("")} className="bg-slate-200 h-[80%] w-[97%] rounded-xl m-2 outline-0 p-3 text-4xl" />
        </div>
        <div className="bg-zinc-300 h-[90%] w-full rounded place-content-center">
          <Button onPressBtn={onPressBtn}/>
        </div>
      </div>
    </div>
  );
}

export default App;
