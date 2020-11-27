import React from 'react';
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Btn(props){
    console.log(props.ficon)
    return(
        <a  href="#about" className={props.Clsname}><FontAwesomeIcon icon={props.ficon} className="mr-2"/>{props.Name}</a>

    );
}
export default Btn;