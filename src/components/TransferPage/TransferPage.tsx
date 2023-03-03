import { Outlet } from "react-router"
import { NavMenu } from "../NavMenu/NavMenu"
import { TransactionsList } from "../TransactionsList/TransactionsList"

type Props = {}

export const TransferPage: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Outlet />
      <TransactionsList />
      <NavMenu />
    </>
  )
}