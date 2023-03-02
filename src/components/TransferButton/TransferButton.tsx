import { Link } from "react-router-dom"

type Props = { url: string, icon: string }

export const TransferButton: React.FC<Props> = (props): JSX.Element => {

    return (
        <Link to={{ pathname: `/${props.url}` }}>
            <div className="w-[62px] h-[62px] rounded-full	 bg-light-blue  flex justify-center items-center">
                <img src={props.icon} alt=""/>
            </div>
        </Link>
    )

}