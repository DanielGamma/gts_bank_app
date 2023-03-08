
import { BarChart, Bar, XAxis, YAxis,  Tooltip  } from 'recharts';
import { Transaction, Inner } from '../../services/interfaces';
import { sortTransactionsByWeek, sortTransactionsByMonth } from '../../services/utilityFunctions'

type Props = {
    weeklyGraph: boolean,
    list: Transaction[]
};

const TransactionsGraphic: React.FC<Props> = ({ weeklyGraph, list }): JSX.Element => {
    const holdList = weeklyGraph ? sortTransactionsByWeek([...list]) : sortTransactionsByMonth([...list])

    return (
        <>
            <BarChart
                width={369}
                height={240}
                data={holdList}
                margin={{ top: 30, right: 5, bottom: 5, left: 5 }}>
                <XAxis dataKey={'name'} axisLine={false} tickLine={false} />
                <YAxis tickLine={false} />
                <Tooltip />
                <Bar barSize={8} dataKey="income" fill="#5A6ACF" />
                <Bar barSize={8} dataKey="expense" fill="#D8D9DB" />
            </BarChart>
            <div className="ml-24 flex flex-wrap ">
                <div className="flex items-center mb-1 mr-3">
                    <div className={`w-2 h-2 mr-1 rounded-full bg-[#5A6ACF]`}></div>
                    <p className="text-[10px] text-white">Income</p>
                </div>
                <div className="flex items-center mb-1 mr-3">
                    <div className={`w-2 h-2 mr-1 rounded-full bg-[#D8D9DB]`}></div>
                    <p className="text-[10px] text-white">Expense</p>
                </div>
            </div>
        </>
    )
}


export default TransactionsGraphic