import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTaskBar } from './components/NewTaskBar';

import './global.css';

import { EmptyTasks } from './components/EmptyTasks';
import { Task } from './components/Task';


export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <NewTaskBar />
        <section>
          <header className={styles.tasksInfo}>
            <div className={styles.tasksCreated}>
              <p>Tarefas criadas</p> <span>0</span>
            </div>
            <div className={styles.tasksDone}>
              <p>Concluídas</p> <span>0</span>
            </div>
          </header>
          <Task />
          <Task />
          <Task />
          {/* <EmptyTasks /> */}
        </section>
      </main>
    </>
  )
}
