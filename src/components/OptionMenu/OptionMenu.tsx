import { OptionItem } from "../OptionItem/OptionItem"

type Props = {
    icons: string[],
    texts: string[],
    urls: string[]
}

export const OptionMenu: React.FC<Props> = ({ icons, texts, urls }: Props): JSX.Element => {

    return (
        <div className="flex flex-col items-start bg-gray-records rounded-2xl h-full w-full p-4">
            {icons.map((icon, i) => {
                return (
                    <>
                        <OptionItem key={i} icon={icon} text={texts[i]} url={urls[i]} />
                        <div className={i === icons.length - 1 ? "hidden" : `h-px w-full mt-4 mb-4 bg-white`}></div>
                    </>
                )
            })}
        </div>
    )
}
