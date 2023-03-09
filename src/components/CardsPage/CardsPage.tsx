import detail from '../../assets/detail.png'
import newCard from '../../assets/newCard.png'
import cvvPin from '../../assets/cvvPin.png'
import remove from '../../assets/remove.png'
import { Header } from "../Header/Header"
import { NavMenu } from "../NavMenu/NavMenu"
import Carousel from "../Carousel/Carousel"
import { OptionMenu } from "../OptionMenu/OptionMenu"


type Props = {}

export const CardsPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
    <Header arrow={false} content={"My Cards"} url={""}/>
    <Carousel />
    <div className="w-full bg-gray-records rounded-3xl mt-6">
      <OptionMenu icons={[detail, newCard, cvvPin, remove]} texts={["Card Details", "New Card", "Check CVV & PIN", "Remove Card"]} urls={["/cards/details", "/cards/new", "/cards/secret", "/cards"]} />
    </div>
    <NavMenu/>
    </>
  )
}