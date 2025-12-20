import TopBar from "../components/TopBar.jsx"
import Footer from "../components/Footer.jsx"

import "../styles/ProjectsPage.css"

function ProjectsPage() {
    return (
        <>
            <div>
                <TopBar />
                <div class="bg-dark p-5">
                    <h1 class="ft-orbitron color-cyan">Projetos</h1>
                    <div class="d-flex">
                        <div class="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                            <p class="fs-3 color-cyan">App Gerenciador de Arquivos</p>
                            <p class="fs-2 color-cyan">Aplicativo desenvolvido em Kotlin e Java que fornece ao usuario todas as funcionalidades 
                                para que ele possa administrar seus arquivos dentro do seu celular. O usuario pode criar arquivos de texto, editar esses arquivos, 
                                enviar arquivos pela internet e etc.</p>
                            <p class="fs-2 color-cyan">Dificuldade</p>
                            <div class="d-flex">
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle bg-cyan"></div>
                            </div>
                            <p class="fs-2 color-cyan">Para mais detalhes, acesse meu repositorio no Github: </p>
                            <button class="btn-card mt-5">
                                Github
                            </button>
                        </div>
                        <div class="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                            <p class="fs-3 color-cyan">Sistema de Organizacao de Treino Academia</p>
                            <p class="fs-2 color-cyan">Aplicativo desenvolvido em Kotlin com o Backend feito em Java, framework spring boot. 
                                O projeto permite que o usuario crie uma conta no aplicativo de treinos, registre seus treinos, seus resultados e ate mesmo acompanhe sua 
                                evolucao na academia.</p>
                            <p class="fs-2 color-cyan">Dificuldade</p>
                            <div class="d-flex">
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle"></div>
                            </div>
                            <p class="fs-2 color-cyan">Para mais detalhes, acesse meu repositorio no Github: </p>
                            <button class="btn-card mt-5">
                                Github
                            </button>
                        </div>
                    </div>
                    <div class="d-flex mt-5">
                        <div class="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                            <p class="fs-3 color-cyan">CRUD Student System</p>
                            <p class="fs-2 color-cyan">Projeto de um CRUD com o Backend desenvolvido em Java com SpringBoot, Frontend utilizando o React.js e o banco de dados
                                utilizamos o MySql.</p>
                            <p class="fs-2 color-cyan">Dificuldade</p>
                            <div class="d-flex">
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle bg-cyan me-3"></div>
                                <div class="circle me-3"></div>
                                <div class="circle me-3"></div>
                                <div class="circle"></div>
                            </div>
                            <p class="fs-2 color-cyan">Para mais detalhes, acesse meu repositorio no Github: </p>
                            <button class="btn-card mt-5">
                                Github
                            </button>
                        </div>
                        <div class="p-5 mx-5 w-50">

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ProjectsPage