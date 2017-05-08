import React from 'react'
import FaCalendar from 'react-icons/lib/fa/calendar'
//js
import FaCode from 'react-icons/lib/fa/code'
//goal
import FaFlask from  'react-icons/lib/fa/flask'
// ruby
import FaKeyboardO from 'react-icons/lib/fa/keyboard-o'

export const CodeDayRow = ({
    date,
    language,
    framework,
    project_built
}) => (
    <tr>
        <td>
{/* .getMonth(), etc are JS date methods--- add one so Jan is month          */}
            {date.getMonth()+1}/{date.getDate()}/
            {date.getFullYear()}
        </td>
        <td>
            {language}
        </td>
        <td>
            {framework}
        </td>
        <td>
            {(project_built) ? <FaKeyboardO /> : <FaFlask />}
        </td>
    </tr>

    )
