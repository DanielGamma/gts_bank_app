import profile from "../../assets/profileimg.svg"
import personaldata from "../../assets/personaldata.svg"
import accountadd from "../../assets/accountadd.svg"
import signout from "../../assets/signOut.svg"

import React, { useContext } from "react"
import { corregir, UserContext } from "../../context/UserProvider"
import { Header } from "../Header/Header"
import { NavMenu } from "../NavMenu/NavMenu"
import { OptionMenu } from "../OptionMenu/OptionMenu"
import { ProfileCard } from "../ProfileCard/ProfileCard"

export const ProfilePage: React.FC = (): JSX.Element => {

    const { currentUser } = useContext(UserContext) as corregir;

    return (
        <>
        <Header arrow={false} content="Profile" url="" />
        <div className="flex flex-col justify-start items-center gap-6">
            <ProfileCard img={currentUser.profile_picture} title={currentUser.first_name} subtitle={currentUser.last_name} email={currentUser.email}/>
            <OptionMenu icons={[profile, personaldata, accountadd, signout]} texts={["Profile Image", "Personal Data", "Add Account", "Sign Out"]} urls={["/profile/image", "/profile/data", "/profile", "/"]} />
            <NavMenu />
        </div>
        </>    
    )
}