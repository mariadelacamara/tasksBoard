import React from "react";
import { shape, bool, number, string, func } from "prop-types";
import styles from "./styles.module.scss";
import cn from "classnames";

const TaskBox = ({ task, onClick }) => {
  const { completed, id, title } = task;
  const handleClick = () => onClick(task);
  return (
    <div
      className={cn(styles.box, { [styles.complete]: completed })}
      onClick={handleClick}
    >
      <span>Task #{id}</span>
      <span className={`full-width ${styles.title}`}>{title}</span>
    </div>
  );
};

TaskBox.propTypes = {
  task: shape({
    completed: bool,
    id: number,
    title: string,
  }),
  onClick: func,
};

export default TaskBox;
