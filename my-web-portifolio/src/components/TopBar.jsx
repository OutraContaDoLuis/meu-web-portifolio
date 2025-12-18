import "../styles/TopBar.css"

function TopBar() {
    return (
        <>
            <div id="div--main-topbar" class="bg-transparent ft-orbitron">
                <div class="div--topbar mx-4 my-3">
                </div>
                <div class="div--topbar mx-4 my-3">
                    <p>Home</p>
                    <div class="div--spacing mx-4"></div>
                    <p>Projetos</p>
                    <div class="div--spacing mx-4"></div>
                    <p>Sobre mim</p>
                    <div class="div--spacing mx-4"></div>
                    <p class="me-4">Contato</p>
                </div>
            </div>
        </>
    )
}

export default TopBar