import PropTypes from 'prop-types';
import styles from "./MenuItem.module.css"

function MenuItem({ item }) {
  return (
    <li className={styles.item}>{ item }</li>
  )
}

MenuItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default MenuItem