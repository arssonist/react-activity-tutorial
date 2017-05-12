import React, { Component } from 'react';
// import { CodeDayCount } from '../src/components/CodeDayCount-as_statelss'
// import { CodeDayList } from '../src/components/CodeDayList'
import { ComponentIndex } from '../src/components/componentIndex'
import './App.css';

class App extends Component {   
  render() {
    return (
      <div className="App">
{/* add the data that will be passed as props in instance of component
    */}
        {/* <CodeDayCount /> */}
         <ComponentIndex />
      </div>
    );
  }
}

export default App;
