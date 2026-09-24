/**
 * Componente Features Section - Architettura SPA
 * Layout a griglia responsive di Bootstrap 5 per elencare i punti di forza.
 * @returns {string} Stringa HTML del componente Features
 */
export function renderFeatures() {
    return `
    <section id="features" class="lp-features py-5 bg-white border-bottom">
        <div class="container py-lg-5">
            
            <!-- Intestazione Sezione -->
            <div class="text-center max-width-600 mx-auto mb-5">
                <h2 class="fw-bold text-dark">Perché scegliere la nostra soluzione?</h2>
                <p class="lead text-muted">Offriamo le tecnologie più moderne sul mercato per garantire la massima efficienza.</p>
            </div>

            <!-- Griglia dei Servizi / Caratteristiche -->
            <div class="row g-4">
                
                <!-- Card 1: Prestazioni -->
                <div class="col-md-4">
                    <div class="card h-100 p-4 border-0 shadow-sm text-center lp-feature-card">
                        <div class="text-primary mb-3 display-6">⚡</div>
                        <h4 class="fw-semibold text-dark mb-2">Velocità Estrema</h4>
                        <p class="text-muted mb-0">Grazie all'architettura SPA e al deploy globale di Vercel, le tue pagine caricano istantaneamente.</p>
                    </div>
                </div>

                <!-- Card 2: Sicurezza/Database -->
                <div class="col-md-4">
                    <div class="card h-100 p-4 border-0 shadow-sm text-center lp-feature-card">
                        <div class="text-primary mb-3 display-6">🔒</div>
                        <h4 class="fw-semibold text-dark mb-2">Database Sicuro</h4>
                        <p class="text-muted mb-0">I dati degli utenti sono protetti su Supabase, il backend open-source basato sulla solidità di PostgreSQL.</p>
                    </div>
                </div>

                <!-- Card 3: Scalabilità -->
                <div class="col-md-4">
                    <div class="card h-100 p-4 border-0 shadow-sm text-center lp-feature-card">
                        <div class="text-primary mb-3 display-6">📈</div>
                        <h4 class="fw-semibold text-dark mb-2">Pronto a Crescere</h4>
                        <p class="text-muted mb-0">Un'architettura modulare e pulita pensata per scalare facilmente senza riscritture di codice.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
}
