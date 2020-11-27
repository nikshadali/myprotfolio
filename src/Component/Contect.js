import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {GoLocation} from 'react-icons/go';
import {faPhoneAlt,faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import Btn from './Btn';
import './style.css';

function Contect(){
    return(
        <section className ="common box-shadow padding">
        <h3 className="section-title ">Get in Touch </h3>
        <div className="spacer"></div>
       <div className="row">
           
            <div className="col-md-4 ">
                <div className="contectinfo">
            <FontAwesomeIcon icon={faPhoneAlt} className ="icon-color mt-1"/>  
            <div className="detail ml-3"><h5 className>Phone</h5> <span>+923329991120</span></div>
            </div>
            <div className="contectinfo mt-5">
            <FontAwesomeIcon icon={faEnvelope} className ="icon-color mt-1"/>   
            <div className="detail ml-3"><h5>Email Adress</h5> <span>nikali92100@gmail.com</span></div>
            </div>

            <div className="contectinfo mt-5 mb-3">
          <GoLocation size="1.5em" className ="icon-color mt-1"/>
            <div className="detail ml-3"><h5>Location</h5> <span>Peshawer(Pakistan)</span></div>
            </div>
            </div>

            <div className="col-md-8">
            <form className="contect-form">
                <div className="row">
                    
                        <div className="col-md-6  mb-3 "><input type="text" name="name" className="form-control " placeholder="Your Name"></input></div>
                        <div className="col-md-6 mb-3"><input type="text" name="name" className="form-control " placeholder="Email Address"></input></div>
                   
               
            </div>
            <div className="row mb-3">
            <div className="col-md-12 "><input type="text" name="name" className="form-control " placeholder="Subject"></input></div>

            </div>
            <div className="row mb-3">
            <div className="col-md-12" ><textarea rows="5" className="form-control" placeholder="Message"></textarea></div>

            </div>
            <div className="row mb-3">
            <Btn Clsname="btn bfs text-white abtn btn-default btn-block" Name="Send" />

            </div>
            </form>
                    
            </div>
        </div>
        
    </section>


    );
}

export default Contect;