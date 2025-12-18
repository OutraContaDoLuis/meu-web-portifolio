import { Link } from "react-router"
import "../styles/TopBar.css"

function TopBar() {
    return (
        <>
            <div id="div--main-topbar" class="bg-transparent ft-orbitron">
                <div class="div--topbar mx-4 my-3">
                </div>
                <div class="div--topbar mx-4 my-3">
                    <Link class="link" to="/">Home</Link>
                    <div class="div--spacing mx-4"></div>
                    <Link class="link" to="/projects">Projetos</Link>
                    <div class="div--spacing mx-4"></div>
                    <Link class="link" to="/about-me">Sobre mim</Link>
                    <div class="div--spacing mx-4"></div>
                    <Link class="link me-5" to="/contact">Contato</Link>
                </div>
            </div>
        </>
    )
}

export default TopBar