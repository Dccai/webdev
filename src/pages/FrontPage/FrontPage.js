import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
        <img className='camera'width="200px" src={imageUr}/>
        <RainbowGen words="Picture of a Camera"/>
    </div>
    <section>
        <RainbowGen words="List of Cameras"/>
        <ul>
            <li>Camera 1000</li>
            <li>Flying Camera</li>
            <li>Super Smart Camera</li>
        </ul>
    </section>
    <section>
        <h2>The expensive camera</h2>
        <Link to="/Camera1"><img className='camera' src={cameraUr}/></Link>
        <p>This camera is very good</p>
    </section>
    <br/>
    <input type="button" onClick={handleClick}></input>
    <label>Number Cameras You Want to Buy: {number} <br/> Price: ${number*300} </label>
    
    </>
);
}