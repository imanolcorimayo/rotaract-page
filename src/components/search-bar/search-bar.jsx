import React, { useEffect, useState } from 'react'
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
    }

    const [input, setInput] = useState("Hola")

    useEffect(() => {
        console.log("Se ejecuto")
    }, [input])

    function inputState(el) {
        setInput(el.target.value)
    }

    return (
        <div className={ styleSearch.divPrincipal }>
            <img id={ styleSearch.imgLogo } src={ img } alt="" />
            <input type="text" value={ input } onChange={ inputState } />
            <button onClick={ button }>Buscar</button>
        </div>
    )
}
