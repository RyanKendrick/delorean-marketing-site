import React from 'react'

interface Section3Props {
  imageList: any,
  nextImage: any,
  prevImage: any,
}

const Section3: React.FC<Section3Props> = ({ imageList, nextImage, prevImage }) => {
  return (
    <>
      <div className="section3">
      <div className="buttons">
        <button className='next-button' onClick={nextImage}>Next</button>
        <button className='back-button' onClick={prevImage}>Back</button>
      </div>
        {imageList.map((slide: any, index: any) => {
          return (
            <img src={slide.image} alt="" className='gallery-img' />
          )
        })}
      </div>
    </>
  )
}

export default Section3


// import React from 'react'

// interface Section3Props {
//     currentImage: any,
//     nextImage: any,
//     prevImage: any,
//     images: any,
// }

// const Section3: React.FC<Section3Props> = ({ currentImage, nextImage, prevImage, images }) => {
//   return (
//     <div className='section3'>
//         {images.map((i: any) => (
//             <img src={currentImage} className='gallery-img' alt="" />
//         ))}
//         {/* <img src={currentImage} alt="" /> */}
//         <button onClick={nextImage}>Next</button>
//         <button onClick={prevImage}>Back</button>
//     </div>
//   )
// }

// export default Section3 