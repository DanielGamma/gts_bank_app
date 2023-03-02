import { Link } from "react-router-dom"

type Props = {
    url: string,
    icon: string,
    text: string
}

export const TransferButton: React.FC<Props> = ({ url, icon, text }: Props): JSX.Element => {

    return (
        <Link to={{ pathname: `/${url}` }} className="flex flex-col justify-center items-center gap-2">
            <div className="w-[62px] h-[62px] rounded-full bg-light-blue flex justify-center items-center">
                <img src={icon} alt="" />
            </div>
            <p className='font-normal alings-center text-white-form'>{text}</p>
        </Link>
    )

}