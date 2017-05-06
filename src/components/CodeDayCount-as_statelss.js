import React from 'react'

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
    totalDays,
    jsDays,
    rubyDays,
    goal}
    ) => (
    <div className='code-day-count'>
        <div className="total-days">
            <span>{totalDays}</span>
        </div>
        <div className="js-days">
            <span>{jsDays}</span>
        </div>
        <div className="ruby-days">
            <span>{rubyDays}</span>
        </div>
        <div className="goal-days">
    {/* 3. calcGoalProgress is called with the inputs- real inputs from App.js                    */}
            <span>
            {calcGoalProgress(totalDays, goal)}
             </span>
        </div>
    </div>
)
