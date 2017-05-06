import React from 'react'

export class CodeDayCount extends React.Component{
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
                    <span>{this.props.jsDays}</span>
                </div>
                <div className="ruby-days">
                    <span>{this.props.rubyDays}</span>
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
