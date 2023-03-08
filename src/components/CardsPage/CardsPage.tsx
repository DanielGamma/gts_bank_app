import { Header } from "../Header/Header"
import { NavMenu } from "../NavMenu/NavMenu"
import Carousel from "../Carousel/Carousel"
import MyCards from "../MyCards/MyCards"


type Props = {}

export const CardsPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
    <Header arrow={false} content={"My Cards"} url={""}/>
    <Carousel />
    <MyCards />
    <NavMenu/>
    </>
  )
}