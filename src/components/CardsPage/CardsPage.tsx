import { Outlet } from "react-router"
import { NavMenu } from "../NavMenu/NavMenu"

type Props = {}

export const CardsPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
    <Outlet/>
    <div>CardsPage</div>
    <NavMenu/>
    </>
  )
}