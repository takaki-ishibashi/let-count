import React, { Component } from 'react';
import './App.css';

class App extends Component {

  countWordNum() {
    const rawValue = document.getElementById('input-words').value;
    const adjustedValue = rawValue.replace(/[\r\n]/g,'');
    const wordsSpaceNumElm = document.getElementById('word-space-num');
    const wordsNumElm = document.getElementById('word-num');
    const lineNumElm = document.getElementById('line-num');

    if (rawValue) {
      wordsSpaceNumElm.innerText = adjustedValue.length;
      wordsNumElm.innerText = adjustedValue.replace(' ', '').replace('　', '').length;
      lineNumElm.innerText = rawValue.match(/[^\r\n]*(\r\n|\r|\n|$)/g).length - 1;  
    }
  }

  resetAll() {
    document.getElementById('input-words').value = '';
    document.getElementById('word-space-num').innerText = 0;
    document.getElementById('word-num').innerText = 0;
    document.getElementById('line-num').innerText = 0;
  }

  render() {
    return (
      <div className="App w-mx-x mx-auto">
        <div className="m-3">
          <h2>文字数</h2>
        </div>
        <div className="m-3">
          <textarea className="h-x p-1 w-100p" id="input-words" autoFocus="true" placeholder="Count a characters."></textarea>
        </div>
        <div className="m-3 mx-auto w-mx-380">
          <button className="btn btn-primary btn-lg m-3-r w-40p" onClick={this.countWordNum} type="button"><h5>Go</h5></button>
          <button className="btn btn-secondary btn-lg w-40p" onClick={this.resetAll} type="button"><h5>Reset</h5></button>
        </div>
        <ul className="list-group m-3 mx-auto w-mx-380">
          <li className="list-group-item justify-content-between">
            <h5>Characters + Space:</h5>
            <h5><span className="badge badge-primary badge-pill" id="word-space-num">0</span></h5>
          </li>
          <li className="list-group-item justify-content-between">
            <h5>Characters:</h5>
            <h5><span className="badge badge-primary badge-pill" id="word-num">0</span></h5>
          </li>
          <li className="list-group-item justify-content-between">
            <h5>Line:</h5>
            <h5><span className="badge badge-primary badge-pill" id="line-num">0</span></h5>
          </li>
        </ul>
        {/* <div className="m-100">Created by <a href="https://github.com/takaki-ishibashi">@takaki-ishibashi</a></div> */}
      </div>
    );
  }
}

export default App;
