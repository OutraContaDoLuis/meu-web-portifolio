import TopBar from "../components/TopBar.jsx"
import Footer from "../components/Footer.jsx"

import "../styles/ContactPage.css"

function ContactPage() {
    return (
        <>
            <div>
                <TopBar />
                <div className="div--contact-page bg-red">
                    <div className="p-5">
                        <h1 className="color-black ft-orbitron">Como posso entrar em contato?</h1>
                        <p className="color-black fs-3 ft-orbitron">Caso queira entrar em contato comigo, voce pode me mandar um email pelo seguinte endereco: luis.henri.campaner@gmail.com</p>
                        <p className="color-black fs-3 ft-orbitron">Ou se nao, voce pode me contatar em: </p>
                        <button className="btn ft-rajdhani fs-3 fw-500 me-3">
                            <i className="bi bi-github me-3"></i>
                            Github
                        </button>
                        <button className="btn ft-rajdhani fs-3 fw-500">
                            <i className="bi bi-instagram me-3"></i>
                            Instagram
                        </button>
                    </div>                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ContactPage