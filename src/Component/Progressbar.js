import React from 'react';


import './style.css';

function Progressbar(props){
    return(
        <div className="progress">
            
            <div className = "progressbar" style ={{width:props.Clswidth }}>
    {props.Clswidth}

            </div>
        </div>

    );
}

export default Progressbar;