import { simonGame } from './webcomponents/simon.js';
customElements.define('simon-game', simonGame);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
        .catch(console.error);
} 