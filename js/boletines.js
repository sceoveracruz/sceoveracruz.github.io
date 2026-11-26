// ============================================================
//  boletines.js  –  LÓGICA de noticias, boletines e histórico
//  Las noticias NO están aquí: viven en js/noticias/AAAA-MM.js (un archivo
//  por mes). La lista de meses está en js/noticias/config.js.
//  Este archivo normalmente ya no hay que editarlo.
// ============================================================

// Lista global de noticias, de la más reciente a la más antigua.
// Se llena bajo demanda con los meses necesarios (ver cargarNoticias).
const noticias = [];
window.NOTICIAS_POR_MES = window.NOTICIAS_POR_MES || {};
const _mesesIntentados = {};
let _todasCargadas = false;

function _reconstruirNoticias() {
    noticias.length = 0;
    (window.MESES_NOTICIAS || []).forEach(function (mes) {
        (window.NOTICIAS_POR_MES[mes] || []).forEach(function (n) { noticias.push(n); });
    });
}

function _cargarMes(mes) {
    return new Promise(function (resolve) {
        if (_mesesIntentados[mes] || window.NOTICIAS_POR_MES[mes]) { _mesesIntentados[mes] = true; resolve(); return; }
        _mesesIntentados[mes] = true;
        const s = document.createElement('script');
        s.src = 'js/noticias/' + mes + '.js?v=' + Math.floor(Date.now() / 60000);
        s.onload = resolve;
        s.onerror = function () { console.warn('No se pudo cargar js/noticias/' + mes + '.js'); resolve(); };
        document.head.appendChild(s);
    });
}

// Carga meses (del más reciente al más antiguo) hasta reunir "minimo" notas.
// cargarNoticias(Infinity) carga todo el histórico.
function cargarNoticias(minimo) {
    const meses = window.MESES_NOTICIAS || [];
    if (!meses.length) console.error('Falta js/noticias/config.js (MESES_NOTICIAS)');
    return (async function () {
        for (const mes of meses) {
            if (noticias.length >= minimo) break;
            await _cargarMes(mes);
            _reconstruirNoticias();
        }
        if (meses.every(function (m) { return _mesesIntentados[m]; })) _todasCargadas = true;
        return noticias;
    })();
}
window.cargarNoticias = cargarNoticias;

