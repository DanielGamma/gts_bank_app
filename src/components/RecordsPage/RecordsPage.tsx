import { Outlet } from "react-router";
import { NavMenu } from "../NavMenu/NavMenu";

type Props = {};

export const RecordsPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
      <Outlet />
      <h1></h1>
      <NavMenu />
    </>
  )
}
