import React from 'react'
import { Header } from '../Header/Header'
import detail from '../../assets/detail.png'
import newCard from '../../assets/newCard.png'
import cvvPin from '../../assets/cvvPin.png'
import remove from '../../assets/remove.png'
import { Link } from 'react-router-dom'
import { OptionMenu } from '../OptionMenu/OptionMenu'


type Props = {}

const MyCards = (props: Props) => {
  return (
    <>
      {/* <Header arrow={false} content='My Cards' url='' /> */}
      <div className="w-full bg-gray-records rounded-3xl mt-6">
        <OptionMenu icons={[detail, newCard, cvvPin, remove]} texts={["Card Details", "New Card", "Check CVV & PIN", "Remove Card"]} urls={["/cards/details", "/cards/new", "/cards/secret", "/cards"]} />
      </div>
    </>
  )
}

export default MyCards