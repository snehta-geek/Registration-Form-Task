import React, { useState, useEffect } from 'react';

const Contact = () => {
    const getMode=()=>{
        return JSON.parse(localStorage.getItem("mode"))|| false;
    }
    const [dark,setMode]=useState(getMode());

   
    useEffect(()=>{
        localStorage.setItem("mode",JSON.stringify(dark))},[dark])
    return (
        <>
       <div className={dark ? "cont dark-mode" : "cont"}>
        <a href="/">Back</a>
        <label class="switch">
                        <input type="checkbox"
                        checked={dark}
                         onChange={()=>{
                            setMode(!dark)}} />
                        <span class="slider round"></span>
                    </label>
        <h1 className="brand">HiTech</h1>
        <div className="row">
        <div className="card border-success mb-3">
  <div className="card-header">Contact Us</div>
  <div className="card-body">
    <p className="card-text">123 Anywhere St.
Cityname, NY 11206
(91)9846217387
contact@hitech.org</p>
  </div>
</div>
<div className="card border-success mb-3">
  <div className="card-header">Follow Us</div>
  <div className="card-body">
    <p className="card-text">
<a href="/fb">Facebook</a><br/>
<a href="/t">Twitter</a><br/>
<a href="/i">Instagram</a><br/>
<a href="/m">Medium</a></p>
  </div>
</div>
        </div>
        </div>
        </>
    )
}
export default Contact ;