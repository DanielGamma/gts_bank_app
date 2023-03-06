import { Outlet } from "react-router"
import { NavMenu } from "../NavMenu/NavMenu"
import Carousel from "../Carousel/Carousel"


type Props = {}

export const CardsPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
    <Outlet/>
    <h2 className="text-white-faded text-center font-medium text-2xl mb-10">My cards</h2>
    <Carousel/>
    <NavMenu/>
    </>
  )
}