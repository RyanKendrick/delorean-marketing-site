import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import imageList from './images/ImageList';
import Section4 from './components/Section4';
import stats from './components/Stats'
import Section5 from './components/Section5';
import quotes from './components/Quotes';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Footer from './components/Footer';

// TODOS

// 2. header border animation
// 3. quotes animation
// 4. quotes transitions
// 5. header hover change
// 6. responsive styles

function App() {

  const [images] = useState(imageList)
  const [currentImage, setCurrentImage] = useState(0)
  const [quoteList] = useState(quotes)
  const [currentQuote, setCurrentQuote] = useState(0)
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
  }

  const quoteSelect = (e: any) => {
    let target = e.target.title;
    setCurrentQuote(parseInt(target))   
  }

  const updateQuote = () => {
    if (currentQuote === 3) {
      setCurrentQuote(0)
      console.log('currentQuote', currentQuote)
    } else {
      setCurrentQuote(currentQuote + 1)
      console.log('currentQuote', currentQuote)
    }
  }

  let counters = document.querySelectorAll('.num-counter')
  let speed = 200

  const startCounter = () => {
    counters.forEach((counter: any, index: any) => {        
        const updateCount = () => {
            let target = +counter.dataset.target
            let count = +counter.innerText
            let inc = target / speed
            if (count < target) {
                counter.innerText = (count + inc).toFixed(2)
                setTimeout(updateCount, 1)
            }
    
        }
        updateCount()
    })
  }  

  // setInterval function is stopped when a component unmounts from the dom using clearInterval
  useEffect(() => {
    startCounter()
    const timer =  setInterval(() => {
      updateQuote()
    }, 5000);

    return () => {
      clearInterval(timer)
    }
  })

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
      <Section4 
        stats={stats}
      />
      <Section5 
        quotes={quoteList}
        currentQuote={currentQuote}
        quoteSelect={quoteSelect}
      />
      <Section6 />
      <Section7 />  
      <Footer />
    </div>
  );
}

export default App;
