type Props = { img: string, title: string, subtitle: string, email: string}

export const ProfileCard: React.FC<Props> = ({img, title, subtitle, email}): JSX.Element => {

    return (
        <div className="w-full h-full bg-light-blue rounded-3xl">
            <div className="flex flex-col justify-center items-center p-3">
            <img className="w-24 h-24 rounded-full" src={img} alt="" />
            <p className="font-semibold text-3xl text-white-profile pt-5 ">{title} {subtitle}</p>
            <p className="font-medium text-lg text-grey-profile pt-2 ">{email}</p>
            </div>
        </div>
    )
}
