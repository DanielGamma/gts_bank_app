import { useNavigate, useParams } from "react-router"
import { NavMenu } from "../NavMenu/NavMenu"
import { TransactionFailure } from "../TransactionFailure/TransactionFailure"
import { TransactionSuccess } from "../TransactionSuccess/TransactionSuccess"


type Props = {}

const TransactionResult = (props: Props) => {
    const { state } = useParams()

    const navigate = useNavigate();

    return (
        <>
            <div className="relative h-[80vh] flex flex-col">
                <div className="absolute top-40  flex flex-col gap-7 items-center">
                    {/* ----------- */}
                    {
                        state == '1' ? <TransactionSuccess text0='Success!' text1='The operation has been successfully completed' />
                            : <TransactionFailure text0='Something went wrong!' text1='We were unable to complete the operation. Please, try again later' />
                    }
                    {/* ----------- */}
                </div>

                <button onClick={() => navigate("/home")} className="bg-gray-dark py-4 w-full absolute bottom-0 text-white-faded rounded-2xl">Continue</button>

            </div>
            <NavMenu />
        </>
    )
}
export default TransactionResult