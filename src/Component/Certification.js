import React from 'react';
import './style.css';

function Certification(props){
    const cisco = require("./img/cisco.jpg")
    const wordpress = require("./img/wordpress.jpg")
    const freelance = require("./img/freelance.jpg")
    return(
        <section className ="common box-shadow padding">
        <h3 className="section-title ">Certifications</h3>
        <div className="spacer"></div>

        <div className="row">
            <div className="col-md-6">
                <div className="certificate"> <img src={wordpress} alt="cisco"/></div>
               

            </div>
            <div className="col-md-6">
                <div className="certificate"> <img src={freelance} alt="wordpress"/></div>
               
</div>
            </div>
           <div className="row">  
              <div className="col-md-4">
                <div className="certificate mt-2"> <img src={cisco} alt="freelance"/></div>
          
               

            </div>
        </div>
        

        

        </section>
    );
}

export default Certification;