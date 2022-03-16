import styles from "./MenuItem.module.css"

function MenuItem({ item }) {
  return (
    <li className={styles.item}>{ item }</li>
  )
}

export default MenuItem