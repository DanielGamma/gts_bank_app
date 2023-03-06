type Props = { img: string, title: string, subtitle: string }

export const ProfileCard: React.FC<Props> = ({img, title, subtitle}): JSX.Element => {

    return (
        <div className="w-96 h-56 bg-light-blue rounded-3xl mb-24 ">
            <div className="flex flex-col justify-center items-center p-3">
            <img className="w-24 h-24 rounded-full" src={img} alt="" />
            <p className="font-semibold text-3xl text-white-profile pt-5 ">{title}</p>
            <p className="font-medium text-lg text-grey-profile pt-2 ">{subtitle}</p>
            </div>
        </div>
    )
}
