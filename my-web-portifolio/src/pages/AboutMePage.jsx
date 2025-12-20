import TopBar from "../components/TopBar.jsx"
import Footer from "../components/Footer.jsx"

import "../styles/AboutMePage.css"
import { useEffect, useState } from "react"

function AboutMePage() {
    const[state, setState] = useState({
        age: 0,
        timeWorking: 0
    })

    useEffect(() => {
        handlerGetAge()
        handlerGetTimeWorking()
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

    const handlerGetTimeWorking = () => {
        let date = new Date()

        let currentYear = date.getFullYear()

        let timeWorking = currentYear - 2024;

        handlerSetTimeWorking(timeWorking)
    }

    const handlerSetAge = (value) => {
        setState(prev => {
            return {
                ...prev,
                age: value
            }
        })
    }

    const handlerSetTimeWorking = (value) => {
        setState(prev => {
            return {
                ...prev,
                timeWorking: value
            }
        })
    }

    return (
        <>
            <div>
                <TopBar />
                <div class="div--about-me-page bg-dark p-5">
                    <h1 class="ft-orbitron color-cyan">Quem eu sou?</h1>
                    <p class="fs-3 ft-rajdhani color-cyan">Me chamo Luis Henrique Campaner, tenho { state.age } anos e sou desenvolvedor Backend e Mobile. 
                        Atuo, na area de backend, usando Java com o FrameWork SpringBoot na construcao de APIs
                        Restful e MySQL para banco de dados, para conteinerizacao utilizo o docker compose. Na parte mobile, gosto de utilizar o Kotlin no 
                        desenvolvimento de apps em geral, junto com o framework do Jetpack compose. 
                    </p>
                    <p class="fs-3 ft-rajdhani color-cyan">Atualmente, trabalho na area tem cerca de { state.timeWorking } ano(s), com trabalhos freelancers e ate mesmo
                        fixos para diversas empresas.
                    </p>
                    <p class="fs-3 ft-rajdhani color-cyan">Caso queira saber mais detalhes do meu trabalho ou ate mesmo desenvolver um projeto junto comigo, entre em contato!</p>
                </div>
                <div class="bg-dark p-5">
                    <h1 class="ft-orbitron color-cyan">Tecnologias que eu utilizo nos meus projetos</h1>
                    <div class="d-flex">
                        <div class="card w-25 me-5 p-5">
                            <p class="fs-4 ft-rajdhani color-cyan">Java</p>
                            <p class="fs-3 ft-rajdhani color-cyan">Linguagem de programacao de alto nivel muito utilizada para a construcao de APIs Restful.</p>
                        </div>
                        <div class="card w-25 me-5 p-5">
                            <p class="fs-4 ft-rajdhani color-cyan">Springboot</p>
                        </div>
                        <div class="card w-25 me-5 p-5">
                            <p class="fs-4 ft-rajdhani color-cyan">MySQL</p>
                        </div>
                        <div class="card w-25 p-5">
                            <p class="fs-4 ft-rajdhani color-cyan">Docker</p>
                        </div>
                    </div>
                    <div class="d-flex mt-5">
                        <div class="card w-25 me-5 p-5">
                            <p class="fs-4 ft-rajdhani color-cyan">Kotlin</p>
                        </div>
                        <div class="card w-25 me-5 p-5">
                            <p class="fs-4 ft-rajdhani color-cyan">Jetpack</p>
                        </div>
                        <div class="w-25 me-5 p-5">
                        </div>
                        <div class="w-25 p-5">
                        </div>
                    </div>                 
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AboutMePage