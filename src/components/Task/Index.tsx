import { Trash } from 'phosphor-react';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import styles from './Task.module.css';
import { ITask } from '../../App';

interface ITaskProps {
  id: string
  description: string
  isDone: boolean
  setTasks:  Dispatch<SetStateAction<ITask[]>>
}

export function Task({ id, description, isDone, setTasks }: ITaskProps) {

  function handleDoneTask(e: MouseEvent<HTMLInputElement>) {
    setTasks(
      tasksArray => ([
        ...tasksArray.map((task) => ({
          id: task.id,
          description: task.description,
          isDone: (task.id === id)? !task.isDone : task.isDone
        })) 
      ]) 
    );
  }

 function handleDeleteTask(e: MouseEvent<HTMLDivElement>){
  setTasks(
    tasksArray =>  tasksArray.filter( task => task.id !== id)
  )
 }

  return (
    <div className={`${styles.task} ${isDone? styles.taskDone : styles.taskNotDone}`}>
      <label className={styles.circle}>
        <input type='checkbox' onClick={handleDoneTask}/>
        <span className={styles.checkmark}></span>
      </label>
      <p className={isDone ? styles.descriptionTaskDone: styles.description}>
        { description }
      </p>
      <div className={styles.trash} onClick={handleDeleteTask}>
        <Trash size={18} weight={'bold'}  />
      </div>
    </div>
  )
}
