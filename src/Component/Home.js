import React from 'react'
import Liftbar from './Liftbar';
import Introduction from './Introduction';
import Aboutme from './Aboutme';
import Myskill from './Myskills';
import AccdamicDetail  from './AccdamicDetail';
import Certification from './Certification';
import Projects from './Projects';
import Contect from './Contect';

function Home(){
    return(
        <div className="App">
       
         <div className="container mt-5">
         
         <div className="row mt-5">
          <div className="col-md-4  pt-5 posf"> <Liftbar/></div>
         
          <div className="col-md-8 col-sm-12 posab"><Introduction Sclass="intro paralax mt-5" divClass="mx-auto intro-d"/></div>
        
        </div>
        
          <div className="row mt-5">
          <div className="col-md-4  pt-5"> </div>
          <div className="col-md-8 text-left"><Aboutme/></div>
          </div>
          
          <div className="row mt-5">
          <div className="col-md-4  pt-5"> </div>
          <div className="col-md-8 text-left"><Myskill Sclass="intro paralax mt-5" divClass="mx-auto intro-d"/></div>
          </div>
          <div className="row mt-5">
          <div className="col-md-4  pt-5"> </div>
          <div className="col-md-8 text-left"><Certification Sclass="intro paralax mt-5" divClass="mx-auto intro-d"/></div>
          </div>

          <div className="row mt-5">
          <div className="col-md-4  pt-5"> </div>
          <div className="col-md-8 text-left"><AccdamicDetail Sclass="intro paralax mt-5" divClass="mx-auto intro-d"/></div>
          </div>
        

          <div className="row mt-5">
          <div className="col-md-4  pt-5"> </div>
          <div className="col-md-8 text-left"><Projects Sclass="intro paralax mt-5" divClass="mx-auto intro-d"/></div>
         </div>
          <div className="row mt-5">
          <div className="col-md-4  pt-5"> </div>
          <div className="col-md-8 text-left"><Contect Sclass="intro paralax mt-5" divClass="mx-auto intro-d"/></div>
          </div>

          
          </div>

         
      
      
      
     
    </div>
    );
}
export default Home;