
import { NavButton } from "../NavButton/NavButton"
import Home from "../../assets/home.svg"
import transactions from "../../assets/transactions.svg"
import profile from "../../assets/profile.svg"
import navcards from "../../assets/card.svg"
import HomeWhite from "../../assets/Home-white.svg"
import transactionsWhite from "../../assets/transactions-white.svg"
import profileWhite from "../../assets/profile-white.svg"
import navcardsWhite from "../../assets/CardWhite.svg"


type Props = {}
export const NavMenu: React.FC<Props> = (): JSX.Element => {

    return (
        <div className="flex items-center gap-16 fixed bottom-0 py-4 bg-black ">
            <NavButton icon={Home} iconWhite={HomeWhite} text={"Home"} link={"/"}/>
            <NavButton icon={navcards} iconWhite={navcardsWhite} text={"Cards"} link={"/cards"}/>
            <NavButton icon={transactions} iconWhite={transactionsWhite} text={"Transactions"} link={"/transactions/result"}/>
            <NavButton icon={profile}  iconWhite={profileWhite} text={"Profile"} link={"/profile"}/>
        </div>
    )
}
