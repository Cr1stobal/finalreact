import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState, useEffect } from "react"

export function Music() {

    //usando el hook useState para almacenar la respuesta del api de forma global
    const [canciones, setCanciones] = useState(null)
    const [estadoCarga, setEstadoCarga] = useState(true)

    //usando el hook useEffect para limitar el consumo del api a una sola vez
    useEffect(function () {
        servicioCancionesTop().then(function (respuesta) {
            setCanciones(respuesta)
            setEstadoCarga(false)
        })

    }, [])

    //render del componente:
    if (estadoCarga == true) {

        return (
            <>
                <h2> Estamos cargando canciones</h2>
            </>
        )

    } else {
        return (
            <>
                <strong>   <h2 className="text-center">Canciones de la banda</h2></strong>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-5 g-5">
                        {
                            canciones.tracks.map(function (cancion, id) {
                                { }
                                return (
                                    <div key={id}>
                                        <div className="col my-4">
                                            <div className="card h-100 w-100 shadow">
                                                <img src={cancion.album.images[0].url} className="h-100 img-fluid w-100"></img>
                                                <h6 className="text-center">{cancion.name} </h6>
                                                <audio controls src={cancion.preview_url} className="w-100 p-2"></audio>
                                                <h6 className="text-center text-success ">Popularidad:{cancion.popularity}</h6>

                                            </div>
                                        </div>

                                    </div>



                                )
                            })
                        }
                    </div>
                </div>

            </>
        )

    }

}



