//Receta para consumir un api con react

export async function servicioCancionesTop(){

    //Leccion uno de la receta "pa onde vas y a que vas" 'URL'"
    //Escribir la url del servicio del api
    const URL="https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8/top-tracks?market=US"

    //Leccion dos de la receta ¿Que operacion vas hacer en la base de datos?
    //autentificar y configurar la peticion de envio hacia el servidor "autorizacion"
    const peticion={
        method: "GET",
        headers:{Authorization:"Bearer BQBcO89PasZfbAmzCMWAHUsHYOUI3lnfMTNZuNynohisaGtXqRgGJ7Bj_0O0FoJXhi7omioJCkbmyuh3Kuga4jf9DVRgaEnVqE_jnq9VY_MeL6Ci8qfVzLxCY4wTp5uMPY6-8bGrNMNyX7FuiW_7RFDi1kyaHbgkuQkZNgXKFbZxqfoJpThHkRyp-RhGI9Q"}
    }

    //Leccion tres de la receta "Consumimos el api"
    let respuesta=await fetch(URL,peticion)
    let canciones=await respuesta.json()

    console.log(canciones)


}