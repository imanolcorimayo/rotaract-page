import React from 'react'
import styleSearch from './search-bar.module.css'
import img from '../../img/logo512.png'

// Este styleSearch es un objeto js
// bici = {
    // color: "rojo",
    // tamaño: "29 pulgadas"
// }
// bici.color ---> "rojo"

export default function SearchBar() {
    function button() {
        console.log("Estoy en button")
    }
    console.log(styleSearch)
    return (
        <div className={ styleSearch.divPrincipal }>
            <img id={ styleSearch.imgLogo } src={ img } alt="" />
            <input type="text" />
            <button onClick={ button }>Buscar</button>
        </div>
    )
}
