import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiURL: 'https://baconipsum.com/api/',
      type: 'meat-and-filler',
      sentences: 5,
      lorem: 1,
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText()
  }

  // full api sample call
  //?type=all-meat&paras=3&start-with-lorem=1&format=html
  getSampleText = () => {

    axios.get(`${this.state.apiURL}?type=${this.state.type}?sentences=${this.state.sentences}`)
      .then(res => {
        this.setState({ text: res.data })
        console.log(res.data)
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <div className="App">
        <div className='container-fluid'>
          <form>

            <div className='form-group'>
              <label htmlFor='numSentences'>How many sentences do you need?</label>
              <select className='form-control' id='numSentences'>
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

            <div className='form-group'>
              <div className='row'>
                <div className='col-12'>
                  {this.state.text}
                </div>
              </div>
            </div>

            <div className='form-row text-center'>
              <div className='col-12'>
                <button className='btn btn-primary center'>Generate</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default App;
