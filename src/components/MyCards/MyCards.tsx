import React from 'react'
import { Header } from '../Header/Header' 
import detail from '../../assets/detail.png' 
import newCard from '../../assets/newCard.png' 
import cvvPin from '../../assets/cvvPin.png' 
import remove from '../../assets/remove.png'
import { Link } from 'react-router-dom' 


type Props = {}

const MyCards = (props: Props) => {
  return (
    <>
      {/* <Header arrow={false} content='My Cards' url='' /> */}
      <div className="w-full bg-gray-records rounded-3xl mt-6">
        
        <Link to="details">
          <div className="p-5 w-full flex justify-between items-center text-white-form border-b border-border-grey"> 
            <div className="flex gap-4 items-center"> 
              <article className="w-14 h-14 bg-gray-400 rounded-full flex justify-center items-center"> 
              <img src={detail} alt="foto" />
              </article>
              <p>Card Details</p>
            </div>
            <p className="">{'>'}</p>
          </div> 
        </Link> 

        <Link to="new"> 
          <div className="p-5 w-full flex justify-between items-center text-white-form border-b border-border-grey">
            <div className="flex gap-4 items-center">
              <article className="w-14 h-14 bg-gray-400 rounded-full flex justify-center items-center"> 
                <img src={newCard} alt="foto" />
              </article> 
              <p>New Card</p>
            </div>
            <p className="">{'>'}</p>
          </div>  
        </Link>

        <Link to="secret"> 
          <div className="p-5 w-full flex justify-between items-center text-white-form border-b border-border-grey">
            <div className="flex gap-4 items-center">
              <article className="w-14 h-14 bg-gray-400 rounded-full flex justify-center items-center"> 
                <img src={cvvPin} alt="foto" />
              </article>
              <p>Check CVV & PIN</p>
            </div>
            <p className="">{'>'}</p>
          </div> 
        </Link> 

        <Link to="/cards"> 
          <div className="p-5 w-full flex justify-between items-center text-white-form ">
            <div className="flex gap-4 items-center">
              <article className="w-14 h-14 bg-gray-400 rounded-full flex justify-center items-center"> 
                <img src={remove} alt="foto" />
              </article>
              <p>Remove Card</p>
            </div>
            <p className="">{'>'}</p>
          </div> 
        </Link> 
      </div>
    </>
  )
}

export default MyCards