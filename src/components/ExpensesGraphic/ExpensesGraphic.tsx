import { PieChart, Pie, Cell  } from "recharts";

type Props = {};

interface Data {
    name : string,
    value: number
}

export const ExpensesGraphic: React.FC<Props> = (props): JSX.Element => {

  const data:Data[] = [
    { name: "Transportation", value: 450 },
    { name: "Clothes", value: 200 },
    { name: "Home", value: 250 },
    { name: "Education", value: 100 },
    { name: "Catering", value: 500 },
    { name: "Health", value: 350 },
    { name: "Leisure", value: 350 }
  ];

  const COLORS = ["#FF764A", "#FFA600", "#003F5C", "#374C80","#7A5195", "#BC5090", "#EF5675"];

  return (

    <div className="text-white">
            <PieChart width={380} height={310} >
            <Pie
            data={data}
            cx={180}
            cy={150}
            innerRadius={65}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            >
            {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>

        <h3>Categories</h3>
        <div className="flex flex-wrap mb-4">
            {
                data.map((e,i) => {
                    return <div key={i} className="flex items-center mb-1 mr-3">
                            <div className={`w-2 h-2 mr-1 rounded-full bg-[${COLORS[i]}]`}></div>
                            <p className="text-[10px]">{data[i].name}</p>
                        </div> 
                })
            }
        </div>
    </div>

  );
};
