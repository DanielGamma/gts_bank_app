import { Outlet, useLocation } from "react-router";
import { NavMenu } from "../NavMenu/NavMenu";
import { Header } from "../Header/Header";
import TransactionsGraphic from "../TransactionsGraphic/TransactionsGraphic";
import { useState } from "react";

type Props = {};

export const RecordsPage: React.FC<Props> = (props): JSX.Element => {

  const { pathname } = useLocation()
  const conditional: boolean = pathname == '/records'
  const [weeklyGraph, setWeeklyGraph] = useState<boolean>(true)
 
  const handleClick = () => {

  }

  
  const testArray = [1,2,3,4,4,4,4,4]
  return (
    <>
      <div className='w-full  '>
        <Header content={conditional ? 'Transactions' : 'Expenses'} arrow={conditional ? false : true} />
        <h2 className='text-white-form text-[20px] font-medium'>Graphic</h2>
        <div className='flex gap-6 w-full justify-end'>
          <button  onClick={handleClick} className='w-[110px] h-10 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl'>Week</button>
          <button  onClick={handleClick} className='w-[110px] h-10 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl'>Month</button>
        </div>
        {
          conditional ? <TransactionsGraphic weeklyGraph={weeklyGraph}/> : <Outlet />
        }

        {
          conditional ? <>
          <p className="text-lg font-medium text-white-faded">{conditional? 'Transactions Record' : 'Expenses Record'}</p>
         
          <div className='flex gap-6 w-full justify-around mb-4'>
            <button className='py-3 px-5 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl'>All</button>
            <button className='py-3 px-5 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl'>Income</button>
            <button className='py-3 px-5 text-white text-[16px] font-medium flex bg-gray-dark justify-center items-center rounded-3xl'>Expenses</button>
          </div></> : ''
        
        }
        <div className="flex flex-col gap-5 bg-gray-records px-5 py-4 rounded-[20px]">
            {
              testArray.map((test, i) => {
                return <>
                  <div  className="w-full flex justify-between items-center text-white-faded ">
                    <article className="flex gap-4 items-center">
                      <div className="w-[76px] h-[76px] bg-light-blue rounded-full"></div>
                      <p>Grocery</p>
                    </article>
                    <p>-€400</p>
                  </div>
                  {
                    i < testArray.length - 1 ? <div className="h-px w-full bg-gray-400"></div> : ''
                  }
                </>
              })
            }
          </div>
        <NavMenu />
      </div>
    </>
  )
}
