import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count:0}
  onGenerateBtn = ()=>{
    const randomNumber = Math.floor(Math.random()*99)+1
    this.setState((prevState)=>({count:randomNumber}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.onGenerateBtn}>Generate</button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
