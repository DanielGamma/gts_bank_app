import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

type Props = {}


const Carousel: React.FC<Props> = ({}) => {
    
    const testArray: number[] = [1]
    


  return (

    <>
    
    <Swiper navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }} modules={[Navigation]} className="mySwiper"
      spaceBetween={20}
      slidesPerView={1}>
         {
            testArray.map((test, i) => {
                return <SwiperSlide key={i} className=" duration-700 ease-in-out">
                <article className="h-[163px] w-[275px] flex flex-col justify-between gap-1 bg-gradient-to-r from-[#0a397e] to-[#703c6d] rounded-md carousel">
                    <div className="flex justify-between p-4">
                    <div className="flex gap-1 items-center">
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8849 6.34477C12.2569 6.34477 12.6137 6.21381 12.8768 5.98071C13.1399 5.74761 13.2877 5.43145 13.2877 5.10179C13.2877 4.77214 13.1399 4.45598 12.8768 4.22288C12.6137 3.98977 12.2569 3.85882 11.8849 3.85882C11.5128 3.85882 11.156 3.98977 10.8929 4.22288C10.6298 4.45598 10.482 4.77214 10.482 5.10179C10.482 5.43145 10.6298 5.74761 10.8929 5.98071C11.156 6.21381 11.5128 6.34477 11.8849 6.34477ZM13.2615 0.469642C12.8724 0.189451 12.3863 0.036499 11.8849 0.036499C11.3834 0.036499 10.8973 0.189451 10.5082 0.469642L1.15207 7.20656C0.0148244 8.02858 0.66949 9.65936 2.13594 9.65936H2.53248V16.62C1.42142 17.1222 0.662008 18.1447 0.662008 19.3264V20.4318C0.662008 20.6516 0.760542 20.8623 0.935933 21.0178C1.11132 21.1732 1.34921 21.2605 1.59725 21.2605H22.1725C22.4205 21.2605 22.6584 21.1732 22.8338 21.0178C23.0092 20.8623 23.1077 20.6516 23.1077 20.4318V19.3264C23.1077 18.1464 22.3483 17.1222 21.2372 16.62V9.65936H21.6338C23.1002 9.65936 23.7549 8.02693 22.6158 7.20656L13.2634 0.467985L13.2615 0.469642ZM11.6903 1.75571C11.7459 1.71588 11.8152 1.69416 11.8867 1.69416C11.9582 1.69416 12.0275 1.71588 12.0831 1.75571L20.7528 8.00207H3.01506L11.6903 1.75405V1.75571ZM19.3668 16.2886H17.4963V9.65936H19.3668V16.2886ZM15.6258 16.2886H12.8201V9.65936H15.6258V16.2886ZM10.9496 16.2886H8.14391V9.65936H10.9496V16.2886ZM19.6791 17.9459C20.5395 17.9459 21.2372 18.564 21.2372 19.3264V19.6032H2.53248V19.3264C2.53248 18.564 3.23017 17.9459 4.09059 17.9459H19.6791ZM6.27343 16.2886H4.40296V9.65936H6.27343V16.2886Z" fill="white"/>
                            </svg>
                            <p className="font-Inter font-bold text-sm text-white">BANK</p>
                    </div>
                    <div><p className="font-Inter font-bold text-sm text-white">CREDIT</p></div>
                    </div>
                    <div className="flex justify-between px-4">
                    <div><p className="font-Inter font-bold text-sm text-white">0000  2363  8364  8269</p></div>
                        <div>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.73056 13.2281C5.76459 13.7823 6.27097 14.2056 6.86158 14.1737C7.45219 14.1418 7.90339 13.6667 7.86936 13.1125C7.83533 12.5584 7.32895 12.135 6.73834 12.1669C6.14773 12.1989 5.69653 12.674 5.73056 13.2281Z" fill="white"/>
                            <path d="M12.1469 12.8812C12.0672 11.5826 11.4539 10.3635 10.4359 9.48041C10.2271 9.29947 9.95012 9.20379 9.66605 9.21443C9.38198 9.22506 9.11405 9.34115 8.9212 9.53713C8.72835 9.73312 8.62638 9.99297 8.63771 10.2595C8.64905 10.526 8.77277 10.7774 8.98165 10.9584C9.57274 11.4981 9.92691 12.226 9.97436 12.9987C10.0218 13.7713 9.75908 14.5326 9.23798 15.1324C9.05263 15.3347 8.9605 15.5978 8.98187 15.8638C9.00323 16.1297 9.13634 16.3769 9.3519 16.5508C9.56747 16.7247 9.84784 16.8111 10.1313 16.7911C10.4148 16.771 10.6782 16.6462 10.8636 16.4439C11.7667 15.4569 12.2267 14.1799 12.1469 12.8812ZM17.4939 12.5921C17.4186 11.3803 17.0841 10.1951 16.5104 9.1071C15.9367 8.0191 15.1354 7.05058 14.1544 6.25924C14.0455 6.17324 13.9197 6.1082 13.7841 6.06783C13.6484 6.02746 13.5057 6.01255 13.3639 6.02396C13.2221 6.03536 13.0841 6.07286 12.9578 6.1343C12.8315 6.19574 12.7193 6.27992 12.6276 6.38205C12.4425 6.5883 12.3523 6.8551 12.3768 7.12375C12.389 7.25677 12.429 7.38624 12.4944 7.50478C12.5599 7.62331 12.6497 7.72858 12.7585 7.81458C13.5232 8.4306 14.1477 9.18497 14.5947 10.0326C15.0417 10.8802 15.3019 11.8037 15.3599 12.7478C15.4179 13.6919 15.2724 14.6373 14.9321 15.5275C14.5919 16.4176 14.0639 17.2343 13.3796 17.9287C13.2843 18.0271 13.2107 18.1422 13.1631 18.2675C13.1156 18.3928 13.095 18.5256 13.1025 18.6584C13.1154 18.8545 13.1891 19.0427 13.3147 19.1998C13.4403 19.3569 13.6122 19.4761 13.8092 19.5426C14.0062 19.609 14.2196 19.6199 14.4231 19.5738C14.6266 19.5277 14.8112 19.4266 14.9542 19.2832C15.8368 18.3864 16.5168 17.3312 16.9533 16.1813C17.3897 15.0314 17.5736 13.8105 17.4939 12.5921Z" fill="white"/>
                            <path d="M19.2372 22.2832C21.7685 19.5192 23.0582 15.9416 22.8348 12.3034C22.6114 8.66523 20.8923 5.25027 18.0394 2.77741C17.8283 2.61893 17.5611 2.54119 17.2915 2.55979C17.0219 2.57839 16.7698 2.69195 16.5857 2.8777C16.4016 3.06345 16.2991 3.30764 16.2989 3.56129C16.2987 3.81494 16.4007 4.0593 16.5845 4.24533C19.0353 6.36546 20.5125 9.29602 20.7042 12.4186C20.896 15.5412 19.7873 18.6116 17.6122 20.9818C17.4326 21.1781 17.3406 21.4319 17.3553 21.6903C17.3642 21.8254 17.402 21.9575 17.4666 22.0786C17.5312 22.1996 17.6212 22.3072 17.7312 22.3948C17.947 22.5667 18.2266 22.6514 18.5087 22.6305C18.7909 22.6096 19.0528 22.4847 19.2372 22.2832Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="pl-5 flex gap-1">
                        <div className="flex flex-col justify-center">
                            <p className="text-[5px] font-medium text-white">VALID</p>
                            <p  className="text-[5px] font-medium text-white">THRU</p>
                        </div>
                        <div><p className="font-Inter font-bold text-sm text-white">5/23</p></div>
                    </div>
                    <div className="flex justify-between px-4 pb-2">
                    <div><p className="font-Inter font-bold text-sm text-white">Andrey Utley</p></div>
                        <div>
                            <svg width="44" height="26" viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="14.0983" cy="13.2292" rx="13.5722" ry="12.7344" fill="#FD0E0E"/>
                            <ellipse cx="29.48" cy="13.2292" rx="13.5722" ry="12.7344" fill="#FFE249"/>
                            <ellipse cx="14.0983" cy="13.2292" rx="13.5722" ry="12.7344" fill="#FF4747" fillOpacity="0.65"/>
                            </svg>
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





















{/*     <div className="flex justify-between px-2 h-[163px] lista">
        <div className="flex justify-center gap-4 relative overflow-hidden ">
            {
            testArray.map((test, i) => {
                return <div key={i} className=" duration-700 ease-in-out">
                <article className="h-[163px] w-[275px] flex flex-col justify-between gap-1 bg-gradient-to-r from-[#0a397e] to-[#703c6d] rounded-md carousel">
                    <div className="flex justify-between p-4">
                    <div className="flex gap-1 items-center">
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8849 6.34477C12.2569 6.34477 12.6137 6.21381 12.8768 5.98071C13.1399 5.74761 13.2877 5.43145 13.2877 5.10179C13.2877 4.77214 13.1399 4.45598 12.8768 4.22288C12.6137 3.98977 12.2569 3.85882 11.8849 3.85882C11.5128 3.85882 11.156 3.98977 10.8929 4.22288C10.6298 4.45598 10.482 4.77214 10.482 5.10179C10.482 5.43145 10.6298 5.74761 10.8929 5.98071C11.156 6.21381 11.5128 6.34477 11.8849 6.34477ZM13.2615 0.469642C12.8724 0.189451 12.3863 0.036499 11.8849 0.036499C11.3834 0.036499 10.8973 0.189451 10.5082 0.469642L1.15207 7.20656C0.0148244 8.02858 0.66949 9.65936 2.13594 9.65936H2.53248V16.62C1.42142 17.1222 0.662008 18.1447 0.662008 19.3264V20.4318C0.662008 20.6516 0.760542 20.8623 0.935933 21.0178C1.11132 21.1732 1.34921 21.2605 1.59725 21.2605H22.1725C22.4205 21.2605 22.6584 21.1732 22.8338 21.0178C23.0092 20.8623 23.1077 20.6516 23.1077 20.4318V19.3264C23.1077 18.1464 22.3483 17.1222 21.2372 16.62V9.65936H21.6338C23.1002 9.65936 23.7549 8.02693 22.6158 7.20656L13.2634 0.467985L13.2615 0.469642ZM11.6903 1.75571C11.7459 1.71588 11.8152 1.69416 11.8867 1.69416C11.9582 1.69416 12.0275 1.71588 12.0831 1.75571L20.7528 8.00207H3.01506L11.6903 1.75405V1.75571ZM19.3668 16.2886H17.4963V9.65936H19.3668V16.2886ZM15.6258 16.2886H12.8201V9.65936H15.6258V16.2886ZM10.9496 16.2886H8.14391V9.65936H10.9496V16.2886ZM19.6791 17.9459C20.5395 17.9459 21.2372 18.564 21.2372 19.3264V19.6032H2.53248V19.3264C2.53248 18.564 3.23017 17.9459 4.09059 17.9459H19.6791ZM6.27343 16.2886H4.40296V9.65936H6.27343V16.2886Z" fill="white"/>
                            </svg>
                            <p className="font-Inter font-bold text-sm text-white">BANK</p>
                    </div>
                    <div><p className="font-Inter font-bold text-sm text-white">CREDIT</p></div>
                    </div>
                    <div className="flex justify-between px-4">
                    <div><p className="font-Inter font-bold text-sm text-white">0000  2363  8364  8269</p></div>
                        <div>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.73056 13.2281C5.76459 13.7823 6.27097 14.2056 6.86158 14.1737C7.45219 14.1418 7.90339 13.6667 7.86936 13.1125C7.83533 12.5584 7.32895 12.135 6.73834 12.1669C6.14773 12.1989 5.69653 12.674 5.73056 13.2281Z" fill="white"/>
                            <path d="M12.1469 12.8812C12.0672 11.5826 11.4539 10.3635 10.4359 9.48041C10.2271 9.29947 9.95012 9.20379 9.66605 9.21443C9.38198 9.22506 9.11405 9.34115 8.9212 9.53713C8.72835 9.73312 8.62638 9.99297 8.63771 10.2595C8.64905 10.526 8.77277 10.7774 8.98165 10.9584C9.57274 11.4981 9.92691 12.226 9.97436 12.9987C10.0218 13.7713 9.75908 14.5326 9.23798 15.1324C9.05263 15.3347 8.9605 15.5978 8.98187 15.8638C9.00323 16.1297 9.13634 16.3769 9.3519 16.5508C9.56747 16.7247 9.84784 16.8111 10.1313 16.7911C10.4148 16.771 10.6782 16.6462 10.8636 16.4439C11.7667 15.4569 12.2267 14.1799 12.1469 12.8812ZM17.4939 12.5921C17.4186 11.3803 17.0841 10.1951 16.5104 9.1071C15.9367 8.0191 15.1354 7.05058 14.1544 6.25924C14.0455 6.17324 13.9197 6.1082 13.7841 6.06783C13.6484 6.02746 13.5057 6.01255 13.3639 6.02396C13.2221 6.03536 13.0841 6.07286 12.9578 6.1343C12.8315 6.19574 12.7193 6.27992 12.6276 6.38205C12.4425 6.5883 12.3523 6.8551 12.3768 7.12375C12.389 7.25677 12.429 7.38624 12.4944 7.50478C12.5599 7.62331 12.6497 7.72858 12.7585 7.81458C13.5232 8.4306 14.1477 9.18497 14.5947 10.0326C15.0417 10.8802 15.3019 11.8037 15.3599 12.7478C15.4179 13.6919 15.2724 14.6373 14.9321 15.5275C14.5919 16.4176 14.0639 17.2343 13.3796 17.9287C13.2843 18.0271 13.2107 18.1422 13.1631 18.2675C13.1156 18.3928 13.095 18.5256 13.1025 18.6584C13.1154 18.8545 13.1891 19.0427 13.3147 19.1998C13.4403 19.3569 13.6122 19.4761 13.8092 19.5426C14.0062 19.609 14.2196 19.6199 14.4231 19.5738C14.6266 19.5277 14.8112 19.4266 14.9542 19.2832C15.8368 18.3864 16.5168 17.3312 16.9533 16.1813C17.3897 15.0314 17.5736 13.8105 17.4939 12.5921Z" fill="white"/>
                            <path d="M19.2372 22.2832C21.7685 19.5192 23.0582 15.9416 22.8348 12.3034C22.6114 8.66523 20.8923 5.25027 18.0394 2.77741C17.8283 2.61893 17.5611 2.54119 17.2915 2.55979C17.0219 2.57839 16.7698 2.69195 16.5857 2.8777C16.4016 3.06345 16.2991 3.30764 16.2989 3.56129C16.2987 3.81494 16.4007 4.0593 16.5845 4.24533C19.0353 6.36546 20.5125 9.29602 20.7042 12.4186C20.896 15.5412 19.7873 18.6116 17.6122 20.9818C17.4326 21.1781 17.3406 21.4319 17.3553 21.6903C17.3642 21.8254 17.402 21.9575 17.4666 22.0786C17.5312 22.1996 17.6212 22.3072 17.7312 22.3948C17.947 22.5667 18.2266 22.6514 18.5087 22.6305C18.7909 22.6096 19.0528 22.4847 19.2372 22.2832Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className="pl-5 flex gap-1">
                        <div className="flex flex-col justify-center">
                            <p className="text-[5px] font-medium text-white">VALID</p>
                            <p  className="text-[5px] font-medium text-white">THRU</p>
                        </div>
                        <div><p className="font-Inter font-bold text-sm text-white">5/23</p></div>
                    </div>
                    <div className="flex justify-between px-4 pb-2">
                    <div><p className="font-Inter font-bold text-sm text-white">Andrey Utley</p></div>
                        <div>
                            <svg width="44" height="26" viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="14.0983" cy="13.2292" rx="13.5722" ry="12.7344" fill="#FD0E0E"/>
                            <ellipse cx="29.48" cy="13.2292" rx="13.5722" ry="12.7344" fill="#FFE249"/>
                            <ellipse cx="14.0983" cy="13.2292" rx="13.5722" ry="12.7344" fill="#FF4747" fillOpacity="0.65"/>
                            </svg>
                        </div>
                    </div>
                </article>
                </div>
            })
            }
        </div>
    </div>  
      <div className='flex gap-2 mt-4 self-center'>
        {
            testArray.map((test, i) => {
                return <div className='w-8 h-1 bg-gray-card rounded-sm'></div>
            })
        }
      </div>
       */}