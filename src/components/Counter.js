import React, { Component } from 'react';
import config from '../appConfig.json';
import '../styles/Counter.css';
import '../styles/Button.css';

class CounterComponent extends Component {
  constructor() {
    super();

    this.state = {
      currentVal: 0,
      currentSinglesDigit: 0,
      currentTensDigit: 0
    }

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.convertNumberToDigits = this.convertNumberToDigits.bind(this);
  }

  convertNumberToDigits (currentVal) {
    if (currentVal > 99 || currentVal < 0) {
      alert("Action not possible. Value must be between 0 and 99");
      return;
    }

    const currentValString = currentVal.toString();
    let currentSinglesDigit;
    let currentTensDigit;

    if (currentValString.length > 1) {
      currentSinglesDigit = currentValString[1];
      currentTensDigit = currentValString[0];
    } else {
      currentSinglesDigit = currentValString[0] || 0;
      currentTensDigit = 0;
    }

    this.setState({
      currentVal: currentVal,
      currentSinglesDigit,
      currentTensDigit
    });
  }

  fetchCurrentVal (route, body) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    let err = false;

    return fetch(`${config.baseUrl}/${route}`, {
      method: 'POST',
      headers,
      body
    }).then(fetchResp => {
      if (fetchResp.status !== 200) {
        err = true;
      }

      return fetchResp.json();
    }).then(resp => {
      if (err) {
        return alert(resp.error);
      } else {
        return resp.currentValue;
      }
    }).catch(err => {
      console.log(err);
    })
  }

  incrementCount () {
    const body = JSON.stringify({
      currentValue: this.state.currentVal
    });

    this.fetchCurrentVal('increment', body).then(newVal => {
      if (newVal !== undefined) {
        this.convertNumberToDigits(newVal);
      }
    });
  }

  decrementCount () {
    const body = JSON.stringify({
      currentValue: this.state.currentVal
    });

    this.fetchCurrentVal('decrement', body).then(newVal => {
      if (newVal !== undefined) {
        this.convertNumberToDigits(newVal);
      }
    });
  }

  render() {
    return (
      <div>
        <h2> Current Value </h2>
        <div className="counter">
          <button onClick={this.decrementCount}>
            <i className="material-icons">remove</i>
          </button>
          <div className="counter-number">
            <p>{this.state.currentTensDigit}</p>
          </div>
          <div className="counter-number">
            <p>{this.state.currentSinglesDigit}</p>
          </div>
          <button onClick={this.incrementCount}>
            <i className="material-icons">add</i>
          </button>
      </div>
      </div>
    );
  }
}

export default CounterComponent;
