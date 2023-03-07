import { Header } from "../Header/Header"

type Props = {}

export const CardDetails: React.FC<Props> = (props): JSX.Element => {
  

  return (
    <>
      <Header arrow={true} content='Details' />
      <div className="flex flex-col gap-3 mt-10">
        <p className="font-medium text-lg text-white-form">Related Account</p>
        <p className="font-medium text-xl text-white">ES8501281115756786467939</p>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <p className="font-medium text-lg text-white-form">Card number</p>
        <p className="font-medium text-xl text-white">3116433744757640</p>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <p className="font-medium text-lg text-white-form">Expiration date</p>
        <p className="font-medium text-xl text-white">11/25</p>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <p className="font-medium text-lg text-white-form">Service</p>
        <p className="font-medium text-xl text-white">Visa</p>
      </div>
    </>
  )
}