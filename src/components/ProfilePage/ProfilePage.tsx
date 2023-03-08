

import React, { useContext } from "react"
import { corregir, UserContext } from "../../context/UserProvider"
import { Header } from "../Header/Header"
import { NavMenu } from "../NavMenu/NavMenu"
import { OptionMenu } from "../OptionMenu/OptionMenu"
import { ProfileCard } from "../ProfileCard/ProfileCard"

type Props = { }

export const ProfilePage: React.FC<Props> = (): JSX.Element => {


    const { currentUser } = useContext(UserContext) as corregir; 

    return (
        <>
        <Header arrow={false} content="Profile" url="" />
        <div className="flex flex-col justify-start items-center gap-6">
            <ProfileCard img={currentUser.profile_picture} title={currentUser.first_name} subtitle={currentUser.last_name} email={currentUser.email}/>
            <OptionMenu/>
            <NavMenu />
        </div>
        </>
            
    )
}