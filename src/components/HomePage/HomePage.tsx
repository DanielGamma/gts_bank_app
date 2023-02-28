type Props = {}

export const HomePage: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <div className="absolute flex flex-col items-center w-96 h-50 gap-5 bg-gray-dark z-10 ">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <p className="text-2xl text-white-faded font-medium">Andrey Utley</p>
            <p className="text-lg text-gray-card font-medium">ES5421008783867371671186</p>
          </div>
          <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" className="w-16 h-16 rounded-full" />
        </div>
          <div className="">
          <p className="text-white-faded text-[26px] font-semibold">8.640,00 €</p>
          <p className="text-gray-nav font-medium">Available Balance</p>
        </div>
      </div>
    </>
  )
}