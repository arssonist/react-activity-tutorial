import React from 'react'
import { Component } from 'react'

// COUNT PROPS- dif than lis props
// count compoent as props
//     totalDays
//     frontendDays
//     backendDays
//     goal

export class CodeDayCount extends Component{
// 2. this runs the function with the inputs below totalDays/goal

    percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
    }

// 1. this calls above function with the inputs- in general
    calcGoalProgress(totalDays, goal){
        return this.percentToDecimal(totalDays/goal)
    }
    render(){
        return(
// take props from the rendered instance and put them into the component itself
            <div className='code-day-count'>
                <div className="total-days">
                    <span>{this.props.totalDays}</span>
                </div>
                <div className="js-days">
                    <span>{this.props.frontendDays}</span>
                </div>
                <div className="ruby-days">
                    <span>{this.props.backendDays}</span>
                </div>
                <div className="goal-days">
{/* 3. calcGoalProgress is called with the inputs- real inputs from App.js                    */}
                    <span>
                    {this.calcGoalProgress(this.props.totalDays, this.props.goal)}
                     </span>
                </div>
            </div>
        )
        }
}

CodeDayCount.defaultProps =     {
    totalDays:80,
    frontendDays:50,
    backendDays:30,
    goal:100
}
