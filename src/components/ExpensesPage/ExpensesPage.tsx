import { ExpensesGraphic } from "../ExpensesGraphic/ExpensesGraphic";
import { Header } from "../Header/Header";

type Props = {};

export const ExpensesPage: React.FC<Props> = (props): JSX.Element => {

  const testArray:number[] = [1,2,3,4]

  return (
    <>
      <Header arrow={true} content="Expenses" />
      <h3 className="text-white mt-6 text-[20px] text-[#EEEEEECC]">Graphic</h3>
      <div className="flex mt-4 gap-6 w-full justify-end">
        <button className="w-[110px] h-10 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl">Week</button>
        <button className="w-[110px] h-10 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl">Month</button>
      </div>

      <ExpensesGraphic />

      <h3 className="text-white mt-6 text-[20px] text-[#EEEEEECC]">Expenses Record</h3>

      <div className="flex flex-col gap-5 bg-gray-records px-5 py-4 rounded-[20px]">
        {testArray.map((test, i) => {
          return (
            <div key={i}>
              <div className="w-full flex justify-between items-center text-white-faded ">
                <article className="flex gap-4 items-center">
                  <div className="w-[76px] h-[76px] bg-light-blue rounded-full"></div>
                  <p>Clothes</p>
                </article>
                <p>- €400</p>
              </div>
              {
                i < testArray.length - 1 ? (<div className="h-px w-full mt-4 bg-gray-400"></div>) : ("")
              }
            </div>
          );
        })}
      </div>
    </>
  );
};
