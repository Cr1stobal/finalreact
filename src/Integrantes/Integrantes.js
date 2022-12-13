import { Footer } from "../shared/Footer/Footer";
export function Integrantes() {
  let titulo = "Integrantes";

  let integrantes = [
    {
      nombre: "Brandon Boyd",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/CoreyTaylor2.jpg?alt=media&token=4de33080-7a3d-4494-a701-10245ade0cf1",
      Biografia: "Nacimiento: 15 de febrero de 1976 (edad 46 años)",
    },
    {
      nombre: "Mike Einziger",
      foto: "",
      Biografia: "Nacimiento: 21 de junio de 1976 (edad 46 años)",
    },
    {
      nombre: "Jay Weinberg",
      foto: "",
      Biografia: "Nacimiento: 18 de agosto de 1976 (edad 46 años)",
    },
    {
      nombre: "Jose Pasillas",
      foto: "",
      Biografia:""
    },
    {
      nombre: "Chris Kilmore",
      foto: "",
      Biografia: "Nacimiento: 21 de enero de 1973 (edad 49 años)",
    },
    {
      nombre: "Ben Kenney",
      foto: "",
      Biografia: "Nacimiento: 12 de marzo de 1977 (edad 45 años)",
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
                    <p className="text-center">
                      Precio: {integrante.Biografia}$
                    </p>
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
