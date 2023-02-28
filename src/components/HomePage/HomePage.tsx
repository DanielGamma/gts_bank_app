type Props = {}

export const HomePage: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <div className=" w-full h-screen bg-gray-dark -z-10 ">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <p>Andrey Utley</p>
            <p>ES5421008783867371671186</p>
          </div>
          <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" className="w-16 h-16 rounded-full" />
        </div>
      </div>
    </>
  )
}