import styles from './NewTaskBar.module.css';
import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';

interface Props {
  onCreateNewTask: (title: string) => void;
}

export function NewTaskBar({ onCreateNewTask }: Props) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const isNewTaskTitleEmpty = newTaskTitle.length === 0;

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();
    onCreateNewTask(newTaskTitle);
    setNewTaskTitle('');
  }

  return (
    <form className={styles.taskBar} onSubmit={handleCreateNewTask}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button
        type='submit'
        disabled={isNewTaskTitleEmpty}
      >
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}