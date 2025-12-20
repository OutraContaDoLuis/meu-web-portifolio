import TopBar from "../components/TopBar.jsx"
import Footer from "../components/Footer.jsx"

import "../styles/ProjectsPage.css"

function ProjectsPage() {
    return (
        <>
            <div>
                <TopBar />
                <div className="bg-dark p-5">
                    <h1 className="ft-orbitron color-cyan">Projetos</h1>
                    <div className="d-flex">
                        <div className="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                            <p className="fs-3 color-cyan">App Gerenciador de Arquivos</p>
                            <p className="fs-2 color-cyan">Aplicativo desenvolvido em Kotlin e Java que fornece ao usuario todas as funcionalidades 
                                para que ele possa administrar seus arquivos dentro do seu celular. O usuario pode criar arquivos de texto, editar esses arquivos, 
                                enviar arquivos pela internet e etc.</p>
                            <p className="fs-2 color-cyan">Dificuldade</p>
                            <div className="d-flex">
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle bg-cyan"></div>
                            </div>
                            <p className="fs-2 color-cyan">Para mais detalhes, acesse meu repositorio no Github: </p>
                            <button className="btn-card mt-5">
                                Github
                            </button>
                        </div>
                        <div className="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                            <p className="fs-3 color-cyan">Sistema de Organizacao de Treino Academia</p>
                            <p className="fs-2 color-cyan">Aplicativo desenvolvido em Kotlin com o Backend feito em Java, framework spring boot. 
                                O projeto permite que o usuario crie uma conta no aplicativo de treinos, registre seus treinos, seus resultados e ate mesmo acompanhe sua 
                                evolucao na academia.</p>
                            <p className="fs-2 color-cyan">Dificuldade</p>
                            <div className="d-flex">
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle"></div>
                            </div>
                            <p className="fs-2 color-cyan">Para mais detalhes, acesse meu repositorio no Github: </p>
                            <button className="btn-card mt-5">
                                Github
                            </button>
                        </div>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="card bg-dark-blue ft-rajdhani p-5 mx-5 w-50">
                            <p className="fs-3 color-cyan">CRUD Student System</p>
                            <p className="fs-2 color-cyan">Projeto de um CRUD com o Backend desenvolvido em Java com SpringBoot, Frontend utilizando o React.js e o banco de dados
                                utilizamos o MySql.</p>
                            <p className="fs-2 color-cyan">Dificuldade</p>
                            <div className="d-flex">
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle bg-cyan me-3"></div>
                                <div className="circle me-3"></div>
                                <div className="circle me-3"></div>
                                <div className="circle"></div>
                            </div>
                            <p className="fs-2 color-cyan">Para mais detalhes, acesse meu repositorio no Github: </p>
                            <button className="btn-card mt-5">
                                Github
                            </button>
                        </div>
                        <div className="p-5 mx-5 w-50">

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

export default ProjectsPage