import { PieChart, Pie, Cell } from "recharts";
import { Transaction } from "../../services/interfaces";
import { sortByCategory} from "../../services/utilityFunctions";
import Legend from "../Legend/Legend";

type Props = {
  list: Transaction[]

};

type Color = {
  [index: string]: string
}

export const colors: Color = {
  Grocery: '#003F5C',
  Others: '#374C80',
  Commuting: '#7A5195',
  Health: '#BC5090',
  Home: '#EF5675',
  Education: '#FF764A',
  Traveling: '#FFA600',
  Leisure: '#2DD4BF',
  Clothes: '#E9D5FF'
}

export const ExpensesGraphic: React.FC<Props> = ({ list }): JSX.Element => {

  const holdList = sortByCategory([...list].filter(transac => transac.type === 0))

  return (

    <>
      <div>
        <PieChart width={380} height={300} >
          <Pie
            data={holdList}
            cx={180}
            cy={150}
            label={true}
            labelLine={true}
            innerRadius={70}
            outerRadius={120}
            paddingAngle={0}
            dataKey="expense"
            animationDuration={1000}
            animationBegin={0}
            stroke={"none"}
          >
            {
              holdList.map((entry, index) => (
                <Cell key={index} fill={colors[entry.name]} />
              ))
            }
          </Pie>
        </PieChart>
      </div>
      <div className="mt-4 text-white">
        <h3>Categories</h3>
        <div className="flex flex-wrap ">
          {
            holdList.map((e, i) => {
              return <Legend key={i} name={e.name} color={colors[e.name]}/>
            })
          }
        </div>
      </div>

    </>

  );
};
