
export async function generarToken() {



    const client_id = "client_id=12e154c202c440d585363cb2201ad4d4"
    const client_secret = "client_secret=eb9af2e7e6764736961c56b854b60e9c"
    const grant_type = "grant_type=client_credentials"

    let dataEnvio = grant_type + "&" + client_secret + "&" + client_id

    const URL = "https://accounts.spotify.com/api/token"

    const peticion = {
        method: 'POST',
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        body: dataEnvio
    }
    let respuesta = await fetch(URL, peticion)

    let token = await respuesta.json()

    let tokenDefinitivo = token.token_type + " " + token.access_token

    return (tokenDefinitivo)
}