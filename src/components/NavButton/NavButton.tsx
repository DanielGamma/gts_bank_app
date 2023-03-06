
import { Link , Location, useLocation} from "react-router-dom"

type Props = { icon: string, iconWhite: string, text: string, link: string }

export const NavButton: React.FC<Props> = ({ icon, iconWhite, text, link }): JSX.Element => {

    const location : Location = useLocation();

    const isInRoute = location.pathname === link

    return (
        <div className="flex flex-col text-gray-nav hover:scale-110 justify-center items-center gap-2"  >
            <Link to={link}>
                <img className="focus:w-9" src={ isInRoute ? iconWhite : icon} alt="" />
            </Link>
            <p className={"text-xs leading-[18px] font-medium " + (isInRoute ? "text-white" : "text-gray-nav")}>{text}</p>
        </div>
    )
}