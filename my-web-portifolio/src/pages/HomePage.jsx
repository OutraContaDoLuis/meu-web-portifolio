import "../styles/HomePage.css"

import TopBar from "../components/TopBar"
import { useEffect, useState } from "react"

import Footer from "../components/Footer"

function HomePage() {
    const[state, setState] = useState({
        age: 0,
    })

    useEffect(() => {
        handlerGetAge()
    }, [])

    const handlerGetAge = () => {
        let date = new Date()

        let currentMonth = date.getMonth() + 1
        let currentDay = date.getDate()
        let currentYear = date.getFullYear()

        let age = currentYear - 2006;

        if (currentMonth < 7 && (currentMonth == 7 && currentDay < 7)) {
            age = (currentYear - 1) - 2006;
        } 

        handlerSetAge(age)
    }

    const handlerSetAge = (value) => {
        setState(prev => {
            return {
                ...prev,
                age: value
            }
        })
    }

    return (
        <>
            <div>
                <TopBar />
                <div className="div--home-page bg-white">
                    <div className="div--home-page-body">
                        <h1 className="ft-orbitron hero glitch layers" data-text="Programador Backend e Mobile">
                            <span className="ft-orbitron color-black">Programador Backend e Mobile</span>
                        </h1>
                        <p className="ft-orbitron fs-3 color-black">Ola, meu nome e Luis Henrique Campaner, tenho { state.age } anos, sou programador Backend (Java e SpringBoot) e 
                            programador Mobile (Kotlin) com cerca de 1 ano de atuacao nessas duas areas.</p>
                    </div>            
                </div>
                <div className="div--home-page bg-dark">
                    <div className="div--home-page-body">
                        <h1 className="color-cyan ft-orbitron fw-bold" id="h1-home-page">Projetos</h1>
                        <div className="d-flex">
                            <div className="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                                <p className="fs-4 color-cyan">CRUD Student System</p>
                                <p className="fs-2 color-red">Um CRUD com o backend feito em Java com o Framework SpringBoot e o Frontend 
                                    feito em React.js com o framework css Bootstrap. 
                                </p>
                                <p className="fs-2 color-red">Mais detalhes, acesse a pagina no Github:</p>
                                <button className="btn-card mt-5">
                                    Github
                                </button>
                            </div>
                            <div className="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                                <p className="fs-4 color-cyan">CRUD Student System</p>
                                <p className="fs-2 color-red">Um CRUD com o backend feito em Java com o Framework SpringBoot e o Frontend 
                                    feito em React.js com o framework css Bootstrap.
                                </p>
                                <p className="fs-2 color-red">Para mais detalhes, acesse a pagina no Github:</p>
                                <button className="btn-card mt-5">
                                    Github
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="div--home-page bg-white">
                    <div className="div--home-page-body">
                        <h1 className="color-black ft-orbitron">Gostou do meu trabalho?</h1>
                        <p className="color-black fs-3 ft-orbitron">Entre em contato comigo e vamos criar grandes projetos juntos!</p>
                        <button id="btn--contact-home-page">Contato</button>
                    </div>                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage