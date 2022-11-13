import { useState } from 'react';
import { Header } from './components/Header/Index';
import { NewTask } from './components/NewTask/Index';
import { TaskList } from './components/TaskList/Index';
import styles from './App.module.css';
import './global.css';
import { v4 as uuidv4 } from 'uuid';

export interface ITask{
  id: string
  description: string
  isDone: boolean
}

const tasksData: ITask[] = []

export function App() {
  const [tasks, setTasks] = useState<ITask[]>(tasksData)
  return (
      <div>
        <Header/>
        <main className={styles.wrapper}>
          <NewTask setTasks={setTasks}/>
          <TaskList setTasks={setTasks} tasks={tasks}/>
        </main>
      </div>
    );  
}

export default App