import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"

export function Music(){

    //usando el hook useState para almacenar la respuesta del api de forma global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    //usando el hook useEffect para limitar el consumo del api a una sola vez
    useEffect(function(){
        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })

    },[])

    //render del componente:
    if(estadoCarga==true){

        return(
            <>
                <h2> Estamos cargando canciones</h2>
            </>
        )

    }else{
        return(
        <>
        <h2>Canciones de la banda</h2>
        {
            canciones.tracks.map(function(cancion){
                {}
                return(
                    <div>
                        <h1>{cancion.name}</h1>
                        <audio controls src={cancion.preview_url}></audio>
                        <img src={cancion.album.images[0].url}></img>
                        </div>
  
                       
                    
                )
            })
        }
        </>
        )

    }

    }    



