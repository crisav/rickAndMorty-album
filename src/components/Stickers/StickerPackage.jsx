
function StickerPackage({sticker, stickersPackage, handleDeletePackage}) {

  // console.log(stickersPackage)

  const handleDelete = (sticker, arr) => {
    console.log('esta entrando')
    console.log(arr)
    handleDeletePackage((arr) => arr.filter( item => item !== sticker ))
  }

  return (
    <div
      className=""
      onClick={() => handleDelete(sticker, stickersPackage)}
    >
      <h1>
        Hay estickers {sticker}
      </h1>
    </div>
  )
}

export default StickerPackage