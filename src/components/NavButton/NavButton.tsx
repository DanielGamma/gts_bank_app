
import { Link } from "react-router-dom"

type Props = { icon: string, text: string, link: string }

export const NavButton: React.FC<Props> = ({ icon, text, link }): JSX.Element => {

    return (
        <div className="flex flex-col text-gray-nav hover:scale-110 justify-center items-center gap-2" >
            <Link to={link}>
                <img className="focus:w-9" src={icon} alt="" />
            </Link>
            <p className="text-xs leading-[18px] font-medium">{text}</p>
        </div>
    )
}