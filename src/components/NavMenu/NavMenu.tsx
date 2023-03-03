
import { NavButton } from "../NavButton/NavButton"
import Home from "../../assets/Home.svg"
import transactions from "../../assets/transactions.svg"
import profile from "../../assets/profile.svg"
import navcards from "../../assets/Card.svg"


type Props = {}
export const NavMenu: React.FC<Props> = (): JSX.Element => {

    return (
        <div className="flex items-center gap-16 fixed bottom-0 py-4 bg-black ">
            <NavButton icon={Home} text={"Home"} link={"/"}/>
            <NavButton icon={navcards} text={"Cards"} link={"/cards"}/>
            <NavButton icon={transactions} text={"Transactions"} link={"/transactions/result"}/>
            <NavButton icon={profile}  text={"Profile"} link={"/profile"}/>
        </div>
    )
}