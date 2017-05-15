import React, { Component } from 'react';
// import { CodeDayCount } from '../src/components/CodeDayCount-as_statelss'
// import { CodeDayList } from '../src/components/CodeDayList'
import { ComponentIndex } from '../src/components/componentIndex'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <CodeDayCount /> */}
         <ComponentIndex />
      </div>
    );
  }
}

export default App;
