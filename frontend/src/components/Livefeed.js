import React from 'react';
import './../styles/Livefeed.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import io from 'socket.io-client';
const socket = io('http://localhost:3001');

class Livefeed extends React.Component {

    constructor(props) {
        super(props);

        //initially showing everything
        this.state = {
            filters: [],
            low: true,
            medium: true,
            high: true,
            critical: true,
            fire: true,
            flood: true,
            power: true,
            medical: true
        }
    }

    //Possible improvements: 

    // flip visibility of posts of different categories / severity
    flipLow() {
        this.setState({ low: !this.state.low })
        if (!this.state.low) {
            var index = this.state.filters.indexOf("Low")
            this.state.filters.splice(index, 1) //remove one element at index index
        } else {
            this.state.filters.push("Low")
        }
    }
    flipMed() {
        this.setState({ medium: !this.state.medium })
        if (!this.state.medium) {
            var index = this.state.filters.indexOf("Medium")
            this.state.filters.splice(index, 1)
        } else {
            this.state.filters.push("Medium")
        }
    }
    flipHigh() {
        this.setState({ high: !this.state.high })
        if (!this.state.high) {
            var index = this.state.filters.indexOf("High")
            this.state.filters.splice(index, 1)
        } else {
            this.state.filters.push("High")
        }
    }
    flipCrit() {
        this.setState({ critical: !this.state.critical })
        if (!this.state.critical) {
            var index = this.state.filters.indexOf("Critical")
            this.state.filters.splice(index, 1)
        } else {
            this.state.filters.push("Critical")
        }
    }

    flipFire() {
        this.setState({ fire: !this.state.fire })
        if (!this.state.fire) {
            var index = this.state.filters.indexOf("Fire")
            this.state.filters.splice(index, 1)
        } else {
            this.state.filters.push("Fire")
        }
    }
    flipFlood() {
        this.setState({ flood: !this.state.flood })
        if (!this.state.flood) {
            var index = this.state.filters.indexOf("Flood")
            this.state.filters.splice(index, 1)
        } else {
            this.state.filters.push("Flood")
        }
    }
    flipPower() {
        this.setState({ power: !this.state.power })
        if (!this.state.power) {
            var index = this.state.filters.indexOf("Power")
            this.state.filters.splice(index, 1)
        } else {
            this.state.filters.push("Power")
        }
    }
    flipMedical() {
        this.setState({ medical: !this.state.medical })
        if (!this.state.medical) {
            var index = this.state.filters.indexOf("Medical")
            this.state.filters.splice(index, 1)
        } else {
            this.state.filters.push("Medical")
        }
    }

    render() {

        //Objs is list of posts which have type or severity NOT present in filters array
        var objs = this.props.posts.filter((word) => !(this.state.filters.includes(word.priority) || this.state.filters.includes(word.problem)))

        return (
            <div>
                <h1>LIVE FEED</h1>
                <p className="resultCount">Total Results: {objs.length} </p>
                <span>

                    <label className="marker">Problems</label>

                    {/* Checkboxes for types of disasters */}
                    <input type="checkbox" id="fireBox" checked={this.state.fire}
                        onChange={this.flipFire.bind(this)}
                    />
                    <label className="chkbox" for="fireBox">Fire</label>

                    <input type="checkbox" id="floodBox" checked={this.state.flood}
                        onChange={this.flipFlood.bind(this)}
                    />
                    <label className="chkbox" for="floodBox">Flood</label>

                    <input type="checkbox" id="powerBox" checked={this.state.power}
                        onChange={this.flipPower.bind(this)}
                    />
                    <label className="chkbox" for="powerBox">Power</label>

                    <input type="checkbox" id="medBox" checked={this.state.medical}
                        onChange={this.flipMedical.bind(this)}
                    />
                    <label className="chkbox" for="medBox">Medical</label>
                </span>

                <br />

                <span>
                    <label className="marker">Priorities</label>

                    {/* Checkboxes for different intensities of disasters */}
                    <input type="checkbox" id="priorityCritical" checked={this.state.critical}
                        onChange={this.flipCrit.bind(this)}
                    />
                    <label className="chkbox" for="priorityCritical">Critical</label>

                    <input type="checkbox" id="priorityHigh" checked={this.state.high}
                        onChange={this.flipHigh.bind(this)}
                    />
                    <label className="chkbox" for="priorityHigh">High</label>

                    <input type="checkbox" id="priorityMedium" checked={this.state.medium}
                        onChange={this.flipMed.bind(this)}
                    />
                    <label className="chkbox" for="priorityMedium">Medium</label>

                    <input type="checkbox" id="priorityLow" checked={this.state.low}
                        onChange={this.flipLow.bind(this)}
                    />
                    <label className="chkbox" for="priorityLow">Low</label>
                </span>

                <hr />

                {/* Format for a post*/}
                {objs.map(
                    ({ name, image, content, problem, priority, id }) =>
                        <div className="post" key={id}>

                            <label className="bigField">{content}</label>
                            <div className="form-group">
                                <img src={image} alt="{name}" class="float-left" /> <br />
                                <label className="nameField"> - {name}</label> <br />
                                <label className="field">Problem: </label> {problem} <br />
                                <label className="field">Priority: </label> {priority}
                            </div>
                            <br /> <br /> <hr className="postGap" />
                        </div>
                )}
            </div>
        );
    }
}

export default Livefeed;