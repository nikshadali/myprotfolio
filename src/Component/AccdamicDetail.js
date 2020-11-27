import React from 'react';
import data from './data';
import './style.css';

function AccdamicDetail(props){
   
    return(

 <section className ="common box-shadow padding">
        <h3 className="section-title ">Accdamic Detail </h3>
       <div className="row">
           
            <div className="col-md-12">
                <div className="timeline-container">

                <div className="timeline-item">
                    <div className="content-item">
                       <p> {data[0].degree}
                       <span className ="disc">{data[0].discription}</span>
                       </p>
                         <p>{data[0].school}</p>
                        <p>{data[0].year}</p>
                        <span className="circle"></span>
                        </div>

                </div>
                <div className="timeline-item">
                    <div className="content-item">
                    <p> {data[1].degree}
                       <span className ="disc">{data[1].discription}</span>
                       </p>
                         <p>{data[1].school}</p>
                        <p>{data[1].year}</p>
                        <span className="circle"></span>
                        </div>

                </div>
                <div className="timeline-item">
                    <div className="content-item">
                        <h4> {data[2].year}</h4>
                        <p>{data[2].degree}</p>
                        <p>{data[2].school}</p>

                        <span className="circle"></span>
                        </div>

                </div>
                <div className="timeline-item">
                    <div className="content-item">
                        <h4> {data[3].year}</h4>
                        <p>{data[3].degree}</p>
                        <p>{data[3].school}</p>

                        <span className="circle"></span>
                        </div>

                </div>
                </div>
                
                
              
            </div>
        </div>
        
    </section>
    );
}


export default AccdamicDetail;