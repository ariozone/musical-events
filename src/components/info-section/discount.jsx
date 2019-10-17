import React from "react"
import { Fade, Slide } from "react-reveal"
import PurchaseButton from "../common/Button"

// const Discount = () => {
//   const [discountStart, setDiscountStart] = useState(0)
//   const [discountEnd] = useState(35)

//   const loadPercentage = useCallback(() => {
//     discountStart < discountEnd && setDiscountStart(discountStart + 1)
//   }, [discountStart, discountEnd])

//   useEffect(() => {
//     setTimeout(() => {
//       loadPercentage()
//     }, 30)
//   }, [loadPercentage])

class Discount extends React.Component {
  state = {
    discountEnd: 35,
    discountStart: 0
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.loadPercentage()
    }, 30)
  }
  loadPercentage = () => {
    this.state.discountStart < this.state.discountEnd &&
      this.setState({ discountStart: this.state.discountStart + 1 })
  }
  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={() => this.loadPercentage()}>
            <div className='discount_percentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before Jan 2020</h3>
              <p>
                If you’re verified as a Fan Club member, you’ll receive a text
                prior to the Verified Fan Fan Club Member presale that begins on
                Monday, October 14th at 10 am local time. The general public
                Verified Fan presale will follow during this date. Being
                verified for either presale would mean you’d receive a link to
                purchase and a unique access code. This text would come anywhere
                from 2-4 hours prior to the presale at 10 am local time.
              </p>
              <PurchaseButton></PurchaseButton>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

export default Discount
