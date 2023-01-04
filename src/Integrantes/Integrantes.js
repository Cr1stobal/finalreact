import { Footer } from "../shared/Footer/Footer";
export function Integrantes() {
  let titulo = "Integrantes";

  let integrantes = [
    {
      nombre: "Corey Taylor",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/CoreyTaylor2.jpg?alt=media&token=4de33080-7a3d-4494-a701-10245ade0cf1",
      Biografia: "Nacimiento: 08 de diciembre de 1973 (edad 49 años)",
    },
    {
      nombre: "Alessandro Venturella",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/alessandroventurella.jpg?alt=media&token=d626dab1-8121-449c-84ec-d67b98bb1683",
      Biografia: "Nacimiento: 7 de marzo de 1978 (edad 44 años)",
    },
    {
      nombre: "Jay Weinberg",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/JayWeinberg.jpg?alt=media&token=ed0c0cfb-a723-4783-a5e4-e46253d6644a",
      Biografia: "Nacimiento: 8 de septiembre de 1990 (edad 36 años)",
    },
    {
      nombre: "Jim Root",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/jimRoot.jpeg?alt=media&token=7df942dc-e532-4ccc-af22-6f22556f84f7",
      Biografia: "Nacimiento: 2 de octubre de 1971 (edad 51 años)",
    },
    {
      nombre: "Mick Thomson",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/mickThomson.jpg?alt=media&token=f146b2a0-cdf8-4e36-9ada-fc96166d5939",
      Biografia: "Nacimiento: 3 de noviembre de 1973 (edad 49 años)",
    },
    {
      nombre: "Shawn Crahan",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/shawnCrahan.jpg?alt=media&token=96fab03b-8b25-4e5f-a220-6863c792828c",
      Biografia: "Nacimiento: 24 de septiembre de 1969 (edad 53 años)",
    },
  ];

  return (
    <>
      <h1>{titulo}</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {integrantes.map(function (integrante) {
            return (
              <>
                <div className="col">
                  <div className="card h-100 shadow">
                    <img
                      src={integrante.foto}
                      alt="foto"
                      className="h-100 img fluid w-100"
                    />
                    <h2 className="text-center">{integrante.nombre}</h2>
                    <p className="text-center">{integrante.Biografia}</p>
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
