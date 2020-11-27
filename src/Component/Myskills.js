import React from 'react';
import Progressbar from './Progressbar';

function Myskill(){
    return(
        <section className ="common box-shadow padding">
        <h3 className="section-title ">My Skills </h3>
        <div className="spacer"></div>
      
        <div className="row">
           
            <div className="col-md-12">
                
                <p className="pl-2">Skilled and motivated Computer science student looking for a challenging role in a reputable
                 organization to utilize my technical programming skills to enhance my knowledge about new and emerging trends in the IT sector.</p>
            </div>
        </div>
        
          <div className="row">
               
                <div className="col-md-6 info">
                    <h6 className="pl-1">REACT JS & REACT NATIVE</h6>
                    <Progressbar Clswidth="75%"/>
               
                    <h6 className="pl-1 mt-5 ">NODE JS</h6>
                    <Progressbar Clswidth="70%"/>
                </div>
                <div className="col-md-6 info">
                    <h6 className="pl-1 ">JAVASCRIPT</h6>
                    <Progressbar Clswidth="85%"/>
               
                    <h6 className="pl-1 mt-5 ">MONGO DB</h6>
                    <Progressbar Clswidth="75%"/>
                </div>
                <div className="col-md-6 info">
                    <h6 className="pl-1 mt-5">HTML</h6>
                    <Progressbar Clswidth="95%"/>
               </div>
               <div className="col-md-6 info">
                    <h6 className="pl-1 mt-5">CSS & BOOTSTRAP</h6>
                    <Progressbar Clswidth="90%"/>
                </div>
                
        </div>
        

        

        </section>

    );
}

export default Myskill;