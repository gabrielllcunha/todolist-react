import styles from './Header.module.css';

export function Header(){
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.primary}>To</span>
        <span className={styles.primary}>-</span>
        <span className={styles.primary}>Do</span>
      </div>
      <span className={styles.secondary}>List</span>
    </header>
  )
}