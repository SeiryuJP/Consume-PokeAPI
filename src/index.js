import { init, createHtml } from "./js/pokemon-html";

createHtml();
document.body.addEventListener('keyup', (event) => {
    if (event.target.id === 'search' && event.key === 'Enter') {
        init(event.target.value);
        event.target.value = '';
    }
});