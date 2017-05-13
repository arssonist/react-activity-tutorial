import React from 'react'
import PropTypes from 'react'

import FaCalendar from 'react-icons/lib/fa/calendar'
//js
import FaCode from 'react-icons/lib/fa/code'
//goal
import FaFlask from  'react-icons/lib/fa/flask'
// ruby
import FaKeyboardO from 'react-icons/lib/fa/keyboard-o'

//days
// making class into function-
// 1.remove render
// 2.remove return
// 3.remove this
// 4.put props in input
// 5.remove methods from inside class and move them outside

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calcGoalProgress = (totalDays, goal) => {
    return  percentToDecimal(totalDays/goal)
}

// Stateless component with props--------
//
// export const CodeDayCount = (props) => (
//     <div className='code-day-count'>
//         <div className="total-days">
//             <span>{props.totalDays}</span>
//         </div>
//         <div className="js-days">
//             <span>{props.jsDays}</span>
//         </div>
//         <div className="ruby-days">
//             <span>{props.rubyDays}</span>
//         </div>
//         <div className="goal-days">
//     {/* 3. calcGoalProgress is called with the inputs- real inputs from App.js                    */}
//             <span>
//             {calcGoalProgress(props.totalDays, props.goal)}
//              </span>
//         </div>
//     </div>
// )

// Destructure and input only in props we want rather than entire object -- them we can remove props

export const CodeDayCount = ({
    frontendDays=50,
    backendDays=30,
    totalDays=frontendDays + backendDays,
    goal=100}
    ) => (
    <div className='code-day-count'>
        <div className="total-days">
            <FaCalendar />
            <span>{totalDays}</span>
        </div>
        <div className="js-days">
            <FaCode />
            <span>{frontendDays}</span>
        </div>
        <div className="ruby-days">
            <FaKeyboardO />
            <span>{backendDays}</span>
        </div>
        <div className="goal-days">
    {/* 3. calcGoalProgress is called with the inputs- real inputs from App.js                    */}
            <span>
                <FaFlask />
            {calcGoalProgress(totalDays, goal)}
             </span>
        </div>
    </div>
)

CodeDayCount.PropTypes = {
    totalDays:PropTypes.number,
    frontendDays:PropTypes.number,
    backendDays:PropTypes.number,
    goal:PropTypes.number  
}
