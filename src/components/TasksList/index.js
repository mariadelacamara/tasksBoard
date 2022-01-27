import React, { useEffect, useState } from "react";
import Dialog from "../Dialog";
import TaskBox from "./TaskBox/index";
import styles from "./styles.module.scss";

const TasksList = ({ tasks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [tasksWithCompleted, setTasksWithComplete] = useState(tasks);

  useEffect(() => {
    setTasksWithComplete(tasks);
  }, [tasks]);

  const handleClick = (task) => {
    setCurrentTask(task);
    setIsOpen(true);
  };

  const closeModal = () => {
    setCurrentTask();
    setIsOpen(false);
  };

  const completeHandler = () => {
    setTasksWithComplete(
      tasksWithCompleted.map((t) => {
        if (t.id === currentTask.id) {
          return { ...t, completed: true };
        } else {
          return t;
        }
      })
    );
    closeModal();
  };

  return (
    //TODO: Implement Loading variable and No tasks screen.
    <div className={styles.container}>
      {tasksWithCompleted.length > 0 ? (
        tasksWithCompleted?.map((task) => (
          <TaskBox task={task} onClick={handleClick} key={task.id} />
        ))
      ) : (
        <div>No tasks</div>
      )}
      <Dialog
        isOpen={isOpen} //current task seleccionada => open
        element={currentTask}
        completeHandler={completeHandler}
        dialogTitle="Task - #"
        closeModal={closeModal}
        okButtonText="Complete task"
      />
    </div>
  );
};

export default TasksList;
