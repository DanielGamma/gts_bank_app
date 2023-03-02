import NavButton from "../NavButton/NavButton"
import Home from "../../assets/Home.svg"
import Home from "../../assets/Home.svg"
import transactions from "../../assets/transactions.svg"
import profilehead from "../../assets/profileHead.svg"
import profilebody from "../../assets/profileBody.svg"
import navcards from "../../assets/Cards.svg"


export default function NavMenu(){

    return(
        <>
        <NavButton icon={Home} text={"Home"} link={"/"}/> 
        <NavButton icon={navcards} text={"Cards"} link={"/cards"} />
        <NavButton icon={transactions} text={"Transactions"} link={"/transactions/result"} />
        <NavButton icon={profilebody} text={"Profile"} link={"/profile"} />
        </>
    )
}