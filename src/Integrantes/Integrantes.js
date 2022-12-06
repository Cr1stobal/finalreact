import { Footer } from "../shared/Footer/Footer";
export function Integrantes(){
    
        let titulo = "Integrantes";

        let integrantes = [
            {
              nombre: "Brandon Boyd",
              Foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/brandon.jpg?alt=media&token=1bfca369-59f4-4216-b432-33bbf6905280",
              Biografia: "Nacimiento: 15 de febrero de 1976 (edad 46 años)",
            },
            {
              nombre: "Mike Einziger",
              foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/Mike2.jpg?alt=media&token=39e9edce-fd6d-4fb2-827c-367c3abb00b6",
              Biografia: "Nacimiento: 21 de junio de 1976 (edad 46 años)",
            },
            {
              nombre: "Alez Katunich",
              foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/Alex4.jpg?alt=media&token=aa61dd8a-5cc9-48c5-a281-2887f2e89640",
              Biografia: "Nacimiento: 18 de agosto de 1976 (edad 46 años)",
            },
            {
              nombre: "Jose Pasillas",
              foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/Jose5%2Cjpg.jpg?alt=media&token=467866fb-4b94-4ad4-b33a-409c3288dffb",
              Biografia: "Nacimiento: 26 de abril de 1976 (edad 46 años)",
            },
            {
              nombre: "Chris Kilmore",
              foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/Chris1.jpg?alt=media&token=124e94a6-bad8-4bb9-abeb-215044984586",
              Biografia: "Nacimiento: 21 de enero de 1973 (edad 49 años)",
            },
            {
              nombre: "Ben Kenney",
              foto: "https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/Ben3.jpg?alt=media&token=ba6b529f-3672-4ef1-929b-919f7e22dbd6",
              Biografia: "Nacimiento: 12 de marzo de 1977 (edad 45 años)",
            },

        ];

        return (
            <>
              <h1>{titulo}</h1>
              <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                  {integrantes.map(function (integrantes) {
                    return (
                      <>
                        <div class="col">
                          <div class="card h-100 shadow">
                            <img
                              src={integrantes.foto}
                              alt="foto"
                              class="h-100 img fluid w-100"
                            />
                            <h2 class="text-center">{integrantes.nombre}</h2>
                            <p class="text-center">Precio: {integrantes.Biografia
                            }$</p>
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