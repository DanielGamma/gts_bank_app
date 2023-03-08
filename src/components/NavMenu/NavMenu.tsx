import { NavButton } from "../NavButton/NavButton"
import Home from "../../assets/Home.svg"
import transactions from "../../assets/transactions.svg"
import profile from "../../assets/profile.svg"
import navcards from "../../assets/Card.svg"
import HomeWhite from "../../assets/Home-white.svg"
import transactionsWhite from "../../assets/transactions-white.svg"
import profileWhite from "../../assets/profile-white.svg"
import navcardsWhite from "../../assets/CardWhite.svg"


type Props = {}
export const NavMenu: React.FC<Props> = (): JSX.Element => {

    return (
        <div className="flex items-center gap-16 bottom-0 py-4 bg-black pt-11">
            <NavButton icon={Home} iconWhite={HomeWhite} text={"Home"} link={"/home"}/>
            <NavButton icon={navcards} iconWhite={navcardsWhite} text={"Cards"} link={"/cards"}/>
            <NavButton icon={transactions} iconWhite={transactionsWhite} text={"Transactions"} link={"/records"}/>
            <NavButton icon={profile}  iconWhite={profileWhite} text={"Profile"} link={"/profile"}/>
        </div>
    )
}