import React, { useState } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import { imageList } from './images/ImageList';

function App() {

  const [images] = useState(imageList)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1)
      console.log('next')
    } else {
      setCurrentImage(0)
      console.log('restart')
    }
  }

  const prevImage = () => {
    setCurrentImage(currentImage - 1)
  }

  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 
        currentImage={images[currentImage]}
        nextImage={nextImage}
        prevImage={prevImage}
      />
    </div>
  );
}

export default App;
