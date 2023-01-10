import './Home.css'

import {Footer} from '../shared/Footer/Footer'

export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>SLIPKNOT</h2>
                            <p>
                            Slipknot es una banda estadounidense de metal alternativo formada en 1995 en Des Moines, Iowa, Estados Unidos. Sus integrantes en la actualidad son Corey Taylor, Craig Jones, Jim Root, Mick Thomson, Shawn Crahan y Sid Wilson. Slipknot es conocida por las máscaras características de cada uno de sus miembros, que cambian conforme han sacado más discografía.
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/slipknotConciert.jpg?alt=media&token=5e1f1171-5196-47c9-835e-b2a2c992e39b" className="img-fluid w-100"></img>
                        </div>

                        <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">SLIPKNOT EN COLOMBIA</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Medellin</h3>
                                    <h5>Diciembre 2</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>Diciembre 3</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Bogota</h3>
                                    <h5>Diciembre 4</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Barranquilla</h3>
                                    <h5>Diciembre 5</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/FlayerSlipk.jpg?alt=media&token=82d60e82-0da0-461a-96ee-ab20e777a6c1" alt="" className="img-fluid w-100"/>
                           <h1>NOTICIAS</h1>
                           <p>Ya informamos de ello hace más de un año y ha vuelto a suceder. Shawn "Clown" Crahan ha ofrecido más información sobre el disco inédito ‘Look Outside Your Window’. El percusionista de Slipknot ha vuelto a decir que siguen en marcha los planes para sacar el conjunto de 11 canciones grabadas por cuatro miembros de la banda durante las sesiones de grabación de su LP "All Hope Is Gone" (2018).</p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/Flayer2Slipk.jpg?alt=media&token=3b3ed750-813d-42a3-857f-69557b148e23" alt="" className="img-fluid w-100"/>
                           <h1>NOTICIAS</h1>
                           <p>El Hell and Heaven sigue con su misión de conformar un cartel épico para ser recordado por años. El festival de metal y rock más importante del continente americano se alista para presentar la edición más grande e imponente de su historia, y confirma al resto del elenco que participará en su entrega 2022.
                            https://www.milenio.com/espectaculos/hell-and-heaven-busca-cartel-epico-recordado </p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/SlipknotFlayer.jpg?alt=media&token=43c7f554-8bb4-4c13-b62c-170fd92170da" alt="" className="img-fluid w-100"/>
                           <h1>NOTICIAS</h1>
                           <p>Los fanáticos del metal, y especialmente los de la banda Slipknot, tendrán que esperar para disfrutar de su pasión, pues Hell and Heaven 2021 pospuso su edición de este año, como consecuencia de las restricciones sanitarias que emanaron por la pandemia de covid-19.
                            https://www.milenio.com/espectaculos/musica/hell-and-heaven-2021-posponen-festival-rock-slipknot-2022 </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
            
        </>
    )

}