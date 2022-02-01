import React,{useState} from 'react';



    
const App=()=>{

    let time = new Date().toLocaleTimeString();
     
    const[cTime,setCtime]=useState(time);
    const change =()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(change,1000);
    return(
        <>
          <h1>{cTime}</h1>
        </>

    );
};

export default App;