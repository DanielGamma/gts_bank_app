import { Header } from "../Header/Header"
import {FormButton} from '../FormButton/FormButton'

type Props = {}

export const TransferPage: React.FC<Props> = (props):JSX.Element => {
  return (
  <>
    <Header arrow={true} content="Transfer"/>
    <div>TransferPage</div>
    <FormButton text={"Send"}/>
  </>
  )
}