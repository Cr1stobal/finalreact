import {Footer} from '../shared/Footer/Footer'
import { useNavigate } from 'react-router-dom'

export function Mercancia(){


    //activamos la navegacion entre componentes
    //cuando se de un evento
    let navegante=useNavigate()

    //que hago cuando se de el evento...
    function detectarEvento(productoSeleccionado){

        navegante('/tienda',{

            state:{productoSeleccionado}
        }
        
        )
        
    }

    let titulo="Productos de la banda..."

    let productos=[
        {
            nombre:"Camiseta original Slipknot",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/CamisetaSlipk.jpg?alt=media&token=88c9968f-878d-4faf-8817-7d4cf20df984",
            precio:40

        },
        { 
            nombre:"Disco Original Slipknot",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/albumSlipknot.jpg?alt=media&token=e9e42e68-6393-4540-9800-89bd21ef1f34",
            precio:90
        },
        {
            nombre:"Funko Craig Jones Slipknot",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycaa.appspot.com/o/funkslipk.jpg?alt=media&token=98677862-cc43-4f27-912e-08954b67c5ca",
            precio:25
        }
    ]


    return(
        <>
            <h1>{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">

                    {
                       productos.map(function(producto,id,){
                        return( 
                            <div key={id}>
                                <div className="col">
                                    
                                    <div className="card h-100 shadow">


                                        <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100" />


                                        <button className='btn btn-primary mx-5 my-3' onClick={
                                            function(){
                                                detectarEvento(producto)
                                            }
                                        } >Ampliar</button>

                                    </div>

                                </div>
                            </div>
                        )
                       }) 
                    }

                </div>
            </div>
            <Footer/>

        </>
    )
}