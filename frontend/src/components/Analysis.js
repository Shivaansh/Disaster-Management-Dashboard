import React from 'react';
import './../styles/Analysis.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import io from 'socket.io-client';
const socket = io('http://localhost:3001');

class Analysis extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // Count number of posts of each type by filtering array of posts

        //Possible improvement: could use an array to keep track of these instead of 16 different variables
        //Could use loops to filter out priorities and problems
        //Tradeoff: readability affected. Arrays might be slower to update than individual variables. 
        var lowFire = this.props.posts.filter(x => x.priority === "Low" && x.problem === "Fire").length
        var lowFlood = this.props.posts.filter(x => x.priority === "Low" && x.problem === "Flood").length
        var lowPower = this.props.posts.filter(x => x.priority === "Low" && x.problem === "Power").length
        var lowMedical = this.props.posts.filter(x => x.priority === "Low" && x.problem === "Medical").length
        var lowTotal = (lowFire + lowFlood + lowPower + lowMedical)

        var mediumFire = this.props.posts.filter(x => x.priority === "Medium" && x.problem === "Fire").length
        var mediumFlood = this.props.posts.filter(x => x.priority === "Medium" && x.problem === "Flood").length
        var mediumPower = this.props.posts.filter(x => x.priority === "Medium" && x.problem === "Power").length
        var mediumMedical = this.props.posts.filter(x => x.priority === "Medium" && x.problem === "Medical").length
        var mediumTotal = (mediumFire + mediumFlood + mediumPower + mediumMedical)

        var highFire = this.props.posts.filter(x => x.priority === "High" && x.problem === "Fire").length
        var highFlood = this.props.posts.filter(x => x.priority === "High" && x.problem === "Flood").length
        var highPower = this.props.posts.filter(x => x.priority === "High" && x.problem === "Power").length
        var highMedical = this.props.posts.filter(x => x.priority === "High" && x.problem === "Medical").length
        var highTotal = (highFire + highFlood + highPower + highMedical)

        var criticalFire = this.props.posts.filter(x => x.priority === "Critical" && x.problem === "Fire").length
        var criticalFlood = this.props.posts.filter(x => x.priority === "Critical" && x.problem === "Flood").length
        var criticalPower = this.props.posts.filter(x => x.priority === "Critical" && x.problem === "Power").length
        var criticalMedical = this.props.posts.filter(x => x.priority === "Critical" && x.problem === "Medical").length
        var criticalTotal = (criticalFire + criticalFlood + criticalPower + criticalMedical)

        var FireTotal = (lowFire + mediumFire + highFire + criticalFire)
        var FloodTotal = (lowFlood + mediumFlood + highFlood + criticalFlood)
        var PowerTotal = (lowPower + mediumPower + highPower + criticalPower)
        var MedicalTotal = (lowMedical + mediumMedical + highMedical + criticalMedical)
        var total = (FireTotal + FloodTotal + MedicalTotal + PowerTotal)

        return (
            <div>
                <h1>ANALYTICS</h1>
                <br/>
                <h6>Here you can see the breakdown of the number of tweets,
                    their problem categories and priority.
                </h6>
                <table>
                    {/* Header Row */}
                    <tr>
                        <th></th>
                        <th>Fire</th>
                        <th>Flood</th>
                        <th>Power</th>
                        <th>Medical</th>
                        <th className="total">Total</th>
                    </tr>
                    {/* Data Rows */}
                    <tr>
                        <td>Low Priority</td>
                        <td>{lowFire}</td>
                        <td>{lowFlood}</td>
                        <td>{lowPower}</td>
                        <td>{lowMedical}</td>
                        <td className="total">{lowTotal}</td>
                    </tr>
                    <tr>
                    <td>Medium Priority</td>
                        <td>{mediumFire}</td>
                        <td>{mediumFlood}</td>
                        <td>{mediumPower}</td>
                        <td>{mediumMedical}</td>
                        <td className="total">{mediumTotal}</td>
                    </tr>
                    <tr>
                    <td>High Priority</td>
                        <td>{highFire}</td>
                        <td>{highFlood}</td>
                        <td>{highPower}</td>
                        <td>{highMedical}</td>
                        <td className="total">{highTotal}</td>
                    </tr>
                    <tr>
                    <td>Critical Priority</td>
                        <td>{criticalFire}</td>
                        <td>{criticalFlood}</td>
                        <td>{criticalPower}</td>
                        <td>{criticalMedical}</td>
                        <td className="total">{criticalTotal}</td>
                    </tr>
                    <tr>
                        <td className="total">Total</td>
                        <td className="total">{FireTotal}</td>
                        <td className="total">{FloodTotal}</td>
                        <td className="total">{PowerTotal}</td>
                        <td className="total">{MedicalTotal}</td>
                        <td className="total">{total}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Analysis;