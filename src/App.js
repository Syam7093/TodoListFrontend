// import logo from './logo.svg';/
import React, { useState } from "react"
import './App.css';

function App() {
  const [input,setinput]=useState('')
  const [data,setdata]=useState([])
  
  
  const submitdata=()=>{
    setdata([...data,input])
  }

const some=[]

  const deldta=(value)=>{
    
    // for(let i=0;i<data.length;i++)
    // {
    //   if(data[i] !== value)
    //   {
    //     some.push(data[i])
    //   }
    // }
    // setdata(some)

  const fill=data.filter((item)=>{
    return item !== value
  })
  setdata(fill)
  }
  return (
    <div className="App">
     <div>
<input type="text" onChange={(e)=>{setinput(e.target.value)}}></input><button onClick={()=>{submitdata()}}>todo</button>
     </div>
     {data.map((e)=>{
      return <div>
        <h3>{e}</h3><button onClick={()=>{deldta(e)}} >delete</button>
      </div>
     })}
    </div>
  );
}

export default App;
