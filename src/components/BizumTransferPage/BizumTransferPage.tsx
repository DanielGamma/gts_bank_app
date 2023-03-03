import { Header } from "../Header/Header"

type Props = {}

export const BizumTransferPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <Header arrow={true} content={"Bizum"} />
  )
}