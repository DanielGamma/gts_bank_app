
import { Link } from "react-router-dom"
import Vector from "../../assets/Vector.svg"

type Props = { icon: string, text: string, url: string }
export const OptionItem: React.FC<Props> = ({ icon, text, url }): JSX.Element => {
    return (
        <div className="p-4">
            <Link to={url}>
                <div className="flex gap-4 justify-between">
                    <div className="w-[62px] h-[62px] rounded-full bg-gray-bgIcons flex justify-center items-center">
                        <img src={icon} alt="" />
                    </div>
                    <div className="flex items-center">
                        <p className="text-white">{text}</p>
                    </div>
                    <img src={Vector} alt="" />
                </div>
            </Link>
        </div>
    )
}
