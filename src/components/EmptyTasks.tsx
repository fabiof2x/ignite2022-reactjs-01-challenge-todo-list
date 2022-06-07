import clipboardImg from '../assets/clipboard.svg'

import styles from './EmptyTasks.module.css'

export function EmptyTasks() {
  return (
    <div className={styles.empty}>
      <img src={clipboardImg} height={56} width={56} />
      <div>
        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}