import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {

  constructor(props){
    super(props);
    this.setState = {
      type: 'meat-and-filler',
      paras: 5,
      lorem: 1,
      html: true,
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText()
  }

  getSampleText = () => {
    axios.get(`https://baconipsum.com/api/?type=${this.type}`)
    .then( data => console.log(data) )
    .catch( e => console.log(e) )
  }

  render() {
    return (
      <div className="App">
        <h1>Create React App</h1>
      </div>
    );
  }
}

export default App;
