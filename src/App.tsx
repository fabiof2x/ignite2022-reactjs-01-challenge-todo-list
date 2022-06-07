import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { NewTaskBar } from './components/NewTaskBar';
import { EmptyTasks } from './components/EmptyTasks';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css';


interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const completedTasksTotal = tasks.filter(task => task.isComplete === true).length;
  const createdTasksTotal = tasks.length;
  const hasTaskDataOnList = createdTasksTotal !== 0;

  function createNewTask(taskTitle: string) {
    const newTask: Task = {
      id: uuidv4(),
      title: taskTitle,
      isComplete: false,
    }

    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId: string) {
    const newFilteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newFilteredTasks);
  }

  function toggleTaskCompletion(taskId: string) {
    const toggledTask = tasks.map((task) =>
      task.id === taskId
        ? { ...task, isComplete: !task.isComplete }
        : task)

    setTasks(toggledTask);
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <NewTaskBar
          onCreateNewTask={createNewTask}
        />
        <section>
          <header className={styles.tasksInfo}>
            <div className={styles.tasksCreated}>
              <p>Tarefas criadas</p><span>{createdTasksTotal}</span>
            </div>
            <div className={styles.tasksDone}>
              <p>Concluídas</p><span>
                {
                  hasTaskDataOnList
                    ? `${completedTasksTotal} de ${createdTasksTotal}`
                    : '0'
                }
              </span>
            </div>
          </header>
          {
            hasTaskDataOnList
              ? tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    isComplete={task.isComplete}
                    onDeleteTask={deleteTask}
                    onToggleTaskCompletion={toggleTaskCompletion}
                  />
                )
              })
              : <EmptyTasks />
          }
        </section>
      </main>
    </>
  )
}
