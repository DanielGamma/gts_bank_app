import { Link } from "react-router-dom";
import backArrow from "../../assets/icons8-menor-que-48.png";

type Props = {
    content: string,
    arrow:boolean,
    url : string
}

export const Header: React.FC<Props> = ({arrow,content, url}): JSX.Element => {

  return (
    <div className="text-white flex items-center justify-between">
      {
        (arrow) ? <Link to={url}><img  className="w-6" src={backArrow} alt="arrow"/></Link> : <p></p>
      }
        <p className="text-[24px]">{content}</p>
        <p className="w-6"></p>
    </div>
  )
};
