import React, { Component } from 'react';
import Home from './components/Home'
import { Link, Route } from 'react-router-dom'



class App extends Component {


  render() {

    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
//         {/* <a href="/test">Hello Test</a> */}
      // <Link to="/home">Home</Link>
