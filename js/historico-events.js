// NOTA: ya no se auto-invoca con DOMContentLoaded. Los scripts se cargan de
// forma dinámica (no bloqueante) para que funcionen bien en redes móviles
// lentas, y eso puede hacer que DOMContentLoaded se dispare antes de que
// este script termine de descargarse. historico.html llama a
// inicializarHistoricoEvents() explícitamente justo después de que todos
// sus scripts terminan de cargar.
function inicializarHistoricoEvents() {
    // Los items del histórico se generan dinámicamente por boletines.js con onclick inline.
    // Este archivo usa delegación de eventos como respaldo por si algún item
    // llegara a tener data-event-click="historico-ev-N" (compatibilidad hacia atrás).
    var contenedor = document.getElementById('contenedor-historico');
    if (!contenedor) return;

    contenedor.addEventListener('click', function (event) {
        var li = event.target.closest('[data-event-click]');
        if (!li) return;
        var attr = li.getAttribute('data-event-click');
        var match = attr && attr.match(/^historico-ev-(\d+)$/);
        if (!match) return;
        event.preventDefault();
        if (typeof window.mostrarDetalleNoticia === 'function') {
            window.mostrarDetalleNoticia(parseInt(match[1], 10));
        }
    });
}
