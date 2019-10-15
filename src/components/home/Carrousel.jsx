import React from "react"
import Slider from "react-slick"
// import slide_one from "../../resources/images/slide_one.jpg"
// import slide_two from "../../resources/images/slide_two.jpg"
// import slide_three from "../../resources/images/slide_three.jpg"
import ts1 from "../../resources/images/ts1.jpg"
import ts2 from "../../resources/images/ts2.jpg"
import ts3 from "../../resources/images/ts3.jpg"
import ts4 from "../../resources/images/ts4.jpg"
import ts5 from "../../resources/images/ts5.jpg"
import ts6 from "../../resources/images/ts6.jpg"
import ts7 from "../../resources/images/ts7.jpg"

const Caurrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }
  return (
    <div
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${ts1})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${ts2})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${ts3})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${ts4})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${ts5})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${ts6})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className='carrousel_image'
            style={{
              background: `url(${ts7})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  )
}
export default Caurrousel
