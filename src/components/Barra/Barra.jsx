import CarWidget from "../CarWidget/CarWidget";
import "./Barra.css";
import servelionaLogo from "../../assets/servelionaLogo.png";
function Barra() {
  return (
    <>
      <nav className="navbar">
        <div>
          <img className="logoServ" src={servelionaLogo} alt="logo serveliona" />
        </div>
        <ul className="navlinks">
          <li className="nav-it"> 
            <a href="#">Inicio</a>
          </li>
          <li className="nav-it" > 
            <a href="#">Cheesecakes</a>
          </li>
          <li className="nav-it"> 
            <a href="#">Tortas</a>
          </li>
        </ul>
        <CarWidget />
      </nav>
    </>
  )
}

export default Barra
