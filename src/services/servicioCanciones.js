//Receta para consumir un api con react

export async function servicioCancionesTop(){

    //Leccion uno de la receta "pa onde vas y a que vas" 'URL'"
    //Escribir la url del servicio del api
    const URL="https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8/top-tracks?market=US"

    //Leccion dos de la receta ¿Que operacion vas hacer en la base de datos?
    //autentificar y configurar la peticion de envio hacia el servidor "autorizacion"
    const peticion={
        method: "GET",
        headers:{Authorization:"Bearer BQAW319INd6Kffpz-ki9vUdc6808NBwYD0v1NmuRk2tkm4GIHurVSE475_VS1A3M_bi_ioM3vJ92XGxd9TXGhN_2rtjHJr6b7JtrYWFVW9mupmHI3oPUhqZ9WvhM6Bdyx1vOSDJ1b4C9j6YOsoEWCDk-17qMj4xGaBt0Q8ox1iYcacPiIFMxjRM62f6oJfg"}
    }

    //Leccion tres de la receta "Consumimos el api"
    let respuesta=await fetch(URL,peticion)
    let canciones=await respuesta.json()

    return canciones


}