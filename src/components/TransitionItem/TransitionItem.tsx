
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


type Props = { text: string, money: number, category: string }



export const TransitionItem: React.FC<Props> = ({ text, category, money }): JSX.Element => {
    return(
         <>
        
            <div className="flex  p-2  text-white items-center justify-between ">
                <div className="flex items-center gap-4">
                {category === "Grocery" ?
                <div className='w-12 h-12 rounded-full bg-orange-200 flex justify-center items-center'> <HiShoppingCart /></div>
                : category === "Others" ?
                    <div className='w-12 h-12 rounded-full bg-indigo-200 flex justify-center items-center'> < ImFilm /></div>
                    : category === "Commuting" ?
                        <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'> < BsFillFuelPumpFill /></div>
                        : category === "Health" ?
                            <div className='w-12 h-12 rounded-full bg-rose-400 flex justify-center items-center'> < IoMdMedkit /></div>
                            : category === "Clothes" ?
                                <div className='w-12 h-12 rounded-full bg-purple-200 flex justify-center items-center'> < VscJersey /></div>
                                : category === "Home" ?
                                    <div className='w-12 h-12 rounded-full bg-sky-300 flex justify-center items-center'> < ImHome /></div>
                                    : category === "Education" ?
                                        <div className='w-12 h-12 rounded-full bg-lime-50 flex justify-center items-center'> < IoIosSchool /></div>
                                        : category === "Traveling" ?
                                            <div className='w-12 h-12 rounded-full bg-teal-100	flex justify-center items-center'> < MdAirplanemodeActive /></div>
                                            : category === "Leisure" ?
                                                <div className='w-12 h-12 rounded-full bg-teal-400	flex justify-center items-center'> < MdRestaurant /></div>
                                                : category === "Salary" ?
                                                    <div className='w-12 h-12 rounded-full bg-slate-300 flex justify-center items-center'> < MdEuroSymbol /></div>
                                                    : category === "Income" ?
                                                        <div className='w-12 h-12 rounded-full bg-slate-300 flex justify-center items-center'> < MdEuroSymbol /></div>
                                                        : ""
            }
                    <h2>{text}</h2>
                </div>
                <div >
                    <h2>€ {money}</h2>
                </div>
            </div>
                <hr className='my-1' />

        
        </>
    )

}












