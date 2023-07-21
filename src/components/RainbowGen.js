import React,{useEffect,useState} from "react";
export function RainbowGen(props){
    let colors=['red','green','blue','yellow'];
    let [wordColor,setColor]=useState('purple');
    useEffect(()=>{
        let colorInterval=setInterval(()=>{setColor(colors[Math.floor(Math.random()*colors.length)]);},100);
        return ()=>colorInterval;
    },[])
    return (
        <h1 style={{color:wordColor}}>{props.words}</h1>
    );
}