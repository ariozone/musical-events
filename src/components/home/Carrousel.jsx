import React from "react"
import Slider from "react-slick"

import ts1 from "../../resources/images/ts1.jpg"
import ts2 from "../../resources/images/ts2.jpg"
import ts3 from "../../resources/images/ts3.jpg"
import ts4 from "../../resources/images/ts4.jpg"
import ts5 from "../../resources/images/ts5.jpg"
import ts6 from "../../resources/images/ts6.jpg"
import ts7 from "../../resources/images/ts7.jpg"
import ts8 from "../../resources/images/ts8.jpg"
import ts9 from "../../resources/images/ts9.jpg"
import ts0 from "../../resources/images/ts0.jpg"

export const imagesArr = [ts1, ts2, ts3, ts4, ts5, ts6, ts7, ts8, ts9, ts0]

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
