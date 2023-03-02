
import { NavButton } from "../NavButton/NavButton"
import Home from "../../assets/Home.svg"
import transactions from "../../assets/transactions.svg"
import profilehead from "../../assets/profileHead.svg"
import profilebody from "../../assets/profileBody.svg"
import navcards from "../../assets/Cards.svg"


type Props = { icon: string, text: string, link: string }

export const NavMenu: React.FC<Props> = (): JSX.Element => {

    return (
        <div>
            <NavButton icon={Home} text={"Home"} link={"/"}/>
            <NavButton icon={navcards} text={"Cards"} link={"/cards"}/>
            <NavButton icon={transactions} text={"Transactions"} link={"/transactions/result"}/>
            <NavButton icon={profilebody} text={"Profile"} link={"/profile"}/>
        </div>
    )
}