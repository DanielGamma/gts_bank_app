
type Props = { title: string, subtitle: string, img: string }
export const ProfileCard: React.FC<Props> = ({ title, subtitle, img}): JSX.Element => {
    return (
        <div className="w-96 h-56	bg-light-blue rounded-3xl flex flex-col">
            <img src={img} alt="" />
            <p className="font-semibold text-3xl text-light-blue ">{title}</p>
            <p className="font-medium text-lg text-light-blue	">{subtitle}</p>
           
        </div>
    )
}
