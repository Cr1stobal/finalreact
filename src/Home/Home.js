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
                            <h2>INCUBUS</h2>
                            <p>
                                Incubus es una banda de rock alternativo estadounidense formado por el vocalista Brandon Boyd, guitarrista Mike Einziger y batería José Pasillas cuando estudiaban juntos y después expandieron con la inclusión del bajista Alex "Dirk Lance" Katunich y Gavin "DJ Lyfe" Koppell; ambos reemplazados finalmente por Ben Kenney y DJ Kilmore respectivamente. Para el 2001 tuvieron un enorme éxito con el sencillo "Drive", seguido de su álbum Morning View. En 2003, la banda establece la fundación "Make Yourself Foundation" para donar dinero a fundaciones de beneficencia
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/21753018_10155226596903999_29998736812000224_o.jpg?alt=media&token=335e9325-5a9f-4fe9-ba57-0a2333222108" className="img-fluid w-100"></img>
                        </div>

                        <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Med</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Bog</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Barr</h3>
                                    <h5>Dec 5</h5>
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
                           <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/noticia1.jpg?alt=media&token=9e1fb4de-d6ea-468f-bc92-90f40ab7be62" alt="" className="img-fluid w-100"/>
                           <h1>NOTICIAS</h1>
                           <p>En 2019, Incubus estuvo conmemorando los 20 años de su álbum Make Yourself, material que contiene sencillos tan icónicos como "Drive". La banda californiana realizó por entonces apariciones televisivas especiales y una gira por los Estados Unidos.</p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/noticia2.webp?alt=media&token=83bf541c-e9eb-4d28-96ed-3211e7f51207" alt="" className="img-fluid w-100"/>
                           <h1>NOTICIAS</h1>
                           <p>Incubus publicó "Drive" en 1999. Dicho tema contenido en el álbum Make Yourself se convirtió en un gran hit casi al instante a nivel global. Dos décadas después de tal suceso, la banda oriunda de California interpretó en vivo esa canción en la televisión estadounidense. El video de su apasionada presentación se puede ver al final de este texto.</p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/noticia3.jpg?alt=media&token=8dedd25e-e9cc-41aa-a025-06805502a575" alt="" className="img-fluid w-100"/>
                           <h1>NOTICIAS</h1>
                           <p>Incubus llegará en el marco de su tour de promoción de su último disco de estudio 8. La fecha en Argentina será el próximo 28 de septiembre en el DirecTV Arena, en Chile el 26 de septiembre en el Movistar Arena, en Perú se presentará junto a Maroon 5 el martes 19 de septiembre y en Brasil en el marco del Rock in Rio, el 23 de septiembre.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
            
        </>
    )

}