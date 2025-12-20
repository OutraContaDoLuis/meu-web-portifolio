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
                <div class="div--home-page bg-white">
                    <div class="div--home-page-body">
                        <h1 class="ft-orbitron color-black">Programador Backend e Mobile</h1>
                        <p class="ft-orbitron fs-3 color-black">Ola, meu nome e Luis Henrique Campaner, tenho { state.age } anos, sou programador Backend (Java e SpringBoot) e 
                            programador Mobile (Kotlin) com cerca de 1 ano de atuacao nessas duas areas.</p>
                    </div>            
                </div>
                <div class="div--home-page bg-dark">
                    <div class="div--home-page-body">
                        <h1 class="color-cyan ft-orbitron fw-bold">Projetos</h1>
                        <div class="d-flex">
                            <div class="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                                <p class="fs-4 color-cyan">CRUD Student System</p>
                                <p class="fs-2 color-red">Um CRUD com o backend feito em Java com o Framework SpringBoot e o Frontend 
                                    feito em React.js com o framework css Bootstrap. 
                                </p>
                                <p class="fs-2 color-red">Mais detalhes, acesse a pagina no Github:</p>
                                <button class="btn-card mt-5">
                                    Github
                                </button>
                            </div>
                            <div class="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                                <p class="fs-4 color-cyan">CRUD Student System</p>
                                <p class="fs-2 color-red">Um CRUD com o backend feito em Java com o Framework SpringBoot e o Frontend 
                                    feito em React.js com o framework css Bootstrap.
                                </p>
                                <p class="fs-2 color-red">Para mais detalhes, acesse a pagina no Github:</p>
                                <button class="btn-card mt-5">
                                    Github
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="div--home-page bg-white">
                    <div class="div--home-page-body">
                        <h1 class="color-black ft-orbitron">Gostou do meu trabalho?</h1>
                        <p class="color-black fs-3 ft-orbitron">Entre em contato comigo e vamos trabalhar juntos!</p>
                        <button id="btn--contact-home-page">Contato</button>
                    </div>                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage