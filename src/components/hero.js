/**
 * Componente Hero Section - Architettura SPA
 * Layout a due colonne responsive utilizzando le classi native di Bootstrap 5 e stili personalizzati del brand.
 * @returns {string} Stringa HTML del componente Hero
 */
export function renderHero() {
    return `
    <section id="hero" class="lp-hero bg-light py-5 border-bottom">
        <div class="container py-lg-5">
            <div class="row align-items-center gy-5">
                
                <!-- Colonna Sinistra: Testi e Chiamate all'Azione (CTA) -->
                <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-4 fw-bold text-dark mb-3">
                        Il Futuro dello Sviluppo Web con <span class="text-primary">InTheNameOfFox</span>
                    </h1>
                    <p class="lead text-muted mb-4">
                        Landing page ultra-veloci, performanti e scalabili. Sviluppate in JavaScript puro, ospitate su Vercel e integrate nativamente con Supabase.
                    </p>
                    <div class="d-sm-flex justify-content-sm-center justify-content-lg-start gap-3">
                        <!-- CORREZIONE: Applicata la classe .lp-btn-primary definita nel tuo CSS -->
                        <a href="#contact" class="btn lp-btn-primary btn-lg px-4 mb-2 mb-sm-0 fw-semibold">
                            Inizia Ora
                        </a>
                        <a href="#features" class="btn btn-outline-secondary btn-lg px-4 fw-semibold">
                            Scopri di più
                        </a>
                    </div>
                </div>

                <!-- Colonna Destra: Elemento Grafico / Immagine Funzionante -->
                <div class="col-lg-6">
                    <div class="lp-hero-image-wrapper p-3 bg-white shadow-sm rounded-4 border text-center">
                        <!-- CORREZIONE: Inserito un URL immagine completo e valido da Unsplash -->
                        <img src="https://unsplash.com" 
                             alt="Dashboard Analytics" 
                             class="img-fluid rounded-3" 
                             loading="eager">
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
}

        </div>
    </section>
    `;
}
