
type Props = { text: string }

export const FormButton: React.FC<Props> = (props): JSX.Element => {

    return (
        <input type="submit" className="bg-gray-dark rounded-t-xl w-full flex justify-center items-center px-6 py-2 mt-12 text-white-faded" value={props.text}/>
    )

}

