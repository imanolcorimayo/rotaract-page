import React from 'react'
import style from './NavBar.module.css'
// import img from '../../img/home.png'

export default function NavBar() {
    return (
        <div id={style.idNavBar}>
            <nav className={ style.classNav }>
                {/* <ul className={ style.classUl }>
                    <li className={ style.classLi }> <a className={ style.a } href="http://localhost:3000/">
                        <img className= {style.imgHome} src={ img } alt="" />
                    </a></li>
                    <li className={ style.classLi }> <a className={ style.a } href="http://localhost:3000/"> Inicio </a></li>
                    <li className={ style.classLi }> <a className={ style.a } href="http://localhost:3000/"> Comederos </a></li>
                    <li className={ style.classLi }> <a className={ style.a } href="http://localhost:3000/"> Nosotros </a></li>
                    <li className={ style.classLi }> <a className={ style.a } href="http://localhost:3000/"> Contacto </a></li>
                </ul> */}
                <a className={ style.a } href="http://localhost:3000/"> Inicio </a>
                <a className={ style.a } href="http://localhost:3000/"> Comederos </a>
                <a className={ style.a } href="http://localhost:3000/"> Nosotros </a>
                <a className={ style.a } href="http://localhost:3000/"> Contacto </a>
            </nav>

        </div>
    )
}
