import { Header } from "../Header/Header"

type Props = {}

export const ExpensesPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
      <Header arrow={true} content="Expenses"/>
    </>
  )
}