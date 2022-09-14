import React, { useState } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import imageList from './images/ImageList';

function App() {

  const [images] = useState(imageList)
  const [currentImage, setCurrentImage] = useState(0)
  let length = images.length

 
  const nextImage = (e: any) => {
    e.preventDefault()
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
 
  }

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  
  }

  const legendSelect = (e: any) => {
    let target = e.target.value;
    
    setCurrentImage(parseInt(target))
    
    console.log('target', parseInt(target))
  }
  console.log('currentImage', currentImage)

  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 
        currentImage={currentImage}
        nextImage={nextImage}
        prevImage={prevImage}
        imageList={images}
        legendSelect={legendSelect}
      />
    </div>
  );
}

export default App;
