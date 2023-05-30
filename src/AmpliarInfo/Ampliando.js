import "./Ampliando.css";
import { useLocation } from "react-router-dom";
export function Ampliando() {
  let datosrecibidos = useLocation();

  let producto = datosrecibidos.state.productoSeleccionado;
  console.log(producto);

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-md-5">
            <img src={producto.foto} alt="foto" className="img-fluid w-100" />
          </div>

          <div className="col-12 col-md-4 border p-3">
            <h2 className="fw-bold">{producto.nombre}</h2>
            <h1 className="mt-3 display">${producto.precio}</h1>
            <figure class="text-right">
              <figcaption class="blockquote-footer">
                <cite title="Source Title">25% descuento</cite>
                <span class="badge text-bg-dark">Descuento del dia</span>
              </figcaption>
            </figure>
            <p>Hasta 48 cuotas</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/american-express.png?alt=media&token=e552b552-eb32-4510-8ee4-fb5ed1a7238c"
              alt=""
              className="img-fluid ms-3"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/visa.png?alt=media&token=79c1aa53-32bf-4cf2-a330-b820f8b862a2"
              alt=""
              className="img-fluid ms-3"
            />

            <br />
            <br />
            <br />

            <i class="mt-5 fs-2 bi bi-truck text-success"></i>
            <p className="text-success fw-bold">
              Envio gratis a nivel nacional
            </p>
           

            <i class="bi bi-arrow-counterclockwise mt-5 fs-1 text-success"></i>
            <i class="mt-5 fs-2 bi bi-truck text-success"></i>
            <p className="text-success fw-bold">Devolucion gratis</p>
            
          </div>
          <br />

          <ul class="list-unstyled">
            <li>
              Sobre este producto:
              <ul>
                <li>
                  Sólidos: 100% algodón; jaspeados: 60% algodón, 40%
                  poliéster.Importado
                </li>
                <li>
                  Sólidos: 100% algodón; jaspeados: 60% algodón, 40% poliéster.
                  Importado
                </li>
                <li>Lavar a máquina</li>
                <li>
                  Estas camisetas clásicas cuentan con una confección de algodón
                  y un cuello redondo sin etiqueta para mayor comodidad.
                </li>
                <li>
                  Lo hacemos mejor cada día: afinamos cada detalle para
                  garantizar la cali
                </li>

              </ul>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}
