import React from 'react';
import './style.css';
import Btn from './Btn';
import {faCloud,faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Aboutme(){
    const nik =require('./img/nik.jpg')
    return(
        <section className ="common box-shadow padding">
        <h3 className="section-title ">Aboute Me</h3>
        <div className="spacer"></div>
      
        <div className="row">
            <div className="col-md-3"><img src={nik} alt="nikshad"className="nik-img"/></div>
            <div className="col-md-9">
                <h2 className="mb-4 pl-2">Hello,</h2>
                <p className="pl-2">I am Nikshad Ali, web developer from Pakistan(Peshawer), Asia.
                     I have rich experience in web site design and building and customization, also I am good at Html,Css Bootstrap Asp.net Mvc and many more</p>
            </div>
        </div>
        
          <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9 info">
                <div className="row">
                <div className="col-md-6 ">
                    <p className="pl-2">Name :<span className="text-dark">  Nikshad Ali</span></p>
                    <p className="pl-2">Brith :<span className="text-dark">  09-Nov-1982</span></p>
                </div>
                    <div className="col-md-6 ">
                    <p>Location :<span className="text-dark">  Nowshera (Pakistan)</span></p>
                    <p>Email :<span className="text-dark"> nikali92100@gmail.com</span></p>
                    </div>
                </div>
                <div className="row mt-3 pl-2">
                   <Btn Clsname="btn btn-default bfs text-white abtn" Name="CV Download" ficon={faCloud}/>
                   <Btn Clsname="btn btn-default bfs text-white abtn ml-3" Name="Contect me"  ficon={faEnvelope}/>
                </div>
                    
                </div>
        </div>
        

        

        </section>

    );
    
}

export default Aboutme;