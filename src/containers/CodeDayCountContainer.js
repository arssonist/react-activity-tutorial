import React from 'react'
import CodeDayCount from '.src/components/CodeDayCount'

class CodeDayCountContainer extends React.Component{
    render(){
        return(

        <CodeDayCount totalDay={80} jsDays={55}
            rubyDays={35}
            goal={100}/>
    /* add the data that will be passed as props in instance of component           */
        )
    }

}
export default CodeDayCountContainer
