import React from 'react'

const Button = ({onPressBtn}) => {
    return (
        <div className="grid grid-cols-4 gap-4 p-5">
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
    )
}

export default Button;