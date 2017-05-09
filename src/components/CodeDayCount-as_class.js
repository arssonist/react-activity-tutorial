import React from 'react'
import { Component } from 'react'

// COUNT PROPS- dif than lis props
// count compoent as props
//     totalDays
//     frontendDays
//     backendDays
//     goal

export class CodeDayCount extends Component{
// To use default props inside function, U need static keyword, or else it needs to be outside, at the bottom
    // static defaultProps = {
    //     totalDays:80,
    //     frontendDays:50,
    //     backendDays:30,
    //     goal:100
    // }
    percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
    }


    calcGoalProgress(totalDays, goal){
        return this.percentToDecimal(totalDays/goal)
    }
    render(){
        return(

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

CodeDayCount.defaultProps =  {
    totalDays:80,
    frontendDays:50,
    backendDays:30,
    goal:100
// }
