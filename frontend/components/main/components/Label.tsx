import styles from './components.module.css'

export default function Label({title}) {


  return (
    <div className={styles.label_container}>
      <div className={styles.label_title}>{title}</div>
    </div>
  )
}