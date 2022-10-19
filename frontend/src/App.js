import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home'
import Livefeed from './components/Livefeed'
import Analysis from './components/Analysis'
import Error from './components/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');
class App extends React.Component {

  constructor(props) {
    super(props);
    document.body.style = 'background: #49515e';
    this.state = { posts: [], nextID: 0 };
    socket.on('connect', function () {

      console.log("Connect....");
      socket.on('post',

        function (data) {
          this.setState(
            {
              //... spread operator: applies function to all contents in array 
              //Here: append a new dictionary to array posts.
              //posts is set to current contents + new dictionary
              posts: [...this.state.posts,
              {
                name: data.name,
                image: data.image,
                content: data.content,
                problem: data.problem,
                priority: data.priority,
                id: this.state.nextID
              }]
              , nextID: this.state.nextID + 1 //increment next ID
            });
        }.bind(this));
    }.bind(this));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <p> 
                {/* these are just the buttons in the navbar */}
                <NavLink className="btn" exact to="/" activeStyle={{
                  fontWeight: "bold",
                  color: "#36c2f5"
                }}>Home</NavLink >

                <NavLink className="btn" to="/components/livefeed" activeStyle={{
                  fontWeight: "bold",
                  color: "#36c2f5"
                }}>Live Feed</NavLink >

                <NavLink className="btn" to="/components/Analysis" activeStyle={{
                  fontWeight: "bold",
                  color: "#36c2f5"
                }}>Analytics</NavLink >
              </p>
            </ul>
          </nav>
          <Switch>

            <Route exact path="/" component={Home}>
              <Home />
            </Route>

            <Route path="/components/livefeed" render={(props) => <Livefeed {...props}
              posts={this.state.posts} />} />

            <Route path="/components/analysis" render={(props) => <Analysis {...props}
              posts={this.state.posts} />} />
            {/* Added error path for robustness, prevents crashing of webapp, useful for extension */}
            <Route path="*">
              <Error />
            </Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
