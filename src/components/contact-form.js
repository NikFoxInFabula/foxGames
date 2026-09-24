/**
 * Componente Contact Form Section - Architettura SPA
 * Contiene la struttura del form di contatto e le classi di validazione Bootstrap 5.
 * @returns {string} Stringa HTML del componente Contact Form
 */
export function renderContactForm() {
    return `
    <section id="contact" class="lp-contact py-5 bg-light">
        <div class="container py-lg-5">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-7">
                    
                    <!-- Card Contenitore Form -->
                    <div class="card border-0 shadow-sm p-4 p-sm-5 rounded-4">
                        <div class="text-center mb-4">
                            <h2 class="fw-bold text-dark">Rimani in contatto</h2>
                            <p class="text-muted">Compila il modulo sottostante per ricevere maggiori informazioni sul progetto.</p>
                        </div>

                        <!-- Form HTML -->
                        <form id="leadForm" class="needs-validation" novalidate>
                            <div class="row g-3">
                                
                                <!-- Campo Nome -->
                                <div class="col-sm-6">
                                    <label for="fullName" class="form-label fw-semibold">Nome Completo</label>
                                    <input type="text" class="form-control" id="fullName" placeholder="Mario Rossi" required>
                                </div>

                                <!-- Campo Email -->
                                <div class="col-sm-6">
                                    <label for="email" class="form-label fw-semibold">Indirizzo Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="mario.rossi@esempio.com" required>
                                </div>

                                <!-- Campo Telefono -->
                                <div class="col-12">
                                    <label for="phone" class="form-label fw-semibold">Telefono <span class="text-muted small">(Opzionale)</span></label>
                                    <input type="tel" class="form-control" id="phone" placeholder="+39 333 1234567">
                                </div>

                                <!-- Campo Messaggio -->
                                <div class="col-12">
                                    <label for="message" class="form-label fw-semibold">Messaggio <span class="text-muted small">(Opzionale)</span></label>
                                    <textarea class="form-control" id="message" rows="4" placeholder="Scrivi qui la tua richiesta..."></textarea>
                                </div>

                                <!-- Pulsante Invio -->
                                <div class="col-12 mt-4">
                                    <button class="btn btn-primary btn-lg w-100 fw-semibold" type="submit">
                                        Invia Candidatura
                                    </button>
                                </div>

                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </section>
    `;
}
