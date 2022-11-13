import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { MouseEvent, ChangeEvent, Dispatch, SetStateAction, useState, KeyboardEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../../App';

interface INewTaskProps{
  setTasks: Dispatch<SetStateAction<ITask[]>>
}
export function NewTask({ setTasks }: INewTaskProps) {
  const [newTaskDescription, setNewTaskDescription] = useState<string>()


  function setOnTasks(taskDescription: string | undefined ){
    if(taskDescription){
      setTasks( stateArray =>  
        {
          if(stateArray.length < 10) {
              return [
                ...stateArray,
                {
                  id: uuidv4(),
                  description: taskDescription,
                  isDone: false
                }
             ]
          }
          return stateArray
        })
      setNewTaskDescription("")
    }
  }

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>): void {
    const taskDescription = e.target.value
    setNewTaskDescription(taskDescription)
  }
  
  function handleOnClickChange(e: MouseEvent<HTMLButtonElement>): void {
    setOnTasks(newTaskDescription)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if(e.key === 'Enter'){
      setOnTasks(newTaskDescription)
    }
  }
 
  return (
    <div className={styles.newTask}>
      <input 
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
        value={newTaskDescription ? newTaskDescription : ""}
        placeholder="Add new task" 
        maxLength={250}
      />
      <button onClick={handleOnClickChange}>
        <PlusCircle 
          size={18} 
          weight={'bold'} 
        />
        Create 
      </button>
    </div>
  )
}