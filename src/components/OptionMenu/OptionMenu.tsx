import profile from "../../assets/profileimg.svg"
import personaldata from "../../assets/personaldata.svg"
import accountadd from "../../assets/accountadd.svg"
import signout from "../../assets/SignOut.svg"
import { OptionItem } from "../OptionItem/OptionItem"

type Props = {}

export const OptionMenu: React.FC<Props> = (): JSX.Element => {

    return (
        <div className="flex flex-col bg-gray-records rounded-2xl h-full w-full">
            <OptionItem icon={profile} text={"Profile Image"} url={"/profile/image"}/>
            <div className="border-border-grey border-b"></div>
            <OptionItem icon={personaldata} text={"Personal Data"} url={"/profile/data"}/>
            <div className="border-border-grey border-b"></div>
            <OptionItem icon={accountadd} text={"Add Account"} url={"/"}/>
            <div className="border-border-grey border-b"></div>
            <OptionItem icon={signout}  text={"Sign Out"} url={"/"}/>
        </div>
    )
}
