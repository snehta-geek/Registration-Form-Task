import React, { useState, useEffect } from 'react';

const HomePg = () => {
    const getMode=()=>{
    return JSON.parse(localStorage.getItem("mode"))|| false;
}
const [dark,setMode]=useState(getMode());

   
    useEffect(()=>{
        localStorage.setItem("mode",JSON.stringify(dark))},[dark])
    return (
        <>
        <div className={dark ? "cont dark-mode" : "cont"}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">HiTech</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="/registration">Sign Up<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    
       
        <label class="switch">
                        <input type="checkbox"
                        checked={dark}
                         onChange={()=>{
                            setMode(!dark)}} />
                        <span class="slider round"></span>
                    </label>
                </div>
            </nav>

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="1.jpg" width="1500" height="500" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to HiTech</h2>
                            <p>Technology News,Development</p>
                            <button className="btn btn-success">Technology</button>
                            <button className="btn btn-primary">Web Development</button>
                            <button className="btn btn-danger">Tech Fun</button>
                        </div>
                    </div>
                </div>
            </div>

</div>
        </>
    )
}

export default HomePg;