import "./Experiences.css";
import React from "react";
import experiences from "./experience.json"

function Experiences() {
    return (
        <div>
            {experiences.map(e => Experience(e.position, e.company, e.highlights, e.startDate, e.endDate))}
        </div>
    )
}

function Experience(position: String, company: String, highlights: String[], startDate: String, endDate: String) {
    return (
        <div>
            <div className={Experience.name +"--Header"}>
                <h1>{company}</h1>
                <p>{startDate} - {endDate}</p>
            </div>
            <div>
                {Highlights(highlights)}
            </div>
        </div>
    )

}

function Highlights(highlights: String[]) {
    return (
        <ul>
            {highlights.map(h => (
                <li>{h}</li>
            ))}
        </ul>
    )
}

export default Experiences;
