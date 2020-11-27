import React from 'react';
import './style.css';

function Projects(){
    const cisco = require("./img/cisco.jpg")
    const wordpress = require("./img/wordpress.jpg")
    const freelance = require("./img/freelance.jpg")
    return(
        
<section className ="common box-shadow padding">
        <h3 className="section-title ">Projects </h3>
        <div className="spacer"></div>
       <div className="row">
           
            <div className="col-md-12 project">
                <ul>
                    <li className="list active" dataFilter="All">All Projects</li>
                    <li className="list" dataFilter="Salyani">Saylani</li>
                    <li className="list" dataFilter="Olx">Olx</li>
                    <li className="list" dataFilter="Common">Comon</li>
                </ul>
            </div>
            

            </div>
            <div className="row">
                <div className="Product">
                    <div className=" box-item All mb-2"> <div className="certificate"><img src={cisco} alt="freelance"/></div></div>
                    <div className=" box-item Salyani mb-2"> <div className="certificate"><img src={wordpress} alt="freelance"/></div></div>
                    <div className=" box-item Olx mb-2"> <div className="certificate"><img src={freelance} alt="freelance"/></div></div>
                    <div className=" box-item Common mb-2"> <div className="certificate"><img src={cisco} alt="freelance"/></div></div>
                    

                    

                    

                </div>
        </div>
        
    </section>

        

        
    );
}
export default Projects;