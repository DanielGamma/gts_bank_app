import { Outlet } from "react-router"
import { NavMenu } from "../NavMenu/NavMenu"
import { TransactionsList } from "../TransactionsList/TransactionsList"
import { Header } from "../Header/Header"

type Props = {}

export const TransferPage: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Header arrow={false} content="Transactions" />
      <Outlet />
      <TransactionsList />
      <NavMenu />
    </>
  )
}