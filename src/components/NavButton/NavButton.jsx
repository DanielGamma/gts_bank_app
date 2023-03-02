
import { Link } from "react-router-dom"


export default function NavButton({ icon, text, link }) {

    let className = "flex flex-col text-gray-nav"
   /**url q es ??? */
    if (link === url) {
        className
    }

    return (
        <div className={className} >
            <Link to={link}>
                <img src={icon} alt="" />
            </Link>
            <p className="text-xs leading-[18px] font-medium">{text}</p>
        </div>
    )
}
