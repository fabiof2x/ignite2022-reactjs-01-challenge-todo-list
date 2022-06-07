import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.formGroup}>
        <input className={styles.checkbox} type='checkbox' />
      </div>
      <p>Integer urna interdum massa libero auctor  massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button title='Deletar Tarefa'>
        <Trash size={13} />
      </button>
    </div>
  )
}