import { Outlet } from "react-router-dom";

type Props = {};

export const RecordsPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
    <Outlet />
    <div className="text-white">RecordsPage</div>
    </>
  )
}
