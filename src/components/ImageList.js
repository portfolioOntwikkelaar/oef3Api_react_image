import React from 'react'

const ImageList =(props) => {
  const images = props.images.map((image) => {
    return  <img className="ui medium bordered image" key={image.id} src={ image.webformatURL } alt="image" />
  })
  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList
