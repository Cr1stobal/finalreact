import { servicioCancionesTop } from "../services/servicioCanciones"

export function Music(){

    servicioCancionesTop()

    return(
        <>
        <h1>Musica de Slipknot.</h1>
        </>
    )

}