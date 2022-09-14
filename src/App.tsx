import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import imageList from './images/ImageList';

function App() {

  const [images] = useState(imageList)
  const [currentImage, setCurrentImage] = useState(0)
  let length = images.length
 
  const nextImage = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    console.log(currentImage)
  }

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    console.log(currentImage)
  }


  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 
        // currentImage={images[currentImage]}
        nextImage={nextImage}
        prevImage={prevImage}
        imageList={images}
      />
    </div>
  );
}

export default App;
