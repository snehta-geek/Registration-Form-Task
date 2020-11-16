import React, { useState, useEffect } from "react";
import axios from "axios";
const Registration = () => {
    const getMode=()=>{
        return JSON.parse(localStorage.getItem("mode"))|| false;
    }
    const [userName,setUserName]=useState("");
    const [userEmail,setUserEmail]=useState("");
    const [userNum,setUserNum]=useState();
    const [userPwd,setUserPwd]=useState("");
    const [dark,setMode]=useState(getMode());

   
    useEffect(()=>{
        localStorage.setItem("mode",JSON.stringify(dark))},[dark])
   

const submit =() => {
    axios.post("http://localhost:7005/reg",
    {Name:userName,Email:userEmail,MobileNo:userNum,Password:userPwd}).then((res)=>{
        console.log(res)
    });
};
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
            <div className="cont">
            <h1 className="brand">HiTech</h1>
            <div className="register-container">
                <h2>Registration Form</h2>
                <form>
                    <h6>Name</h6>
                    <input type="text" onChange={(e) =>{
                        setUserName(e.target.value);
                    }} />
                    <h6>E-mail</h6>
                    <input type="email" onChange={(e) =>{
                        setUserEmail(e.target.value);
                    }} />
                    <h6>Mobile Number</h6>
                    <input type="Number" onChange={(e) =>{
                        setUserNum(e.target.value);
                    }}/>
                    <h6>Password</h6>
                    <input type="password" onChange={(e) =>{
                        setUserPwd(e.target.value);
                    }}/>
                    <button className="btn-login" onClick={submit}>Register</button>
                </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Registration;
