import React, { useEffect, useState } from "react"
import { getUser } from "../../services/firebaseFunctions"
import { User } from "../../services/interfaces"


type Props = {}
export const ProfileCard: React.FC<Props> = (): JSX.Element => {


    const [user, setUser] = useState<User>({
        first_name: '',
        last_name: '',
        account: '',
        profile_picture: '',
        card: {
            card: '',
            card_formatted: '',
            cvc: '',
            expiration_date: '',
            service: ''
        },
        friends: [],
        gender: '',
        phone_number: '',
        transactions: [],
        email: '',
    })


    useEffect(() => {
        getUser('nhI0JztXcOclASp9mtOvr0c8kd53').then((res) => setUser(res))
    }, [])

    console.log("hola")
    console.log(user)

    return (
        <div className="w-96 h-56 bg-light-blue rounded-3xl mb-24 ">
            <div className="flex flex-col justify-center items-center p-3">
            <img className="w-24 h-24 rounded-full" src={user.profile_picture} alt={user.first_name} />
            <p className="font-semibold text-3xl text-white-profile pt-5 ">{user.first_name}</p>
            <p className="font-medium text-lg text-grey-profile pt-2 ">{user.email}</p>
            </div>
        </div>
    )
}
