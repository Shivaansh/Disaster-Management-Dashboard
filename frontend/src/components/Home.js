import React from 'react';
import './../styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import io from 'socket.io-client';
const socket = io('http://localhost:3001');

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>DISASTER DIGEST</h1>
                <br/>
                <br/>
                <h2>Hello, welcome to the Disaster Dashboard!</h2>
                <p>This dashboard consists of 3 main pages:
                <br/>
                <br/>
                <span className="descList container">
                <ul class="list-inline d-flex justify-content-center">
                        <li class="list-inline-item text1">The <label className="inLine">Home</label> page, which is where you currently are.
                        This page gives you a brief description of the application.</li>
                        <li class="list-inline-item text2">The <label className="inLine">Live Feed</label> page, where you can see an AI-curated social 
                            media posts pertaining to certain disasters.</li>
                        <li class="list-inline-item text1">The <label className="inLine">Analytics</label> page, where you can see a breakdown of the
                            volume of social media posts across different disaster types and severity, in the form of a helpful table.</li>
                    </ul>
                <br/>
                <h3>Use the navbar at the top of the screen to navigate between
                    different pages
                </h3>
                </span>
                    
                </p>
            </div>
        );
    }
}

export default Home;