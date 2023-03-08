

import React, { useContext } from "react"
import { corregir, UserContext } from "../../context/UserProvider"
import { NavMenu } from "../NavMenu/NavMenu"
import { OptionMenu } from "../OptionMenu/OptionMenu"
import { ProfileCard } from "../ProfileCard/ProfileCard"

type Props = { }

export const ProfilePage: React.FC<Props> = (): JSX.Element => {


    const { currentUser } = useContext(UserContext) as corregir; 

    return (
        <div className="pb-20">
            <p className="text-2xlfont-medium text-white-faded text-center p-2 mb-2">Profile</p>
            <ProfileCard img={currentUser.profile_picture} title={currentUser.first_name} subtitle={currentUser.last_name} email={currentUser.email}/>
            <OptionMenu/>
            <NavMenu />
        </div>
    )
}