import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }

  eatMango = () => {
    this.setState(pervCount => ({mangoes: pervCount.mangoes + 1}))
  }

  eatBanana = () => {
    this.setState(pervCount => ({bananas: pervCount.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="heading">
            Bob ate <span className="span">{mangoes} </span>mangoes{' '}
            <span className="span">{bananas} </span>bananas
          </h1>
          <div className="img-con">
            <div className="fruit-con">
              <img
                className="img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button className="btn" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>

            <div className="fruit-con">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button className="btn" type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
