import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
  onDeleteTask: (id: string) => void;
  onToggleTaskCompletion: (id: string) => void;
}

export function Task({
  id,
  title,
  isComplete,
  onDeleteTask,
  onToggleTaskCompletion
}: Task) {

  function handleToggleTaskCompletion() {
    onToggleTaskCompletion(id);
  }

  function handleRemoveTask() {
    onDeleteTask(id);
  }

  return (
    <div
      className={`
        ${styles.task} 
        ${isComplete && styles.completed}
      `}
    >
      <div className={styles.formGroup}>
        <input
          className={styles.checkbox}
          type='checkbox'
          readOnly
          checked={isComplete}
          onClick={handleToggleTaskCompletion}
        />
      </div>

      <p>{title}</p>

      <button
        title='Deletar Tarefa'
        onClick={handleRemoveTask}
      >
        <Trash size={13} />
      </button>
    </div>
  )
}