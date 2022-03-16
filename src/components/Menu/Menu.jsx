import MenuItem from "./MenuItem"
import styles from "./Menu.module.css"

const MENU_ITEMS = ['Obtener Láminas', 'Mi álbum', 'Información de la serie']

function Menu() {
  return (
    <header>
      <nav className={styles.menu}>
        <figure className={styles.logo}>
          <img src="https://logos-marcas.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="logo" />
        </figure>
        <ul className={styles.list}>
          {
            MENU_ITEMS.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Menu