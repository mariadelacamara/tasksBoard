import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import TasksList from "../../components/TasksList";
import { getTasks } from "../../services/api";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const response = await getTasks();
        const responseWithCompletedProp = response.map((t) => {
          return { ...t, completed: false };
        });
        setTasks(responseWithCompletedProp);
      } catch (error) {
        //TODO Error notification
        alert("Something went wrong");
        console.log("error", error);
      }
    };
    mounted && fetchData();
    return () => (mounted = false);
  }, []);

  return (
    <>
      <Navbar tasksNumber={tasks.length} />
      <TasksList tasks={tasks} />
    </>
  );
};

export default Home;
