import {Link} from "react-router-dom"

type Props = { icon: string, text: string, link: string }

export  const NavButton: React.FC<Props> = (props): JSX.Element => {
    let className = "flex flex-col text-gray-nav"

    return (

        <div className={className} >
            <Link to={props.link}>
                <img src={props.icon} alt="" />
            </Link>
            <p className="text-xs leading-[18px] font-medium">{props.text}</p>
        </div>


    )
}