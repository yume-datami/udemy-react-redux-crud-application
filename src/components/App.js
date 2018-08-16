import React, { Component } from 'react';

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

//import PropTypes from 'prop-types';


const App = () => (<Counter></Counter>)

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

   handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}



//const App = () => {
//  const profiles =[
//     { name: "Taro", age: 20 },
//     { name: "Hanako", age: 18 },
//     { name: "NoName", age: 15 }
//  ]
//
//  return (
//    <div>
//      {
//        profiles.map((profile, index) =>{
//          return <User name={profile.name} age={profile.age} key={index}/>
//        })
//      }
//    </div>
//  )}
//
//
//const User = (props) => {
//  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
//}


//User.defaultProps = {
//  age: 1
//}


//User.propTypes = {
//  name: PropTypes.string,
//  age: PropTypes.number.isRequired
//}

export default App;
