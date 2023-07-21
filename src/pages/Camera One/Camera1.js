import React from "react";
import { cameraUrl } from "../../assets/Images";
import "./Camera1.css"
export function Camera1(){
    let components={
    color:'black',
    lens:"ultra camera lens",
    cameraFlash:"flash 1000",
    get flash(){return this.cameraFlash;},
    set colorOfCamera(color){this.color=color;}
    };
    function handleSubmit(e){
        e.preventDefault();
        let form=new FormData(e.currentTarget);
        let values=Object.fromEntries(form);
        components.colorOfCamera=values.color;
    }
    return (
        <>
        <img src={cameraUrl}/>
        <button id="flash"className="component" onClick={()=>{alert(components.flash)}}></button>
        <button id="lens" className="component" onClick={()=>{alert(components.lens)}}></button>
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">What Color Do You Want Your Camera To Be?</label>
            <input name="color" type="text"></input>
            <input type="submit"></input>
        </form>
        <button onClick={()=>{alert(components.color)}}>The Color of the camera</button>
        </>
    )
}