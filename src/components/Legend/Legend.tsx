import { colors } from "../ExpensesGraphic/ExpensesGraphic"


type Props = {
    name: string,
    color: string
}


const Legend: React.FC<Props> = ({ name, color }) => {



    return (
        <div className="flex items-center mb-1 mr-3">
            
            {
                color == '#003F5C'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#003F5C]`}></div> :
                color == '#374C80'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#374C80]`}></div> : 
                color == '#7A5195'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#7A5195]`}></div> : 
                color == '#BC5090'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#BC5090]`}></div> : 
                color == '#EF5675'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#EF5675]`}></div> : 
                color == '#FF764A'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#FF764A]`}></div> : 
                color == '#FFA600'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#FFA600]`}></div> : 
                color == '#2DD4BF'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#2DD4BF]`}></div> : 
                color == '#E9D5FF'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#E9D5FF]`}></div> : ''
            }
            <p className="text-[10px]">{name}</p>
        </div>
    )
}

export default Legend