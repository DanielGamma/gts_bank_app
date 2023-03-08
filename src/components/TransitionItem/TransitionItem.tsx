
import { MdAirplanemodeActive } from 'react-icons/md';
import { MdEuroSymbol } from 'react-icons/md';
import { HiShoppingCart } from 'react-icons/hi';
import { IoIosSchool } from 'react-icons/io';
import { IoMdMedkit } from 'react-icons/io';
import { ImFilm } from "react-icons/im";
import { ImHome } from "react-icons/im";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { VscJersey } from "react-icons/vsc";
import { MdRestaurant } from "react-icons/md";


type Props = { text: string, money: number, category: string,  income: number}



export const TransitionItem: React.FC<Props> = ({ text, category, money, income }): JSX.Element => {
    return(
         <>
            <div className="flex  p-2  text-white items-center justify-between ">
                <div className="flex items-center gap-4">
                {category === "Grocery" ?
                <div className='w-12 h-12 rounded-full bg-color-1 flex justify-center items-center'> <HiShoppingCart /></div>
                : category === "Others" ?
                    <div className='w-12 h-12 rounded-full bg-color-2 flex justify-center items-center'> < ImFilm /></div>
                    : category === "Commuting" ?
                        <div className='w-12 h-12 rounded-full bg-color-3 flex justify-center items-center'> < BsFillFuelPumpFill /></div>
                        : category === "Health" ?
                            <div className='w-12 h-12 rounded-full bg-color-4 flex justify-center items-center'> < IoMdMedkit /></div>
                            : category === "Clothes" ?
                                <div className='w-12 h-12 rounded-full bg-color-5 flex justify-center items-center'> < VscJersey /></div>
                                : category === "Home" ?
                                    <div className='w-12 h-12 rounded-full bg-color-6 flex justify-center items-center'> < ImHome /></div>
                                    : category === "Education" ?
                                        <div className='w-12 h-12 rounded-full bg-color-7 flex justify-center items-center'> < IoIosSchool /></div>
                                        : category === "Traveling" ?
                                            <div className='w-12 h-12 rounded-full bg-color-8 flex justify-center items-center'> < MdAirplanemodeActive /></div>
                                            : category === "Leisure" ?
                                                <div className='w-12 h-12 rounded-full bg-color-9	flex justify-center items-center'> < MdRestaurant /></div>
                                                : category === "Salary" ?
                                                    <div className='w-12 h-12 rounded-full bg-slate-300 flex justify-center items-center'> < MdEuroSymbol /></div>
                                                    : category === "Income" ?
                                                        <div className='w-12 h-12 rounded-full bg-slate-300 flex justify-center items-center'> < MdEuroSymbol /></div>
                                                        : ""
            }
                    <h2 >{text}</h2>
                </div>
                <div >
                    <h2 className={`${income === 0 ? 'text-red-300' : 'text-green-200'}`}>€ {money}</h2>
                </div>
            </div>
        </>
    )

}












