import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiURL: 'https://baconipsum.com/api/',
      type: 'meat-and-filler',
      paras: 5,
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

    axios.get(`${this.state.apiURL}?type=${this.state.type}?paras=${this.state.paras}
                ?start-with-lorem=${this.state.lorem}`)
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
              <label htmlFor='paras'>How many paragraphs do you need?</label>
              <select className='form-control' id='paras'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
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
