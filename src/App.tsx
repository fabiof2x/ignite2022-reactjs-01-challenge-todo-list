import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTaskBar } from './components/NewTaskBar';

import './global.css';

import clipboardImg from './assets/clipboard.svg'


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
          <div className={styles.empty}>
            <img src={clipboardImg} height={56} width={56} />
            <div>
              <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
