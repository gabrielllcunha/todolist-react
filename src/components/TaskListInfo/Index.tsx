import styles from './TaskListInfo.module.css';

interface ITaskInfoProps {
  qtyTaskCreated: number;
  qtyTaskDone: number;
}
export function TaskListInfo({ qtyTaskCreated, qtyTaskDone }: ITaskInfoProps){
  return (
    <div className={styles.taskListInfo}>
      <strong className={styles.taskCreatedCount}>
        Tasks
        <span>{ qtyTaskCreated }</span>
      </strong>

      <strong className={styles.taskDoneCount}>
        Done
        <span>{qtyTaskDone}  {qtyTaskCreated ? `of ${qtyTaskCreated}`: ``}</span>
      </strong>
    </div>
  )
}