
import { useContext } from "react"
import { NavMenu } from "../NavMenu/NavMenu"
import { OptionMenu } from "../OptionMenu/OptionMenu"
import { ProfileCard } from "../ProfileCard/ProfileCard"
import { userContext } from "../UserProvider/UserProvider"



type Props = { title: string, subtitle: string, img: string}

export const ProfilePage: React.FC<Props> = ({ title, subtitle, img }): JSX.Element => {

    const {currentUser} = useContext(userContext)

    console.log(currentUser)

    return (
        <div className="">
            <p className="text-2xl	font-medium	text-white-faded">Profile</p>
            <ProfileCard title={title} subtitle={subtitle} img={img} />
            <OptionMenu/>
            <NavMenu />
        </div>
    )
}