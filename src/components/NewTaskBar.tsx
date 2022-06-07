import styles from './NewTaskBar.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTaskBar() {
  return (
    <form className={styles.taskBar} action="">
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
      />
      <button type='submit'>Criar <PlusCircle size={16} /></button>
    </form>
  )
}