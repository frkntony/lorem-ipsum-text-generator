import React, { Component } from 'react'
import axios from 'axios'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiURL: 'https://baconipsum.com/api/',
      type: 'meat-and-filler',
      value: 5,
      text: ''
    }
  }

  // returns random lorem impsum
  getLoremImpsum = (e) => {
    const val = e.target.value

    // full api sample call
    // ?type=all-meat&paras=3&start-with-lorem=1&format=html
    axios.get(`${this.state.apiURL}?type=${this.state.type}?sentences=${val}`)
    .then(res => {
      this.setState({ text: res.data })
    })
    .catch(e => console.log(e))
  } // ./getLoremImpsum

  changeNumSents = (e) => {
    this.setState( {value: e.target.value} )
    this.getLoremImpsum(e)
  } // ./changeNumSents

  render() {
    return (
      <div className="App">
        <div className='container'>
          <form>

            {/* number of sentences */}
            <div className='form-group'>
              <label htmlFor='numSentences'>How many sentences do you need?</label>
              <select className='form-control' id='numSentences'
                      value={this.state.value} onChange={this.changeNumSents} >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='25'>25</option>
                <option value='30'>30</option>
                <option value='35'>35</option>
                <option value='40'>40</option>
                <option value='45'>45</option>
                <option value='50'>50</option>
              </select>
            </div>

            {/* lorem-impsum field */}
            <div className='form-group'>
              <div className='row'>
                <div className='col-12'>
                  {this.state.text}
                </div>
              </div>
            </div>

          </form>
        </div>

      </div>
    );
  }
}

export default App;
