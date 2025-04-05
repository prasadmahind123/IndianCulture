import { useState, useEffect } from 'react';
import './Scroll.css'
export default function ScrollUp() {
   
        const [isVisible, setIsVisible] = useState(false);

        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 200) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };

        const handleClick = () => {
            const intervalId = setInterval(() => {
              const scrollPosition = window.scrollY;
              if (scrollPosition > 0) {
                window.scrollTo(0, scrollPosition - 20);
              } else {
                clearInterval(intervalId);
              }
            }, 8); // 16ms = 60fps
          };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
    
  return (
    <div>
      <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={handleClick}
    >
      <svg viewBox="0 0 384 512" className="svgIcon">
    <path
      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    ></path>
  </svg>
    </button>
    </div>
  )
}
