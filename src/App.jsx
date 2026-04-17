import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  
      function codeGenerator() { 
            const lengthInput = Number(input);
            const length = parseInt(lengthInput);
            
    const char = "abcdefghijklmnopqrstuvwxyz"
    const num = "1234567798698567499"
let ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const spe = "!@#$%^&*()_+=-{}[]|?>,>~``"
    let available = "";
    if(upper){
        available += ba
    }
     if(lower){
        available += char
    }
     if(symbol){
        available += spe
    }
     if(number){
        available += num
    }
    let result= ""
    for (let k = 0; k < length; k++ ) {
      
const lom = Math.floor(Math.random() * available.length);

        result += available.charAt(lom);

        
    }
     setCount(result)
  

     
}
    const [count, setCount] = useState("")
     const [input, setInput] = useState("")
      const [upper, setUpper] = useState(true)
       const [lower, setLower] = useState(true)
        const [number, setNumber] = useState(true)
         const [symbol, setSymbol] = useState(true)


  return (
    <>
  
    <div className="main-container">
        <div className="form-container">
            <h3>Password Generator</h3>
            <div className="little-container">
             <div id="empty" >{count}</div>
                <button type="btn" id="button" className="btn">COPY</button>
            </div>
            <div className="length">
                <h4> Password Length</h4>
                <input type="text"  value = {input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <div className="upper">
                <h4> Add UpperCase Letters</h4>
                <input type="checkbox" value={upper} onChange={(s) => setUpper(s.target.value)} />
            </div>
            <div className="lower">
                <h4> Add LowerCase Letters</h4>
                <input type="checkbox" value={lower} onChange={(u) => setLower(u.target.value)} />
            </div>
            <div className="number">
                <h4> Include  The  Numbers</h4>
                <input type="checkbox" value={number} onChange={(m) => setNumber(m.target.value)}/>
            </div>
            <div className="symbol">
                <h4> Add the SpecialChracter</h4>
                <input type="checkbox" value={symbol} onChange={(g) => setSymbol(g.target.value)} />
            </div>
            <div className="gen">
                <button type="button" className="btm"  onClick={() => codeGenerator()} >Generate Password</button>
            </div>
        </div>
    </div>
       
    </>
  );
}


export default App
