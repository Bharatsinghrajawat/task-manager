import React, { useState, useEffect , createContext } from 'react'

export const TaskListContext = createContext();
const  TaskListContextProvider = (props) => {
 
    const [tasks , setTasks] = useState([
        {
            title : 'watch movie',
            id : 1
        },
        {
            title : 'drink cup of coffee',
            id : 2
        }, 
        {
            title : 'go for jogging',
            id : 3
        }
    ])

    return(
        <TaskListContext.Provider tasks={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )

}
export default TaskListContextProvider;