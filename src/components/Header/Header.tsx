import { Link } from "react-router-dom";
import backArrow from "../../assets/icons8-menor-que-48.png";

// CADA VEZ QUE LLAMEN A ESTE COMPONENTE DEBEN MANDAR POR PROPS UN BOOLEAN TRUE SI NECESITAN QUE TENGA LA 
// FLECHA PARA VOLVER ATRAS SI NO DEJEN FALSE Y NO APARECERA, EN EXPENSES PAGE ESTA EL EJEMPLO
// EN EL LOGIN MANDAR LA PROP DE CONTENT SE PUEDA MANDAR VACIA ("") YA QUE NO TIENE TITULO

type Props = {
    content: string,
    arrow:boolean,
    url : string
}

export const Header: React.FC<Props> = ({arrow,content, url}): JSX.Element => {

  

  return (
    <div className="text-white flex items-center justify-between">
      {
        (arrow) ? <Link to={url}><img  className="w-6" src={backArrow} alt="arrow"/></Link> : ''
      }
        <p className="text-[24px]">{content}</p>
        <p className="w-6"></p>
    </div>
  )
};
