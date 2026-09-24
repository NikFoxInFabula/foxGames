/**
 * Componente Footer - Architettura SPA
 * Genera la struttura semantica del footer utilizzando le utility di Bootstrap 5.
 * @returns {string} Stringa HTML del componente
 */
export function renderFooter() {
    return `
    <footer class="bg-dark text-light py-5 mt-auto border-top border-secondary">
        <div class="container">
            <div class="row gy-4">
                <!-- Sezione Info Brand -->
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-uppercase fw-bold text-warning mb-3">InTheNameOfFox</h5>
                    <p class="small text-secondary">
                        Sviluppo di landing page moderne, scalabili e ad alte prestazioni con architettura JAMstack (Vercel + Supabase).
                    </p>
                </div>

                <!-- Sezione Link Rapidi -->
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-uppercase fw-bold mb-3">Link Utili</h5>
                    <ul class="list-unstyled mb-0">
                        <li class="mb-2"><a href="#hero" class="text-secondary text-decoration-none hover-link">Home</a></li>
                        <li class="mb-2"><a href="#features" class="text-secondary text-decoration-none hover-link">Funzionalità</a></li>
                        <li class="mb-2"><a href="#contact" class="text-secondary text-decoration-none hover-link">Contattaci</a></li>
                    </ul>
                </div>

                <!-- Sezione Legale -->
                <div class="col-lg-4 col-md-12">
                    <h5 class="text-uppercase fw-bold mb-3">Note Legali</h5>
                    <ul class="list-unstyled mb-0">
                        <li class="mb-2"><a href="#" class="text-secondary text-decoration-none hover-link">Privacy Policy</a></li>
                        <li class="mb-2"><a href="#" class="text-secondary text-decoration-none hover-link">Termini di Servizio</a></li>
                    </ul>
                </div>
            </div>

            <!-- Riga del Copyright con Anno Dinamico JavaScript -->
            <div class="row mt-4 pt-4 border-top border-secondary text-center">
                <div class="col-md-12">
                    <p class="small text-secondary mb-0">
                        &copy; ${new Date().getFullYear()} InTheNameOfFox. Tutti i diritti riservati. Sviluppato per fini didattici.
                    </p>
                </div>
            </div>
        </div>
    </footer>
    `;
}
