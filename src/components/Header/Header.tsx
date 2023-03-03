import arrow from "../../assets/icons8-menor-que-48.png";

// CADA VEZ QUE LLAMEN A ESTE COMPONENTE DEBEN MANDAR POR PROPS UN BOOLEAN TRUE SI NECESITAN QUE TENGA LA 
// FLECHA PARA VOLVER ATRAS SI NO DEJEN FALSE Y NO APARECERA, EN EXPENSES PAGE ESTA EL EJEMPLO
// EN EL LOGIN LLAMAR LA PROP DE CONTENT SE PUEDA MANDAR VACIA YA QUE NO TIENE TITULO

type Props = {
    content: string,
    arrow:boolean,
}

export const Header: React.FC<Props> = (props): JSX.Element => {

  function goBack() {
    return window.history.back()
  }

  return (
    <div className="text-white flex items-center justify-between">
      {
        (props.arrow) ? <img onClick={goBack} className="w-6" src={arrow} alt="arrow"/> : <p className="w-6"></p>
      }
        <p className="text-[24px]">{props.content}</p>
        <p className="w-6"></p>
    </div>
  )
};
