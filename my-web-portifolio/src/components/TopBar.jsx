import { Link } from "react-router"
import "../styles/TopBar.css"

function TopBar() {
    return (
        <>
            <div id="div--main-topbar" className="bg-transparent ft-orbitron">
                <div className="div--topbar mx-4 my-3">
                </div>
                <div className="div--topbar mx-4 my-3">
                    <Link className="link" to="/">Home</Link>
                    <div className="div--spacing mx-4"></div>
                    <Link className="link" to="/projects">Projetos</Link>
                    <div className="div--spacing mx-4"></div>
                    <Link className="link" to="/about-me">Sobre mim</Link>
                    <div className="div--spacing mx-4"></div>
                    <Link className="link me-5" to="/contact">Contato</Link>
                </div>
            </div>
        </>
    )
}

export default TopBar