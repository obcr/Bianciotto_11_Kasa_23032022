import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Slider = ({ pictures }) => {
  const picturesLength = pictures.length
  const [sliderAnimation, setSliderAnimation] = useState(0)

  const nextSlide = () => {
    setSliderAnimation(sliderAnimation === picturesLength - 1 ? 0 : sliderAnimation + 1)
  }
  const prevSlide = () => {
    setSliderAnimation(sliderAnimation === 0 ? picturesLength - 1 : sliderAnimation - 1)
  }

  if (picturesLength === 1) {
    return (
      <div className="slider">
        {pictures.map((slide, index) => {
          return <>{index === sliderAnimation && <img src={slide} alt="housing"/>}</>
        })}
      </div>
    )
  } else {
    return (
      <div className="slider">
        <FaChevronLeft className='FaChevronLeft' onClick={prevSlide} />
        <FaChevronRight className='FaChevronRight' onClick={nextSlide} />
        {pictures.map((slide, index) => {
          return (
            <div
              className={index ===sliderAnimation ? 'slide-active' : 'slide'}
              key={index}
            >
              {index === sliderAnimation && (
                <img key={index} src={slide} alt="housing" />
              )}
              <span className="slider-counter">
                {sliderAnimation + 1}/{picturesLength}
              </span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Slider
