//import React, { Component } from 'react';
//class App extends Component {
//  render() {
//    const greeting ="Hi, Tom!";
//    const dom = <h1 className="foo">{greeting}</h1>;
//    return (dom);
//  }
//}

//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onChange={() => {console.log("I am clicked!")}} />
//      </React.Fragment>
//    )
//  }
//}

import React from 'react';

const App = () => {
  return (
    <div>
       <Cat />
       <Cat />
       <Cat />
       <Cat />
    </div>
  )}


const Cat = () => {
  return <div>Meow!</div>
}

export default App;
