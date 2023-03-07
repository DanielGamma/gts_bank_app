import { Swiper, SwiperSlide } from "swiper/react";
import Wifi from "../../assets/wifi";
import MasterCard from "../../assets/MasterCard";
import Bank from "../../assets/Bank";
 // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";


// import required modules
import { Navigation,Scrollbar} from "swiper";

type Props = {}


const Carousel: React.FC<Props> = ({}) => {
    
    const testArray: number[] = [1,2,3,4,5]
    

    

  return (

    <>
    
    <Swiper navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }} modules={[Navigation,Scrollbar]}
      scrollbar={{
        draggable : true,
        hide: true,
        snapOnRelease: true
      }}
    className="mySwiper"
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={index => {
        const slideInfo = document.querySelectorAll(".slide>.carousel>.num>.numb>.numberCard")[index.snapIndex].innerHTML
        console.log(slideInfo); 
      }}
    >
         {
            testArray.map((test, i) => {
                return <SwiperSlide key={i} className=" slide duration-700 ease-in-out">
                <article className="h-[163px] w-[275px] flex flex-col justify-between gap-1 bg-gradient-to-r from-[#0a397e] to-[#703c6d] rounded-md carousel">
                    <div className="flex justify-between p-4">
                    <div className="flex gap-1 items-center">
                            <Bank/>
                            <p className="font-Inter font-bold text-sm text-white">BANK</p>
                    </div>
                    <div><p className="font-Inter font-bold text-sm text-white">CREDIT</p></div>
                    </div>
                    <div className="flex justify-between px-4 num">
                    <div className="numb">
                      <p className="font-Inter font-bold text-sm text-white numberCard">0000  2363  8364  8269</p></div>
                        <div>
                          <Wifi/>
                        </div>
                    </div>
                    <div className="pl-5 flex gap-1">
                        <div className="flex flex-col justify-center">
                            <p className="text-[5px] font-medium text-white">VALID</p>
                            <p  className="text-[5px] font-medium text-white">THRU</p>
                        </div>
                        <div><p className="font-Inter font-bold text-sm text-white validate">5/23</p></div>
                    </div>
                    <div className="flex justify-between px-4 pb-2">
                    <div><p className="font-Inter font-bold text-sm text-white">Andrey Utley</p></div>
                        <div>
                            <MasterCard/>
                        </div>
                    </div>
                </article>
                </SwiperSlide>
            })
            }
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
    </Swiper>
    </>

  )
}
export default Carousel

