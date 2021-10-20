import React from 'react'
import style from './Inicio.module.css'
import bosque from '../../img/bosque.jpg'



export default function Inicio() {
    return (
        <div id={ style.divInicio }>
            <div className={ style.contenedorLogo }>
                <img id={ style.imgLogo } src="../../logo512.png" alt="" />
                <p>
                    Somos un club de proyectos sociales dispuestos a mejorar comunidades de nuestro entorno
                </p>
            </div>
            <div className={style.divImgFondo}>
                <img className={ style.imgFondo } src={ bosque } alt="No hay imagen" />
            </div>
        </div>
    )
}
