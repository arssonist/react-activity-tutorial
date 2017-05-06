import React, { Component } from 'react';
import { CodeDayCount } from '../src/components/CodeDayCount'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
{/* add the data that will be passed as props in instance of component           */}
         <CodeDayCount totalDays={80}
                       jsDays={55}
                       rubyDays={35}
                       goal={100}
         />
      </div>
    );
  }
}

export default App;
