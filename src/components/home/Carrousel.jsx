import React from "react"
import Slider from "react-slick"
import imagesArr from "../../resources/images/images"

const Caurrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  const createCaurrouselSlides = () => {
    return imagesArr.map(image => (
      <div key={image}>
        <div
          className='carrousel_image'
          style={{
            background: `url(${image})`,
            height: `${window.innerHeight}px`
          }}
        ></div>
      </div>
    ))
  }

  return (
    <div
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>{createCaurrouselSlides()}</Slider>
    </div>
  )
}
export default Caurrousel
