import { Component } from 'react';
import data from './data'
import Header from './Components/Header'
import CardContainer from './Components/CardContainer'
import BottomControls from './Components/BottomControls'

import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
  }




  render() {
    // console.log(this.state.data)
    return (
      <div className="App" >
        <Header />
        <CardContainer />
        {/* <BottomControls /> */}
      </div>
    )
  };
}

export default App;
