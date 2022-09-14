import React from 'react'

interface Section3Props {
    currentImage: any,
    nextImage: any,
    prevImage: any,
}

const Section3: React.FC<Section3Props> = ({ currentImage, nextImage, prevImage }) => {
  return (
    <div className='section3'>
        <img src={currentImage} alt="" />
        <button onClick={nextImage}>Next</button>
        <button onClick={prevImage}>Back</button>
    </div>
  )
}

export default Section3