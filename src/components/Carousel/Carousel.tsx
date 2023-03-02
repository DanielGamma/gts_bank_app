


type Props = {}

const Carousel: React.FC<Props> = ({}) => {

  


  const testArray: number[] = [1, 2, 3]
  


  return (
    <>

      <div className="flex justify-center gap-4 relative overflow-hidden w-full">
        {
          testArray.map((test, i) => {
            return <div key={i} className=" duration-700 ease-in-out">
              <article className="h-[163px] w-[275px] bg-gradient-to-r from-[#0a397e] to-[#703c6d] rounded-md"></article>
            </div>
          })
        }
      </div>
      <div className='flex gap-2 mt-4 self-center'>
        <div className='w-8 h-1 bg-gray-card rounded-sm'></div>
        <div className='w-8 h-1 bg-[#B1BEEC] rounded-sm'></div>
        <div className='w-8 h-1 bg-gray-card rounded-sm'></div>
      </div>
    </>
  )
}
export default Carousel