import { colors } from "../ExpensesGraphic/ExpensesGraphic"


type Props = {
    name: string,
    color: string
}


const Legend: React.FC<Props> = ({ name, color }) => {



    return (
        <div className="flex items-center mb-1 mr-3">
            
            {
                color == '#FED7AA'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#FED7AA]`}></div> :
                color == '#C7D2FE'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#C7D2FE]`}></div> : 
                color == '#FB7185'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#FB7185]`}></div> : 
                color == '#FEE2E2'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#FEE2E2]`}></div> : 
                color == '#7DD3FC'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#7DD3FC]`}></div> : 
                color == '#F7FEE7'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#F7FEE7]`}></div> : 
                color == '#CCFBF1'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#CCFBF1]`}></div> : 
                color == '#2DD4BF'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#2DD4BF]`}></div> : 
                color == '#E9D5FF'? <div className={`w-2 h-2 mr-1 rounded-full bg-[#E9D5FF]`}></div> : ''
            }
            <p className="text-[10px]">{name}</p>
        </div>
    )
}

export default Legend