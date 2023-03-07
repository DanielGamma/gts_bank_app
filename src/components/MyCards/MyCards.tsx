import React from 'react'
import { Header } from '../Header/Header'

type Props = {}

const MyCards = (props: Props) => {
  return (
    <>
      <Header arrow={false} content='My Cards' url='' />
      <div className="w-full bg-gray-records rounded-3xl">
        <div className="p-5 w-full flex justify-between items-center text-white-form border-b border-border-grey">
          <div className="flex gap-4 items-center">
            <article className="w-14 h-14 bg-gray-400 rounded-full"></article>
            <p>Card Details</p>
          </div>
          <p className="">{'>'}</p>
        </div>
        <div className="p-5 w-full flex justify-between items-center text-white-form border-b border-border-grey">
          <div className="flex gap-4 items-center">
            <article className="w-14 h-14 bg-gray-400 rounded-full"></article>
            <p>Card Details</p>
          </div>
          <p className="">{'>'}</p>
        </div>
        <div className="p-5 w-full flex justify-between items-center text-white-form border-b border-border-grey">
          <div className="flex gap-4 items-center">
            <article className="w-14 h-14 bg-gray-400 rounded-full"></article>
            <p>Card Details</p>
          </div>
          <p className="">{'>'}</p>
        </div>
        <div className="p-5 w-full flex justify-between items-center text-white-form ">
          <div className="flex gap-4 items-center">
            <article className="w-14 h-14 bg-gray-400 rounded-full"></article>
            <p>Card Details</p>
          </div>
          <p className="">{'>'}</p>
        </div>
      </div>
    </>
  )
}

export default MyCards