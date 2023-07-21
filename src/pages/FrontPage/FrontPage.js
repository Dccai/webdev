import React, {useState} from 'react';
import './FrontPage.css';
import { cameraUrl, imageUrl } from '../../assets/Images';
import { RainbowGen } from '../../components/RainbowGen';
export function FrontPage (){
    let imageUr=imageUrl;
    let cameraUr=cameraUrl;
    let listColor=['red','blue','green'];
    let [number,setNumber]=useState(0);
   function handleClick(){
    setNumber(a=>a+1);
   }
return (
    <>
    <h1 id="title">Website To Buy Cameras</h1>
    <div>
        <img width="200px" src={imageUr}/>
        <RainbowGen words="Picture of a Camera"/>
    </div>
    <section>
        <h2>The expensive camera</h2>
        <img src={cameraUr}/>
        <p>This camera is very good</p>
    </section>
    <input type="button" onClick={handleClick}></input>
    <label>Number Cameras You Want to Buy: {number} <br/> Price: ${number*300} </label>
    
    </>
);
}