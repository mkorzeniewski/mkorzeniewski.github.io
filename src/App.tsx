import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <main className="App--main">
                <div className= "App--my-photo">
                    <img src="/images/my-photo.png"/>
                </div>
                <div>
                    <h1 className="full-name">Michał Korzeniewski</h1>
                    <h4 className="subtitle">Software Engineer</h4>
                </div>
                <a href="mailto:me@mkorzeniewski.com"><button className="mail-button">
                    <img src="/images/Mail.svg"/>
                    <p>Email</p>
                </button></a>
                <div>

                </div>
                <Footer />
            </main>
        </div>
    );
}

export default App;
