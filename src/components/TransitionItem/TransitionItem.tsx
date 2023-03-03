
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

const categorys = ["Grocery", "Others", "Commuting", "Health", "Clothes", "Home", "Education", "Traveling", "Leisure", "Salary", "Income"]

export const TransitionItem: React.FC<Props> = (props): JSX.Element => {
    return (
        <>
            categorys === "Grocery"?
            <div className='w-12 h-12 rounded-full bg-orange-200 flex justify-center items-center'> <HiShoppingCart /></div>
            :categorys === "Others"?
            <div className='w-12 h-12 rounded-full bg-indigo-200 flex justify-center items-center'> < ImFilm /></div>
            :categorys === "Commuting"?
            <div className='w-12 h-12 rounded-full bg-red-100 flex justify-center items-center'> < BsFillFuelPumpFill /></div>
            :categorys === "Health"?
            <div className='w-12 h-12 rounded-full bg-rose-400 flex justify-center items-center'> < IoMdMedkit /></div>
            :categorys === "Clothes"?
            <div className='w-12 h-12 rounded-full bg-purple-200 flex justify-center items-center'> < VscJersey /></div>
            :categorys === "Home"?
            <div className='w-12 h-12 rounded-full bg-sky-300 flex justify-center items-center'> < ImHome /></div>
            :categorys === "Education"?
            <div className='w-12 h-12 rounded-full bg-lime-50 flex justify-center items-center'> < IoIosSchool /></div>
            :categorys === "Traveling"?
            <div className='w-12 h-12 rounded-full bg-teal-100	flex justify-center items-center'> < MdAirplanemodeActive /></div>
            :categorys === "Leisure"?
            <div className='w-12 h-12 rounded-full bg-teal-400	flex justify-center items-center'> < MdRestaurant /></div>
            :categorys === "Salary"?
            <div className='w-12 h-12 rounded-full bg-slate-300 flex justify-center items-center'> < MdEuroSymbol /></div>
            :categorys === "Income"?
            <div className='w-12 h-12 rounded-full bg-slate-300 flex justify-center items-center'> < MdEuroSymbol /></div>
            :null
        </>

    )

}












