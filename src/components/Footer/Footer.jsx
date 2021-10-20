import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className={ style.container__footer }>
                    <div className={ style.box__footer }>
                        <div className={ style.logo }>
                            <img className={ style.imgLogo } src="../../logo512.png" alt="No hay imagen" />
                        </div>
                        <div className={ style.terms }>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Nam quis assumenda quia in asperiores iure sunt rerum pariatur, 
                                aspernatur quo sequi at fugit, autem adipisci ducimus consequatur 
                                tempore sint accusamus.</p>
                        </div>
                    </div>
                    <div className={ style.box__footer }>
                        <h2>Proyectos</h2>
                        <a href="">Bosque disperso</a>
                        <a href="">Pelitos</a>
                        <a href="">Bingo Virtual</a>
                        <a href="">RotarApp</a>
                    </div>
                    <div className={ style.box__footer }>
                        <h2>Club</h2>
                        <a href="">Acerca de</a>
                        <a href="">Proyectos</a>
                        <a href="">Procesos</a>
                        <a href="">Donaciones</a>
                    </div>
                    <div className={ style.box__footer }>
                        <h2>Club</h2>
                        <a href=""><i class="fab fa-github"></i> GitHub</a>
                        <a href=""><i class="fab fa-facebook"></i> Facebook</a>
                        <a href=""><i class="fab fa-instagram"></i> Instagram</a>
                        <a href=""><i class="fab fa-linkedin"></i> LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
