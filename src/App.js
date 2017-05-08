import React, { Component } from 'react';
import { CodeDayCount } from '../src/components/CodeDayCount-as_statelss'
import { CodeDayList } from '../src/components/CodeDayList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
{/* add the data that will be passed as props in instance of component           */}
         <CodeDayList days={
        [
            {
                date:new Date("1/12/2016"),
                language:"javascript",
                framework:"react",
                project_built:true
            },
            {
                date:new Date("3/30/2016"),
                language:"javascript",
                framework:"angular",
                project_built:true

            },
            {
                date:new Date("9/30/2016"),
                language:"ruby",
                framework:"rails",
                project_built:false

            }
         ]
     }
         />
      </div>
    );
  }
}

export default App;
