import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./Footer/Footer";
import Basics from "./Basics/Basics";
import Experiences from "./Experiences/Experiences";

function App() {
    return (
        <div className="App">
            <main className="App--main">
                <div className= "App--my-photo">
                    <img src="/images/img-small.jpg"/>
                </div>
                <Basics />
                {/*<div className="Experiences">*/}
                {/*    <h1 className="Experiences--title">My experience</h1>*/}
                {/*    <Experiences />*/}
                {/*</div>*/}
                <div className="placeholder">

                </div>
                <Footer />
            </main>
        </div>
    );
}

export default App;
