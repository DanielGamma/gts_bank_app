import circulo from "../../assets/ellipse.svg"


type Props = {
    text: string,
    money: number,
   
}

export const TransactionItem: React.FC<Props> = ({text,money}): JSX.Element => {

    
    return(
        <div className="flex justify-between items-center mt-4 text-white gap-4">
            <div className="flex items-center">
            <img className="mr-4" src={circulo} alt="" />
            <h2>{text}</h2>
            </div>
            <h2>€ {money}</h2>
        </div>
    )

}
