import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = (props) => {
  const { tasks } = useContext(TaskListContext);
    return(
        <div>
             {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </div>
    )
}
export default TaskList ;