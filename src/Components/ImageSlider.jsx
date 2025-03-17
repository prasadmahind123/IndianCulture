// ImageSlider.js
import { useState, useEffect } from 'react';
import { HiOutlineArrowSmallLeft , HiOutlineArrowSmallRight } from "react-icons/hi2";
import './ImageSlider.css';
const ImageSlider = () => {
  const [images, setImages] = useState([
    '/images/TajMahal.webp',
    '/images/Agra fort.webp',
    '/images/Church.webp',
    '/images/kutubMinar.webp',
    '/images/konark-sun-temple-odisha.webp',
    '/images/csmt.webp',
    '/images/ElephantaCaves.webp',
    '/images/Ajintha.webp',
    '/images/kailasaTemple.webp'    

  ]);
  const [descriptions, setDescriptions] = useState([
    'The Taj Mahal is a white marble mausoleum in Agra, India.',
    'Agra Fort is a historical fort in Agra, India.',
    'A church is a building for worship and other religious activities.',
    'The Qutub Minar is a minaret in Delhi, India.',
    'The Konark Sun Temple is a temple in Odisha, India.',
    'CSMT is a railway station in Mumbai, India.',
    'The Elephanta Caves are a network of caves in Mumbai, India.',
    'Ajintha is a cave temple in Maharashtra, India.',
    'The Kailasa Temple is a temple in Maharashtra, India.',
    'The Elora Caves are a network of caves in Maharashtra, India.',
  ]);
  const [description, setDescription] = useState([
    'Built in 1653 by Mughal Emperor Shah Jahan.',
    'Built in 1565 by Mughal Emperor Akbar.',
    'Built in the 19th century.',
    'Built in 1192 by Qutb-ud-din Aibak.',
    'Built in the 13th century.',
    'Built in 1887 by the British.',
    'Built in the 5th century.',
    'Built in the 2nd century.',
    'Built in the 8th century.',
    'Built in the 5th century.',
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const handleLeftClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <>
      <div className="image-slider">
          <img src={images[currentIndex]} alt={descriptions[currentIndex]} />
        <button className="left-button" onClick={handleLeftClick}>
        <HiOutlineArrowSmallLeft />
        </button>
        <button className="right-button" onClick={handleRightClick}>
          <HiOutlineArrowSmallRight />
        </button>
        <div className="description">
        <h2>{descriptions[currentIndex]}</h2>
        <p>{description[currentIndex]}</p>
      </div>
      </div>
     
    </>
  );
};

export default ImageSlider;