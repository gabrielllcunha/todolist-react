import { SetStateAction, Dispatch } from 'react';
import styles from './TaskList.module.css';
import { Task } from '../Task/Index';
import { TaskListInfo } from '../TaskListInfo/Index';
import { ITask } from '../../App';
import clipboard from '../../assets/clipboard.svg';

export interface ITaskListProps{
  setTasks: Dispatch<SetStateAction<ITask[]>>
  tasks: ITask[]
}
export function TaskList({ tasks, setTasks }: ITaskListProps) {
  const qtyTaskCreated = tasks.length || 0
  const qtyTaskDone = tasks.filter( (task:ITask) => task.isDone ).length || 0

  return (
    <div className={styles.taskListContainer}>
      <TaskListInfo qtyTaskCreated={qtyTaskCreated} qtyTaskDone={qtyTaskDone}/>
      {qtyTaskCreated > 0 ? (
          <div className={styles.taskList}>
              {
                tasks.map( 
                  ({id, description, isDone}) => 
                    <Task 
                      key={id} 
                      id={id}
                      description={description}
                      isDone={isDone}
                      setTasks={setTasks}
                    />
                )
              }
          </div>       
        ) : (
          <div className={styles.emptyTaskList}>
            <img src={clipboard} alt='Clipboard Icon' />
            <div>
              <p className={styles.boldDescription}>
                You do not have any task yet
              </p>
              <p>
                Create new tasks to organize your to-do list
              </p>
            </div>
          </div>
        )
      }
   </div>
  )
}