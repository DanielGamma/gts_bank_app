import { Swiper, SwiperSlide } from "swiper/react";
import Wifi from "../../assets/wifi";
import MasterCard from "../../assets/MasterCard";
import Bank from "../../assets/Bank";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper";
import { useContext } from "react";
import { corregir, UserContext } from "../../context/UserProvider";

type Props = {}


const Carousel: React.FC<Props> = ({ }) => {

  const { currentUser } = useContext(UserContext) as corregir
  const { card_formatted, cvc, expiration_date, service } = currentUser.card
  // const testArray: number[] = [1, 2, 3]

  return (
    <div className="card-container relative flex justify-center items-center">
      <article className="h-52 w-96 flex flex-col justify-between gap-1 bg-gradient-to-r from-[#0a397e] to-[#703c6d] rounded-md carousel">
        <div className="flex justify-between p-4">
          <div className="flex gap-1 items-center">
            <Bank />
            <p className="font-Inter font-bold text-lg text-white">BANK</p>
          </div>
          <div><p className="font-Inter font-bold text-lg text-white">CREDIT</p></div>
        </div>
        <div className="flex justify-between px-4 num">
          <div className="numb">
            <p className="font-Inter font-bold text-lg text-white numberCard">{card_formatted}</p></div>
          <div>
            <Wifi />
          </div>
        </div>
        <div className="pl-5 flex gap-1">
          <div className="flex flex-col justify-center">
            <p className="text-[5px] font-medium text-white">VALID</p>
            <p className="text-[5px] font-medium text-white">THRU</p>
          </div>
          <div><p className="font-Inter font-bold text-lg text-white validate">{expiration_date}</p></div>
        </div>
        <div className="flex justify-between px-4 pb-2">
          <div><p className="font-Inter font-bold text-lg text-white">{currentUser.first_name} {currentUser.last_name}</p></div>
          <div>
            <img src={service === "visa" ? "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" : "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"} className="w-10"/>
          </div>
        </div>
      </article>
    </div>
  )
}
export default Carousel

