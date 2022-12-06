import { Footer } from "../shared/Footer/Footer";
export function Mercancia() {
  let titulo = "Productos de la banda...";

  let productos = [
    {
      nombre: "Album",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/incubus.jpg?alt=media&token=62c7bb23-7b8c-456d-bf67-abdc25007970",
      precio: 10,
    },
    {
      nombre: "Camiseta",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/incubus1.jpg?alt=media&token=30f8fba4-c302-4a11-9f0b-caa87633b75f",
      precio: 50,
    },
    {
      nombre: "Gorra",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/incubus2.jpg?alt=media&token=5f15a299-5c7e-498d-bac9-059794fe969b",
      precio: 10,
    },
    {
      nombre: "Mascota incubus",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/incubus3.jpg?alt=media&token=eb2c2208-c4bf-44f9-a5be-86d6211791be",
      precio: 40,
    },
    {
      nombre: "Chaqueta",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/incubus4.jpg?alt=media&token=79e9777f-2684-4fd2-acff-8f159c50caef",
      precio: 70,
    },
    {
      nombre: "Camiseta",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/incubus5.jpg?alt=media&token=78f49652-df1e-4f4c-9140-0d766b3ce162",
      precio: "50",
    },
  ];

  return (
    <>
      <h1>{titulo}</h1>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-5">
          {productos.map(function (producto) {
            return (
              <>
                <div class="col">
                  <div class="card h-100 shadow">
                    <img
                      src={producto.foto}
                      alt="foto"
                      class="h-100 img fluid w-100"
                    />
                    <h2 class="text-center">{producto.nombre}</h2>
                    <p class="text-center">Precio: {producto.precio}$</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
