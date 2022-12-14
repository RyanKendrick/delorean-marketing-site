import React from 'react'
import Radio from '@mui/material/Radio';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Section3Props {
  imageList: any,
  nextImage: any,
  prevImage: any,
  currentImage: any,
  legendSelect: any,
}

const Section3: React.FC<Section3Props> = 
({ 
  imageList, 
  nextImage, 
  prevImage, 
  currentImage,
  legendSelect, 
  }) => {

  return (
    <>
    <div className="section3">
        <div className="buttons">
          <ArrowBackIosIcon 
            className='back-button'
            onClick={prevImage}
          />
          <div className='slider-legend'>
            {imageList.map((i: any, index: any) => (
              <div className="radio-button">
                <Radio
                  sx={{
                    color: 'white',
                    '&.Mui-checked': {
                      color: 'white',
      
                    },
                  }}
                  checked={index === currentImage}
                  key={index}
                  size='small'
                  value={index}
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                  onClick={legendSelect}
                />
              </div>
            ))}
          </div>  
          <ArrowForwardIosIcon 
            className='next-button'
            onClick={nextImage}
          />
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
    </>
  )
}

export default Section3
