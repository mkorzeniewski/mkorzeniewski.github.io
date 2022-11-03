import "./Basics.css";
import React from "react";
import basics from "./basics.json"

function Basics() {

    const mail = {
        mail: basics.email,
        hrev: `mailto:${basics.email}`,
        icon: "/images/Mail.svg"
    }
    const linkedin = {
        hrev: basics.linkedin,
        icon: "/images/ln-white.svg"
    }
    const mainClass = "Basics"
    return (
        <div className={mainClass}>
            <div className="Basics--Header">
                <h1 className="Basics--FullName">{basics.name}</h1>
                <h4 className="Basics--Title">{basics.title}</h4>
            </div>
            <div className="Basics--Buttons">
            <a href={mail.hrev}>
                <button className="Basics--MailButton Basics--Button">
                    <img src={mail.icon}/>
                    <p>Email</p>
                </button>
            </a>
            <a href={linkedin.hrev}>
                <button className="Basics--LinkedinButton Basics--Button">
                    <img src={linkedin.icon}/>
                    <p>LinkedIn</p>
                </button>
            </a>
            </div>
        </div>
    );
}

export default Basics;
