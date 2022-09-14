import React from 'react'

interface Section3Props {
  imageList: any,
  nextImage: any,
  prevImage: any,
  currentImage: any,
}

const Section3: React.FC<Section3Props> = ({ imageList, nextImage, prevImage, currentImage }) => {

  
  

  return (
    <>
      <div className="section3">
      <div className="buttons">
        <button className='back-button' onClick={prevImage}>Back</button>
        <button className='next-button' onClick={nextImage}>Next</button>
      </div>
        {imageList.map((slide: any, index: any) => 
           (
            <div className={index === currentImage ? 'slide active' : 'slide'} key={index}>
              {index === currentImage && (
                <img src={slide.image} alt="" className='gallery-img' />
              )}
              
            </div>
            
          )
        )}
      </div>
      <div>addfasdfs</div>
    </>
  )
}

export default Section3
