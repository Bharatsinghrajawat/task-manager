import React from 'react'

const Task = ({task}) => {
    return (
        <div>
            <li>
                {task.title}
            </li>
        </div>
    )
}

export default Task
