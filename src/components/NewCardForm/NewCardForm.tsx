import { Formik, Form, Field } from "formik";
import vector from '../../assets/Vector.png'  
import { doc, setDoc, getDoc } from "firebase/firestore";  
import {auth, db} from '../../config/firebase_config.js' 
import validationSchema from "./validationSchema";

type Props = {}  

  interface SubmitForm {
    cardNumber: number; 
    expirationDate: string; 
    cvv: number; 
    service: string;
  }   

export const NewCardForm: React.FC<Props> = (props):JSX.Element => {  

  const initialValues: SubmitForm = {
    cardNumber: 0, 
    expirationDate: "",  
    cvv: 0, 
    service: "",
  };

  const onSubmit = (values: SubmitForm) => {
    setTimeout(() => { 
      console.log(values);
    }, 500); 

    setDoc(doc(db, "user", ""), values);
  };

    return ( 
        <div className='bg-[#000000] text-[#F9F9F9] px-7'> 
            <article className='flex gap-[50%] pt-11 pb-6'> 
                <img className='w-3.5 h-5'
                    src={vector} alt="foto" /> 
                <h1 className='font-medium text-2xl'>New Card</h1>
            </article> 

            <h1 className='fontFamily text-4xl font-bold pb-14'>Add New Card</h1> 

          <Formik 
            validationSchema = {validationSchema} onSubmit={onSubmit}  initialValues={initialValues}> 

            <form className='flex flex-col gap-8 font-poppins' action=""> 
                
                <section className='flex flex-col gap-5 form-group'> 
                  <label className='text-[#EEEEEE] text-base font-medium'
                    htmlFor="cardNumber">Card Number</label> 
                  <input 
                    className='text-[#FFFFFF] border-b-4 border-[#626262] bg-black' 
                    id='cardNumber' name='cardNumber' placeholder=' 5555888877774444' type='number' />  
                </section> 

                <section className='flex flex-col gap-5 form-group'> 
                    <label className='text-[#EEEEEE] text-base font-medium'
                      htmlFor="expirationDate">Expiration Date</label> 
                    <input 
                      className='text-[#FFFFFF] border-b-4 border-[#626262] bg-black'
                      type="date" placeholder=' 01/26' required id='expirationDate' name='expirationDate' />                          
                </section> 

                <section className='flex flex-col gap-5 form-group'> 
                  <label className='text-[#EEEEEE] text-base font-medium'
                    htmlFor="cvv">CVV</label> 
                  <input 
                    className='text-[#FFFFFF] border-b-4 border-[#626262] bg-black'
                    type="number" placeholder='559' required id='cvv' name='cvv'/>     
                </section> 

                <section className='flex flex-col gap-5 form-group'> 
                  <label className='text-[#EEEEEE] text-base font-medium'
                    htmlFor="service">Service</label> 
                  <input 
                    className='text-[#FFFFFF] border-b-4 border-[#626262] bg-black'
                    type="text" id='service' name='service' placeholder='Visa, Mastercard o American Express' required/>
                </section> 
              <button className='mt-24 mb-16 bg-[#414A61] rounded-2xl py-1.5 w-full font-medium text-base' 
              type='submit'>Send</button>
            </form>  
          </Formik>
        </div>
    )
} 

