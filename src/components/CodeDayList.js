import React from 'react'
import { CodeDayRow } from './codeDayRow'

// props for list are
//     date
//     language
//     framework
//     project_built

export const CodeDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Language</th>
                <th>framework</th>
                <th>Project Complete?</th>
            </tr>
        </thead>
        <tbody>
{/* inside map function- return the component CodeDayRow, which has it's own UI, and take in the data that is inputed here             */}
            <div>
            {days.map((day, i) =>
            // Long way of passing in the values from the component day prop
                // <CodeDayRow key={i}
                //             date={day.date}
                //             language={day.language}
                //             framework={day.framework} />

// Using the spread, U can undo all the props and just use ... and the name of the overall prop- day in this case- what is at the top of <CodeDayList inside of App.js
                <CodeDayRow key={i}
                            {...day} />
            )}
        </div>
        </tbody>
    </table>
)
