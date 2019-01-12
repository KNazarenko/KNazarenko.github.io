import React, { Component } from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
export default App;
