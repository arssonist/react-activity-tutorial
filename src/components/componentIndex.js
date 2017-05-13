import React, { Component } from 'react';
import { CodeDayList } from './CodeDayList'
import { CodeDayRow } from './codeDayRow'
import { CodeDayCount } from './CodeDayCount-as_statelss'



export class ComponentIndex extends Component{

    // constructor(props) {
    //    super(props);
    //    this.state = {date: new Date()};
     //}

     constructor(props) {
        super(props);
        this.state  = {
            allCodeDays: [
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
     }
// method that takes in a filter word, and returns all the data with this word
     countDays(filterWord){
// this.state can be lifted out of function to make easier to read
        const { allCodeDays } = this.state
        return allCodeDays.filter((day) => {
        // return this.state.allCodeDays.filter((day) => {
            return (filterWord ? day[filterWord] :  day)
        }).length
        // call length on the end to get a number back
    }
     render(){
         return (
             <div className="componentIndex">
                <div className="code-day-list">
                    <CodeDayList days={this.state.allCodeDays} />
                </div>
                <div className="code-day-count">
                    <CodeDayCount   totalDays={this.countDays()}
                                    frontendDays={this.countDays(
                                    "frontendDays"
                                    )}
                                    backendDays={this.countDays(
                                    "backendDays"
                                    )}

                                />
                </div>
             </div>
         )
     }
 }
