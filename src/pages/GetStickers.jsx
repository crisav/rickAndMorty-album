import { useState } from "react"

import styles from "./GetStickers.module.css"

function GetStickers() {
  const [stickers, setStickers] = useState([]);

  const handleGetStickers = () => {
    setStickers([1, 2, 3, 4])
  }

  const handleDeleteStickers = (sticker) => {
    setStickers(() => stickers.filter( item => item !== sticker ))
  }

  return (
    <section className={styles['get-stickers']}>
      <div className={styles['title-container']}>
        <h2 className={styles.title}>Obtener Láminas</h2>
      </div>
      <div className={styles.container}>
        {
          (stickers.length > 0)
            ? <div className={styles['stickers-container']}>
                {
                  stickers.map( (sticker, index)  => (
                    <div
                      className={styles['sticker-package']}
                      key={index}
                      onClick={() => handleDeleteStickers(sticker)}
                    >
                      <h1>{sticker}</h1>
                    </div>
                  ))
                }
              </div>
            : <button
                className={styles.button}
                onClick={handleGetStickers}
              >
                Mas laminas
              </button>
        }
      </div>
    </section>
  )
}

export default GetStickers