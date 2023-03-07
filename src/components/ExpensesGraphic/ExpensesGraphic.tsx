import { PieChart, Pie, Cell } from "recharts";
import { Transaction } from "../../services/interfaces";
import { sortByCategory} from "../../services/utilityFunctions";

type Props = {
  list: Transaction[]
};

export const ExpensesGraphic: React.FC<Props> = ({ list }): JSX.Element => {

  type Color = {
    [index: string]: string
  }
  const colors: Color = {
    Grocery: '#FED7AA',
    Others: '#C7D2FE',
    Commuting: '#FEE2E2',
    Health: '#FB7185',
    Home: '#7DD3FC',
    Education: '#F7FEE7',
    Traveling: '#CCFBF1',
    Leisure: '#2DD4C0',
    Clothes: '#E9D5FF'
  }

  const holdList = sortByCategory([...list].filter(transac => transac.type === 0))

  return (

    <>
      <div className="mt-5">
        <PieChart width={380} height={310} >
          <Pie
            data={holdList}
            cx={180}
            cy={150}
            label={true}
            labelLine={true}
            innerRadius={20}
            outerRadius={90}
            paddingAngle={0}
            dataKey="expense"
            animationDuration={1000}
            animationBegin={0}
          >
            {
              holdList.map((entry, index) => (
                <Cell key={index} fill={colors[entry.name]} />
              ))
            }
          </Pie>
        </PieChart>
      </div>
      <div className="text-white">
        <h3>Categories</h3>
        <div className="flex flex-wrap ">
          {
            holdList.map((e, i) => {
              return <div key={i} className="flex items-center mb-1 mr-3">
                <div className={`w-2 h-2 mr-1 rounded-full bg-[${colors[e.name]}]`}></div>
                <p className="text-[10px]">{e.name}</p>
              </div>
            })
          }
        </div>
      </div>

    </>

  );
};
