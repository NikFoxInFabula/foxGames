// Importazione dei singoli moduli della SPA (Incluso l'Header)
import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderFeatures } from './components/features.js';
import { renderContactForm } from './components/contact-form.js';
import { renderFooter } from './components/footer.js';

class App {
    constructor() {
        // Seleziona il punto di ingresso nel DOM
        this.appContainer = document.getElementById('app');
    }

    /**
     * Inizializza l'applicazione e monta i componenti grafici nell'ordine corretto
     */
    init() {
        if (!this.appContainer) {
            console.error("Errore: Elemento radice #app non trovato nel DOM.");
            return;
        }

        // Composizione della Landing Page inserendo l'Header in cima
        this.appContainer.innerHTML = `
            ${renderHeader()}
            <main class="flex-shrink-0">
                ${renderHero()}
                ${renderFeatures()}
                ${renderContactForm()}
            </main>
            ${renderFooter()}
        `;

        // Attiva gli ascoltatori di eventi dopo il rendering dell'HTML
        this.initEventListeners();
    }

    /**
     * Configura gli eventi interattivi (es. intercettazione invio del form)
     */
    initEventListeners() {
        const form = document.getElementById('leadForm');
        if (form) {
            form.addEventListener('submit', (event) => this.handleLeadSubmission(event, form));
        }
    }

    /**
     * Gestisce la sottomissione del form di contatto
     * @param {Event} event - L'evento nativo del submit
     * @param {HTMLFormElement} form - L'elemento HTML del form
     */
    async handleLeadSubmission(event, form) {
        event.preventDefault(); // Blocca il rinfresco della pagina nativo

        // Validazione nativa di Bootstrap
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        form.classList.add('was-validated');

        // Raccolta dei dati inseriti dall'utente
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        console.log("Dati pronti per essere inviati a Supabase:", formData);
        
        // Inseriremo la logica di comunicazione con Supabase
        alert(`Grazie ${formData.fullName}! Il modulo è valido. Architettura pronta per il collegamento a Supabase.`);
    }
}

// Avvia l'applicazione non appena il DOM è completamente pronto
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});