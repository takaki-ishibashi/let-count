import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  countWordNum() {
    const rawValue = document.getElementById('input-words').value;
    const wordsSpaceNumElm = document.getElementById('word-space-num');
    const wordsNumElm = document.getElementById('word-num');
    const lineNumElm = document.getElementById('line-num');
    const adjustedValue = rawValue.replace(/[\r\n]/g,'');
    if (rawValue) {
      wordsSpaceNumElm.innerText = adjustedValue.length;
      wordsNumElm.innerText = adjustedValue.replace(' ', '').replace('　', '').length;
      lineNumElm.innerText = rawValue.match(/[^\r\n]*(\r\n|\r|\n|$)/g).length - 1;  
    }
  }

  resetInput() {
    document.getElementById('input-words').value = '';
  }

  render() {
    return (
      <div className="App w-mx-x mx-auto">
        <div className="m-3">
          <h1>文字数</h1>
        </div>
        <div className="m-3">
          <textarea className="h-x w-100p" id="input-words"></textarea>
        </div>
        <div className="m-3">
          <button className="btn btn-primary m-3-r px-5 py-2 w-180" onClick={this.countWordNum} type="button"><h5>Count</h5></button>
          <button className="btn btn-secondary px-5 py-2 w-180" onClick={this.resetInput} type="button"><h5>Reset</h5></button>
        </div>
        <ul className="list-group mx-auto w-mx-400 m-3">
          <li className="list-group-item justify-content-between">
            <h5>Word + Space:</h5>
            <h5><span className="badge badge-primary badge-pill" id="word-space-num">14</span></h5>
          </li>
          <li className="list-group-item justify-content-between">
            <h5>Word Only:</h5>
            <h5><span className="badge badge-primary badge-pill" id="word-num">2</span></h5>
          </li>
          <li className="list-group-item justify-content-between">
            <h5>Line:</h5>
            <h5><span className="badge badge-primary badge-pill" id="line-num">1</span></h5>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
