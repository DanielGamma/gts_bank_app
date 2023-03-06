

import React from "react"
import { NavMenu } from "../NavMenu/NavMenu"
import { OptionMenu } from "../OptionMenu/OptionMenu"
import { ProfileCard } from "../ProfileCard/ProfileCard"

type Props = { }

export const ProfilePage: React.FC<Props> = (): JSX.Element => {



    return (
        <div>
            <p className="text-2xlfont-medium text-white-faded text-center p-2 mb-2">Profile</p>
            <ProfileCard/>
            <OptionMenu/>
            <NavMenu />
        </div>
    )
}