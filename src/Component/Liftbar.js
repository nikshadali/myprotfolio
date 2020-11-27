import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers,faCogs,faCertificate,faGraduationCap,faLaptopCode,faTasks,faPhone, } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
function Liftbar() {
    let nik = require("./img/nik.jpg")
    return(
        <div className="leftbar">
            <img src={nik} alt="Nikshad"/>
            <h3 className="title">NIKSHAD ALI</h3>
            <p className="title_p">WEB AND MOBILE HYBRID APP DEVELOPER</p>

            <nav className="nav ">
                <ul>
                    <li>
                    <Link className="text-white nav-link"> <FontAwesomeIcon icon={faHome} className ="mr-3"/>Home</Link>
                    </li>
                    
                    <li>
                    <Link className="text-white nav-link"> <FontAwesomeIcon icon={faUsers} className ="mr-3"/>About me</Link>
                    </li>
                   
                    <li>
                    <Link className="text-white nav-link"> <FontAwesomeIcon icon={faCogs} className ="mr-3"/>Skills</Link>
                    </li>
                    <li>
                    <Link className="text-white nav-link"> <FontAwesomeIcon icon={faCertificate} className ="mr-3"/>Cetification</Link>
                    </li>
                    
                    <li>
                    <Link className="text-white nav-link"> <FontAwesomeIcon icon={faGraduationCap} className ="mr-3"/>Acdamic Detail</Link>
                    </li>
                    <li>
                    <Link className="text-white nav-link"> <FontAwesomeIcon icon={faLaptopCode} className ="mr-3"/>Experience Detail</Link>
                    </li>
                    <li>
                    <Link className="text-white nav-link"> <FontAwesomeIcon icon={faTasks} className ="mr-3"/>Project Work</Link>
                    </li>
                    <li>
                    <Link className="text-white nav-link"> <FontAwesomeIcon icon={faPhone} className ="mr-3"/>Contect me</Link>
                    </li>
                   
                </ul>
               
            </nav>

        </div>
    );
}
export default Liftbar;