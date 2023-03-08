import { useState } from "react";
import { Header } from "../Header/Header";

type Props = {}

export const CardSecret: React.FC<Props> = (props):JSX.Element => { 

  const [open, setOpen] = useState<boolean>(false);  

  function toggle() {
    setOpen(prev => !prev)
  }
  
  return (
    <div className='text-white'>      
      <Header arrow={true} content={"CVV & PIN"} url={"/cards"} />

      <section className="pt-20 flex flex-col justify-center items-center gap-20"> 
        <article className="flex flex-col gap-4 justify-center items-center"> 
          <h2 className="text-white-form font-medium text-2xl">CVV</h2> 
          <p className="text-white font-medium text-2xl">889</p>
        </article> 

        <article className="flex flex-col gap-4 justify-center items-center"> 
          <h2 className="text-white-form font-medium text-2xl">PIN</h2> 
          <p className="text-white font-medium text-2xl">1224</p>
        </article>
      </section>

      <p onClick={toggle}
        className="pt-24">Change PIN</p> 
      <hr className="w-24 pl-7"/>

      { open ? <form className="py-10 flex flex-col gap-5"
        action=""> 
        <label htmlFor="">New PIN</label> 
        <input className="border-b-4 border-[#626262] bg-black"
          type="number" placeholder='  5588'/> 
        <button className="className='mt-24 mb-16 bg-[#414A61] mt-5 rounded-2xl py-1.5 w-full font-medium text-base'"
        >Save</button>
      </form>  : "" } 
      
    </div>
  )
}