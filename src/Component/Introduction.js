import React from 'react';
import './style.css';

function Introduction(props){
    console.log(props)
    return(
        <section className={props.Sclass}>
             <div className ={props.divClass}>
                 <div className ="row">
                     <div className="col-md-12">

                
                 <h1 className="pb-2 ">I'M NIKSHAD ALI</h1>
                 <p>Skilled and motivated Computer science student looking for a challenging role in a reputable organization to utilize
                     my technical, database, programming, Teaching and management skills Graphic Designing 
                     for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.
                      As well as teaching sector</p>
                      </div>
                      </div>
                      </div>
           
           
          <div className="overlay"></div>

        </section>
    );
}

export default Introduction;