// Función para mostrar detalle de noticia
function mostrarDetalleNoticia(id) {
    const noticia = noticias.find(n => n.id === id);
    if (!noticia) {
        // Puede estar en un mes que todavía no se ha cargado
        if (!_todasCargadas) {
            cargarNoticias(Infinity).then(function () {
                if (noticias.some(n => n.id === id)) mostrarDetalleNoticia(id);
            });
        }
        return;
    }

    const esIndex = !!document.getElementById('contenido-principal');

    if (esIndex && typeof window.activarVista === 'function') {
        window.activarVista('noticia');
    } else {
        // Fallback manual si no existe activarVista o en boletines.html / historico.html
        const seccionesAocultar = [
            'contenido-principal',
            'seccion-accesos-rapidos',
            'especialidades-contenido',
            'requisitos-inscripcion',
            'plantel-info',
            'especialidad-info',
            'banner-marquesina'
        ];
        seccionesAocultar.forEach(function (secId) {
            const el = document.getElementById(secId);
            if (el) {
                el.style.display = 'none';
                el.classList.remove('seccion-visible');
                el.classList.add('seccion-oculta');
            }
        });

        const contenedorBoletines = document.getElementById('contenedor-boletines');
        if (contenedorBoletines && contenedorBoletines.parentElement) {
            contenedorBoletines.parentElement.style.display = 'none';
        }
        const contenedorHistorico = document.getElementById('contenedor-historico');
        if (contenedorHistorico && contenedorHistorico.parentElement) {
            contenedorHistorico.parentElement.style.display = 'none';
        }

        const detalleNoticia = document.getElementById("noticia-detalle");
        if (detalleNoticia) {
            detalleNoticia.style.display = 'block';
            detalleNoticia.classList.remove('seccion-oculta');
            detalleNoticia.classList.add('seccion-visible');
        }
    }

    const detalleNoticia = document.getElementById("noticia-detalle");
    if (!detalleNoticia) return;

    // Texto dinámico para el botón de regreso (esIndex ya está declarada arriba)
    const esHistorico = !!document.getElementById('contenedor-historico');
    let textoBoton = '← Regresar a Boletines';
    if (esHistorico) {
        textoBoton = '← Regresar al Histórico';
    }

    // Filtrar y deduplicar fotos adicionales para que NUNCA se dupliquen imágenes
    const fotosExtras = [];
    const fotosVistas = new Set();
    if (noticia.imagen) {
        fotosVistas.add(String(noticia.imagen).trim().toLowerCase());
    }

    (noticia.imagenesAdicionales || []).forEach(item => {
        if (typeof item === 'string') {
            const clave = item.trim().toLowerCase();
            if (!fotosVistas.has(clave)) {
                fotosVistas.add(clave);
                fotosExtras.push(item);
            }
        } else if (item && item.tipo === 'video') {
            const claveVideo = String(item.enlace || item.miniatura || '').trim().toLowerCase();
            if (!fotosVistas.has(claveVideo)) {
                fotosVistas.add(claveVideo);
                fotosExtras.push(item);
            }
        }
    });

    // Lista de fotos de ESTA noticia para navegar con flechas en el visor
    window._galeriaActual = fotosExtras.filter(function (it) { return typeof it === 'string'; });

    // Generar galería de imágenes adicionales si existen
    let galeriaHTML = '';
    if (fotosExtras.length > 0) {
        galeriaHTML = `
            <div class="galeria-noticia-seccion">
                <h3 class="galeria-noticia-titulo">📸 Galería de Fotografías</h3>
                <div class="galeria-noticia-grid">
                    ${fotosExtras.map(item => {
                        if (typeof item === "string") {
                            return `
                                <div class="galeria-foto-card" onclick="abrirImagenEnGrande('${item}')">
                                    <img loading="lazy" src="${item}" alt="Fotografía adicional" class="galeria-foto-img">
                                    <div class="galeria-foto-overlay">
                                        <span>🔍 Ampliar imagen</span>
                                    </div>
                                </div>
                            `;
                        }

                        if (item.tipo === "video") {
                            return `
                                <div onclick="window.open('${item.enlace}','_blank', 'noopener')" class="galeria-video-card">
                                    <img loading="lazy" src="${item.miniatura}" alt="Video" class="galeria-foto-img">
                                    <div class="galeria-play-badge">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                    </div>
                                    <span class="galeria-video-label">Ver video en Facebook</span>
                                </div>
                            `;
                        }
                    }).join('')}
                </div>
            </div>
        `;
    }

    detalleNoticia.innerHTML = `
        <article class="noticia-detalle-articulo">
            <div class="noticia-detalle-acciones">
                <button type="button" onclick="regresarBoletines()" class="btn-regresar-3d">
                    ${textoBoton}
                </button>
            </div>

            <header class="noticia-detalle-encabezado">
                <div class="noticia-detalle-meta">
                    <span class="meta-badge-fecha">📅 ${noticia.fecha}</span>
                    <span class="meta-badge-categoria">Boletín Informativo</span>
                </div>
                <h1 class="noticia-detalle-titulo">${noticia.titulo}</h1>
                <div class="divisor-dorado-3d"></div>
            </header>

            <div class="noticia-detalle-portada-wrap">
                <img loading="lazy" src="${noticia.imagen}" alt="${noticia.titulo}" class="noticia-detalle-portada">
            </div>

            <div class="noticia-detalle-contenido">
                ${noticia.textoCompleto}
            </div>

            ${galeriaHTML}

            <div class="noticia-detalle-footer-acciones">
                <button type="button" onclick="regresarBoletines()" class="btn-regresar-3d">
                    ${textoBoton}
                </button>
            </div>
        </article>
    `;

    // Actualizar hash URL de forma limpia
    history.pushState(null, document.title, window.location.pathname + '#noticia-' + id);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para regresar a boletines o vista anterior
function regresarBoletines() {
    const esIndex = !!document.getElementById('contenido-principal');
    if (esIndex) {
        // Desde una nota abierta en la pantalla de inicio, "Regresar a Boletines"
        // lleva a la página de Boletines.
        window.location.href = 'boletines.html';
    } else {
        // Estamos en boletines.html o historico.html
        const contenedorBoletines = document.getElementById('contenedor-boletines');
        if (contenedorBoletines && contenedorBoletines.parentElement) {
            contenedorBoletines.parentElement.style.display = 'block';
        }
        const contenedorHistorico = document.getElementById('contenedor-historico');
        if (contenedorHistorico && contenedorHistorico.parentElement) {
            contenedorHistorico.parentElement.style.display = 'block';
        }
        const detalleNoticia = document.getElementById("noticia-detalle");
        if (detalleNoticia) detalleNoticia.style.display = 'none';
        history.pushState(null, document.title, window.location.pathname + window.location.search);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ---------- Visor de imágenes con flechas ----------
window._galeriaActual = window._galeriaActual || [];
let _indiceVisor = 0;

function _asegurarControlesVisor() {
    const modal = document.getElementById('modal-imagen');
    if (!modal || modal.dataset.controles) return;
    modal.dataset.controles = '1';
    modal.classList.add('visor-imagen');
    modal.removeAttribute('onclick');

    function boton(clase, etiqueta, html, accion) {
        const bt = document.createElement('button');
        bt.type = 'button';
        bt.className = 'visor-btn ' + clase;
        bt.setAttribute('aria-label', etiqueta);
        bt.innerHTML = html;
        bt.addEventListener('click', function (e) { e.stopPropagation(); accion(); });
        modal.appendChild(bt);
        return bt;
    }
    boton('visor-cerrar', 'Cerrar', '&#10005;', cerrarModalImagen);
    boton('visor-ant', 'Imagen anterior', '&#10094;', function () { navegarVisor(-1); });
    boton('visor-sig', 'Imagen siguiente', '&#10095;', function () { navegarVisor(1); });
    const cont = document.createElement('div');
    cont.className = 'visor-contador';
    modal.appendChild(cont);

    // Clic en el fondo cierra; clic en la imagen no.
    modal.addEventListener('click', function (e) { if (e.target === modal) cerrarModalImagen(); });
    const img = document.getElementById('modal-img');
    if (img) img.addEventListener('click', function (e) { e.stopPropagation(); });

    // Teclado
    document.addEventListener('keydown', function (e) {
        if (modal.style.display === 'none') return;
        if (e.key === 'Escape') cerrarModalImagen();
        else if (e.key === 'ArrowLeft') navegarVisor(-1);
        else if (e.key === 'ArrowRight') navegarVisor(1);
    });

    // Deslizar con el dedo (móvil)
    let x0 = null;
    modal.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    modal.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        x0 = null;
        if (Math.abs(dx) > 50) navegarVisor(dx < 0 ? 1 : -1);
    }, { passive: true });
}

function _pintarVisor() {
    const modal = document.getElementById('modal-imagen');
    const img = document.getElementById('modal-img');
    const lista = window._galeriaActual;
    if (!modal || !img || !lista.length) return;
    img.src = lista[_indiceVisor];
    const hay = lista.length > 1;
    modal.querySelectorAll('.visor-ant, .visor-sig, .visor-contador').forEach(function (el) {
        el.style.display = hay ? '' : 'none';
    });
    const cont = modal.querySelector('.visor-contador');
    if (cont) cont.textContent = (_indiceVisor + 1) + ' / ' + lista.length;
}

function navegarVisor(paso) {
    const n = window._galeriaActual.length;
    if (n < 2) return;
    _indiceVisor = (_indiceVisor + paso + n) % n;
    _pintarVisor();
}

// Función para abrir imagen en tamaño grande
function abrirImagenEnGrande(src) {
    const modal = document.getElementById('modal-imagen');
    const modalImg = document.getElementById('modal-img');
    if (!modal || !modalImg) return;
    _asegurarControlesVisor();
    let idx = window._galeriaActual.indexOf(src);
    if (idx === -1) { window._galeriaActual = [src]; idx = 0; }
    _indiceVisor = idx;
    modal.style.display = 'flex';
    _pintarVisor();
}

// Función para cerrar modal
function cerrarModalImagen() {
    const modal = document.getElementById('modal-imagen');
    if (modal) modal.style.display = 'none';
}

// Hacer funciones disponibles globalmente
window.mostrarDetalleNoticia = mostrarDetalleNoticia;
window.regresarBoletines = regresarBoletines;
window.abrirImagenEnGrande = abrirImagenEnGrande;
window.cerrarModalImagen = cerrarModalImagen;
window.navegarVisor = navegarVisor;
window.generarNoticiasIndex = generarNoticiasIndex;
window.generarBoletines = generarBoletines;
window.generarHistoricoNoticias = generarHistoricoNoticias;

// Función para generar boletines dinámicamente en boletines.html
function generarBoletines() {
    console.log('generarBoletines llamada');
    const contenedor = document.getElementById('contenedor-boletines');
    console.log('Contenedor boletines encontrado:', contenedor);
    if (!contenedor) {
        console.log('No se encontró contenedor-boletines');
        return;
    }

    // Mostrar solo las 9 más recientes (el resto está en el Histórico)
    contenedor.innerHTML = noticias.slice(0, 9).map(noticia => `
        <article class="tarjeta-boletin-item" onclick="mostrarDetalleNoticia(${noticia.id})">
            <div class="tarjeta-boletin-img-wrap">
                <img loading="lazy" class="tarjeta-boletin-img" src="${noticia.imagen}" alt="${noticia.titulo}">
            </div>
            <div class="tarjeta-boletin-cuerpo">
                <span class="tarjeta-boletin-fecha">📅 ${noticia.fecha}</span>
                <h3 class="tarjeta-boletin-titulo">${noticia.titulo}</h3>
                <p class="tarjeta-boletin-resumen">${noticia.textoPrevio}</p>
                <span class="tarjeta-boletin-btn">Leer nota completa →</span>
            </div>
        </article>
    `).join('');
    console.log('Boletines generados');
}

// Función para generar noticias en index.html (muestra la nota directamente al hacer clic)
function generarNoticiasIndex() {
    console.log('generarNoticiasIndex llamada');
    const contenedor = document.getElementById('contenedor-noticias-index');
    console.log('Contenedor encontrado:', contenedor);
    if (!contenedor) {
        console.log('No se encontró contenedor-noticias-index');
        return;
    }

    // Tomar las 2 noticias más recientes
    const noticiasRecientes = noticias.slice(0, 2);
    console.log('Noticias recientes:', noticiasRecientes.length);

    contenedor.innerHTML = noticiasRecientes.map(noticia => `
        <article class="tarjeta-noticia-home" onclick="mostrarDetalleNoticia(${noticia.id})">
            <div class="tarjeta-noticia-img-wrap">
                <img loading="lazy" src="${noticia.imagen}" alt="${noticia.titulo}" class="tarjeta-noticia-img">
                <span class="tarjeta-noticia-badge">Noticia Reciente</span>
            </div>
            <div class="tarjeta-noticia-cuerpo">
                <div class="tarjeta-noticia-fecha">📅 ${noticia.fecha}</div>
                <h3 class="tarjeta-noticia-titulo">${noticia.titulo}</h3>
                <p class="tarjeta-noticia-resumen">${noticia.textoPrevio}</p>
                <div class="tarjeta-noticia-cta">
                    <span class="tarjeta-noticia-btn">Leer nota completa →</span>
                </div>
            </div>
        </article>
    `).join('');
    console.log('Noticias generadas en contenedor');
}

// Inicialización de noticias e histórico
document.addEventListener('DOMContentLoaded', function () {
    console.log('Boletines.js cargado - DOMContentLoaded');
    // Pequeño delay para asegurar que el DOM esté completamente listo
    setTimeout(function () {
        const esPaginaBoletines = !!document.getElementById('contenedor-boletines');
        const esPaginaHistorico = !!document.getElementById('contenedor-historico');
        // Inicio: 2 notas · Boletines: 9 · Histórico: todas
        const minimo = esPaginaHistorico ? Infinity : (esPaginaBoletines ? 9 : 2);
        cargarNoticias(minimo).then(function () {
        generarNoticiasIndex();
        if (esPaginaBoletines) {
            generarBoletines();
        }
        if (esPaginaHistorico) {
            generarHistoricoNoticias();
        }

        // Verificar si hay noticia en Hash URL o localStorage
        const match = window.location.hash.match(/^#noticia-(\d+)$/);
        const noticiaIdLocal = localStorage.getItem('mostrarNoticia');

        if (match) {
            mostrarDetalleNoticia(parseInt(match[1], 10));
        } else if (noticiaIdLocal) {
            localStorage.removeItem('mostrarNoticia');
            mostrarDetalleNoticia(parseInt(noticiaIdLocal, 10));
        }
        });
    }, 100);
});

window.addEventListener('hashchange', function () {
    const match = window.location.hash.match(/^#noticia-(\d+)$/);
    if (match) {
        mostrarDetalleNoticia(parseInt(match[1], 10));
    } else if (window.location.hash === '') {
        // Botón "atrás" del navegador: en index vuelve a la portada (sin redirigir)
        if (document.getElementById('contenido-principal')) {
            if (typeof window.activarVista === 'function') window.activarVista('inicio');
        } else if (typeof regresarBoletines === 'function') {
            regresarBoletines();
        }
    }
});

// Función para generar histórico de noticias
function generarHistoricoNoticias() {
    console.log('generarHistoricoNoticias llamada');
    const contenedor = document.getElementById('contenedor-historico');
    console.log('Contenedor histórico encontrado:', contenedor);
    if (!contenedor) {
        console.log('No se encontró contenedor-historico');
        return;
    }

    // Agrupar noticias por año y mes
    const noticiasPorAnioMes = {};
    noticias.forEach(noticia => {
        const anio = noticia.anio;
        const mes = noticia.mes;
        const clave = `${anio}-${mes}`;

        if (!noticiasPorAnioMes[anio]) {
            noticiasPorAnioMes[anio] = {};
        }
        if (!noticiasPorAnioMes[anio][mes]) {
            noticiasPorAnioMes[anio][mes] = [];
        }
        noticiasPorAnioMes[anio][mes].push(noticia);
    });

    // Ordenar años de forma descendente
    const aniosOrdenados = Object.keys(noticiasPorAnioMes).sort((a, b) => b - a);

    // Generar HTML
    let html = '';
    aniosOrdenados.forEach(anio => {
        html += `
            <div class="u-style-22">
                <h3 class="u-style-23">${anio}</h3>
        `;

        // Ordenar meses (de actual a más viejo)
        const mesesOrden = Object.keys(noticiasPorAnioMes[anio]).sort((a, b) => {
            const ordenMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            return ordenMeses.indexOf(b) - ordenMeses.indexOf(a);
        });

        mesesOrden.forEach(mes => {
            html += `
                <div class="u-style-24">
                    <h4 class="u-style-25">* ${mes}</h4>
                    <ul class="u-style-26">
            `;

            noticiasPorAnioMes[anio][mes].forEach(noticia => {
                html += `
                    <li class="u-style-27" onclick="mostrarDetalleNoticia(${noticia.id})" style="cursor:pointer;">
                        <strong>${noticia.titulo}</strong>
                    </li>
                `;
            });

            html += `
                    </ul>
                </div>
            `;
        });

        html += `
            </div>
        `;
    });

    contenedor.innerHTML = html;
    console.log('Histórico generado');
}

// (El histórico se genera arriba, cuando ya cargaron los meses.)
// ------------------------------------------------------------
// Respaldo de imágenes de noticias: si "noticiaNN.webp" no carga
// (otra extensión, mayúsculas...), prueba variantes y, como último
// recurso, muestra el logo en lugar de un recuadro roto.
// ------------------------------------------------------------
document.addEventListener('error', function (e) {
    var img = e.target;
    if (!img || img.tagName !== 'IMG') return;
    var src = img.getAttribute('src') || '';
    if (src.indexOf('imagenes/noticias/') === -1) return;

    var base = src.replace(/\.[A-Za-z0-9]+(\?.*)?$/, '');
    var exts = ['.webp', '.jpg', '.jpeg', '.png', '.WEBP', '.JPG', '.JPEG', '.PNG'];
    var intento = parseInt(img.dataset.fbIntento || '0', 10);

    while (intento < exts.length) {
        var candidata = base + exts[intento];
        intento++;
        if (candidata !== src) {
            img.dataset.fbIntento = String(intento);
            img.src = candidata;
            return;
        }
    }
    if (!img.dataset.fbFinal) {
        img.dataset.fbFinal = '1';
        img.src = 'imagenes/cecatin.png';
        img.style.objectFit = 'contain';
        img.style.background = '#f3f4f7';
    }
}, true);
