import React, { Component } from 'react';

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
     render(){
         return (
             <div className="componentIndex">
                 {this.state.allCodeDays[0]['language']}
             </div>
         )
     }
 }
