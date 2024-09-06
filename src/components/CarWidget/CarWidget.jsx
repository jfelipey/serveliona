import carrito from "../../assets/carrito.png";
import "./CarWidget.css";

function CarWidget() {
  return (
    <>
    <div className="car">
    <div>
        <img  className="carrito" src={carrito} alt="carrito" />
        </div>
        <span className="cant-car">4</span>
    </div>
      
    </>
  )
}

export default CarWidget
