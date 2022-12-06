import { Link } from "react-router-dom"

import './Menu.css'

export function Menu() {

    return (
        <nav class="navbar navbar-expand-lg menu navbar-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Incubus</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="historia">Historia</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="integrantes">Integrantes</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Mercancia">Mercancia</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )

}