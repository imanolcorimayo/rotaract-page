import React from 'react'

import style from './Comederos.module.css'

export default function Comederos() {

    var contentObject = [{
        place: "Primer Lugar",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus neque aliquam reprehenderit nesciunt repellat perspiciatis autem labore vel. Inventore explicabo labore distinctio earum non, provident consequuntur nesciunt doloremque rerum!"
    },
    {
        place: "Segundo Lugar",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus neque aliquam reprehenderit nesciunt repellat perspiciatis autem labore vel. Inventore explicabo labore distinctio earum non, provident consequuntur nesciunt doloremque rerum!"
    },
    {
        place: "Tecrer Lugar",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus neque aliquam reprehenderit nesciunt repellat perspiciatis autem labore vel. Inventore explicabo labore distinctio earum non, provident consequuntur nesciunt doloremque rerum!"
    },
    {
        place: "Cuarto Lugar",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus neque aliquam reprehenderit nesciunt repellat perspiciatis autem labore vel. Inventore explicabo labore distinctio earum non, provident consequuntur nesciunt doloremque rerum!"
    },
    ]

    return (
        <div className={ style.comederos }>
            <aside className={ style.classAside }>
                <div className={ style.divAside }>
                    <h3>Lugares</h3>
                    <nav>
                        <ul>
                            <li> <a className={ style.a } href="#algo">Primer Lugar</a></li>
                            <li> <a className={ style.a } href="#algo">Segundo Lugar</a></li>
                            <li> <a className={ style.a } href="#algo">Tercer Lugar</a></li>
                            <li> <a className={ style.a } href="#algo">Cuarto Lugar</a></li>
                        </ul>
                    </nav>
                </div>
            </aside>
            {/* Codigo javascript */}
            <div className={ style.divText }>
                { contentObject?.map( (el) => {
                return (
                    <div className={ style.divText }>
                        <h2>{ el.place }</h2>
                        <img src="" alt="" />
                        <p>{el.description}</p>
                    </div>
                );
            } ) }
            </div>

            {/* <svg className={ style.svg } width="156" height="139" viewBox="0 0 156 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_10:2)">
                    <path d="M12.8968 52.4928C50.1812 2.42146 72.7803 9.8922 79.4192 19.8865L86.9876 66.7347C107.037 30.3805 147.296 -29.8851 147.933 19.8865C148.571 69.658 144.481 106.087 142.357 118.08C117.261 127.075 71.0541 139.668 86.9876 118.08C102.921 96.4927 124.166 74.8551 132.796 66.7347L37.1954 95.5932C22.7225 101.965 -4.3114 108.486 3.33669 83.6001" stroke="black" />
                </g>
                <defs>
                    <filter id="filter0_d_10:2" x="0.5" y="0.499878" width="155" height="138" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="3" dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.908333 0 0 0 0 0.291424 0 0 0 0 0.291424 0 0 0 0.73 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10:2" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10:2" result="shape" />
                    </filter>
                </defs>
            </svg> */}
            
        </div>
    )
}
