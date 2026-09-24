/**
 * Componente Header / Navbar - Architettura SPA
 * Barra di navigazione responsive con effetto "sticky" in cima allo schermo.
 * @returns {string} Stringa HTML del componente Header
 */
export function renderHeader() {
    return `
    <header class="sticky-top shadow-sm">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                
                <!-- Logo Brand -->
                <a class="navbar-brand fw-bold text-warning d-flex align-items-center gap-2" href="#">
                    🦊 <span>InTheNameOfFox</span>
                </a>

                <!-- Pulsante Hamburger per Mobile -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Voci di Menu / Link della SPA -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-medium">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#hero">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Funzionalità</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contatto</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>
    `;
}
