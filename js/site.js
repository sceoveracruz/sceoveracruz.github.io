// ============================================================
//  site.js  –  Lógica y Datos Compartidos entre TODAS las Páginas
// ============================================================
//
// Fuente única de datos para los menús compartidos
// (OFERTA EDUCATIVA, PLANTELES y CONTACTO)
//
// Para actualizar datos, consulta INSTRUCCIONES-ACTUALIZAR-SITIO.txt.
// Un cambio aquí se refleja automáticamente en index.html, boletines.html
// e historico.html.

var PLANTELES_SCEO = [
    { texto: 'SCEO Veracruz' },
    { texto: 'CECATI 31 Coatzacoalcos' },
    { texto: 'CECATI 33 Río Blanco' },
    { texto: 'CECATI 42 Veracruz' },
    { texto: 'CECATI 49 Córdoba' },
    { texto: 'CECATI 72 Cosoleacaque' },
    { texto: 'CECATI 103 Poza Rica' },
    { texto: 'CECATI 151 Xalapa' },
    { texto: 'CECATI 159 Tlacotalpan' },
    { texto: 'CECATI 168 Cd. Mendoza' },
    { texto: 'CECATI 170 Orizaba' }
];

var CONTACTOS_SCEO = [
    {
        correo: 'ver.sceo@dgcft.sems.gob.mx',
        cargo: 'Subdirector de la Coordinación de Enlace Operativo',
        titular: 'Sergio López Hernández'
    },
    {
        correo: 'ver.acade@dgcft.sems.gob.mx',
        cargo: 'Auxiliar del Área del Apoyo Técnico Académico',
        titular: 'VACANTE'
    },
    {
        correo: 'ver.admvo@dgcft.sems.gob.mx',
        cargo: 'Auxiliar del Área de Apoyo Administrativo',
        titular: 'VACANTE'
    },
    {
        correo: 'ver.plan@dgcft.sems.gob.mx',
        cargo: 'Auxiliar del Área de Planeación y Evaluación',
        titular: 'Irene Margarita Vargas Camarillo'
    },
    {
        correo: 'ver.vinc@dgcft.sems.gob.mx',
        cargo: 'Auxiliar del Área de Vinculación con el Sector Productivo',
        titular: 'Esmeralda Zarate Chávez'
    }
];

var OFERTA_EDUCATIVA_PDF = 'Calendario_Escolar.pdf';

function _escaparHTML(texto) {
    if (!texto) return '';
    var div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

function _buscarMenuPorIcono(altTexto) {
    var icono = document.querySelector('.nav-main img.nav-icon[alt="' + altTexto + '"]');
    if (!icono) return null;
    var toggle = icono.closest('a.dropdown-toggle');
    if (!toggle) return null;
    return toggle.parentElement.querySelector('ul.dropdown-menu');
}

// ------------------------------------------------------------
// Sincronización de Menús Compartidos
// ------------------------------------------------------------
function sincronizarMenusCompartidos() {
    var enIndex = !!document.getElementById('contenido-principal');

    // 1. PLANTELES
    var menuPlanteles = _buscarMenuPorIcono('PLANTELES');
    if (menuPlanteles) {
        menuPlanteles.innerHTML = PLANTELES_SCEO.map(function (p) {
            var onclickAttr = enIndex
                ? 'onclick="window.mostrarInfoPlantel(\'' + _escaparHTML(p.texto) + '\'); return false;"'
                : 'onclick="sessionStorage.setItem(\'mostrarPlantel\', \'' + _escaparHTML(p.texto) + '\'); window.location.href=\'index.html\'; return false;"';
            var hrefPl = 'index.html#plantel-' + encodeURIComponent(p.texto);
            return '<li><a href="' + hrefPl + '" ' + onclickAttr + '>' + _escaparHTML(p.texto) + '</a></li>';
        }).join('');
    }

    // 2. CONTACTO
    var menuContacto = _buscarMenuPorIcono('CONTACTO');
    if (menuContacto) {
        menuContacto.innerHTML = CONTACTOS_SCEO.map(function (c) {
            return '<li><a href="mailto:' + c.correo + '">' +
                '<strong>' + _escaparHTML(c.cargo) + '</strong><br>' +
                '<span class="contacto-titular">Titular: ' + _escaparHTML(c.titular) + '</span><br>' +
                '<span class="contacto-email">Correo: ' + c.correo + '</span>' +
                '</a></li>';
        }).join('');
    }

    // 3. OFERTA EDUCATIVA
    var menuOferta = _buscarMenuPorIcono('OFERTA EDUCATIVA');
    if (menuOferta) {
        var liEspecialidades, liRequisitos;
        if (enIndex) {
            liEspecialidades = '<li><a href="#especialidades" onclick="window.mostrarEspecialidades(); return false;">ESPECIALIDADES</a></li>';
            liRequisitos = '<li><a href="#requisitos" onclick="window.mostrarRequisitos(); return false;">REQUISITOS DE INSCRIPCIÓN</a></li>';
        } else {
            liEspecialidades = '<li><a href="index.html#especialidades" onclick="sessionStorage.setItem(\'mostrarSeccion\', \'especialidades\');">ESPECIALIDADES</a></li>';
            liRequisitos = '<li><a href="index.html#requisitos" onclick="sessionStorage.setItem(\'mostrarSeccion\', \'requisitos\');">REQUISITOS DE INSCRIPCIÓN</a></li>';
        }

        menuOferta.innerHTML =
            '<li><a href="' + OFERTA_EDUCATIVA_PDF + '" target="_blank" rel="noopener">CALENDARIO ESCOLAR (PDF)</a></li>' +
            liEspecialidades +
            liRequisitos;
    }

    document.dispatchEvent(new CustomEvent('menusCompartidosActualizados'));
}

// ------------------------------------------------------------
// Dropdowns Persistentes y Visibles (Desktop y Móvil)
// ------------------------------------------------------------
function setupDropdownsPersistentes() {
    const navMain = document.querySelector('.nav-main');
    if (!navMain) return;

    const dropdowns = Array.from(navMain.querySelectorAll('.dropdown'));

    dropdowns.forEach(function (dropdown) {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (!toggle || toggle._dropdownUnifiedBound) return;
        toggle._dropdownUnifiedBound = true;

        // Click en toggle: alternar estado abierto para fijarlo
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const wasOpen = dropdown.classList.contains('is-open');

            // Cerrar otros dropdowns abiertos
            dropdowns.forEach(function (d) {
                if (d !== dropdown) d.classList.remove('is-open');
            });

            if (!wasOpen) {
                dropdown.classList.add('is-open');
            } else {
                dropdown.classList.remove('is-open');
            }
        });

        // Hover en Desktop: añade clase para persistencia visual
        dropdown.addEventListener('mouseenter', function () {
            dropdown.classList.add('is-hovered');
        });

        dropdown.addEventListener('mouseleave', function () {
            dropdown.classList.remove('is-hovered');
        });
    });

    // Un solo menú abierto a la vez: al pasar a otra sección, o al hacer clic
    // en una opción sin menú (INICIO, DGCFT, NOTICIAS), se cierran los demás.
    if (!navMain._navUnifiedBound) {
        navMain._navUnifiedBound = true;
        var cerrarOtros = function (conservar) {
            navMain.querySelectorAll('.dropdown').forEach(function (d) {
                if (d !== conservar) {
                    d.classList.remove('is-open');
                    d.classList.remove('is-hovered');
                }
            });
        };
        navMain.addEventListener('click', function (e) {
            var dd = e.target.closest('.dropdown');
            if (!dd) cerrarOtros(null);
        });
        // Solo con mouse real: en pantallas táctiles el "mouseover" es simulado
        // (también al desplazar la página) y cerraría el menú recién abierto.
        if (window.matchMedia && window.matchMedia('(hover: hover)').matches) {
            navMain.addEventListener('mouseover', function (e) {
                cerrarOtros(e.target.closest('.dropdown'));
            });
            navMain.addEventListener('mouseleave', function () { cerrarOtros(null); });
        }
    }

    // Cerrar menú al hacer clic en cualquiera de sus enlaces
    navMain.querySelectorAll('.dropdown-menu a').forEach(function (link) {
        if (link._dropdownLinkUnifiedBound) return;
        link._dropdownLinkUnifiedBound = true;

        link.addEventListener('click', function () {
            const dd = link.closest('.dropdown');
            if (dd) {
                dd.classList.remove('is-open');
                dd.classList.remove('is-hovered');
            }
        });
    });

    // Cerrar al hacer clic fuera del menú
    if (!document._dropdownGlobalClickBound) {
        document._dropdownGlobalClickBound = true;
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.nav-main .dropdown')) {
                document.querySelectorAll('.nav-main .dropdown.is-open').forEach(function (d) {
                    d.classList.remove('is-open');
                });
            }
        });
    }

    // Cerrar con tecla Escape (se registra una sola vez)
    if (!document._dropdownEscBound) {
        document._dropdownEscBound = true;
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.nav-main .dropdown.is-open').forEach(function (d) {
                    d.classList.remove('is-open');
                });
            }
        });
    }
}

// ------------------------------------------------------------
// Barra de Fecha Dinámica (Sin empalme con Gob.mx)
// ------------------------------------------------------------
function actualizarFechaActual() {
    const elemento = document.getElementById('fecha-texto-dinamica');
    if (!elemento) return;

    try {
        const hoy = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let texto = hoy.toLocaleDateString('es-MX', opciones);
        // Capitalizar primera letra (ej. "Jueves, 15 de octubre de 2026")
        texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        elemento.textContent = texto;
    } catch (err) {
        elemento.textContent = 'Veracruz, México';
    }
}

// ------------------------------------------------------------
function verificarGobmxBarra() {
    // La barra propia (#gobmx-header-fallback) es SIEMPRE la visible.
    // Si algún script externo inyecta otra barra, se oculta para evitar
    // textos perdidos y espacios en blanco.
    function ajustar() {
        document.querySelectorAll('.navbar-fixed-top, nav.gobmx-navbar, body > header:not(#gobmx-header-fallback)').forEach(function (el) {
            el.style.setProperty('display', 'none', 'important');
        });
        document.body.style.setProperty('padding-top', '0', 'important');
        document.body.style.setProperty('margin-top', '0', 'important');
    }
    ajustar();
    setTimeout(ajustar, 500);
    setTimeout(ajustar, 1500);
}


// ------------------------------------------------------------
// Menú móvil: píldora activa, posición de los desplegables y
// desplazamiento automático hasta la sección actual
// ------------------------------------------------------------
function actualizarNavMovil() {
    var nav = document.querySelector('.nav-main');
    if (!nav) return;
    var r = nav.getBoundingClientRect();
    document.documentElement.style.setProperty('--nav-bottom', Math.max(0, Math.round(r.bottom)) + 'px');
}

function marcarSeccionActiva() {
    var nav = document.querySelector('.nav-main');
    if (!nav) return;
    var archivo = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var destino = (archivo === 'boletines.html' || archivo === 'historico.html') ? 'boletines.html' : 'index.html';
    var activa = null;
    nav.querySelectorAll(':scope > ul > li > a[href]').forEach(function (a) {
        a.classList.remove('nav-activa');
        if ((a.getAttribute('href') || '').toLowerCase() === destino) { a.classList.add('nav-activa'); activa = a; }
    });
    // Centrar/mostrar la píldora activa dentro de la barra deslizable
    var ul = nav.querySelector(':scope > ul');
    if (activa && ul && ul.scrollWidth > ul.clientWidth) {
        ul.scrollLeft = Math.max(0, activa.parentElement.offsetLeft - 14);
    }
}

function setupNavMovil() {
    marcarSeccionActiva();
    actualizarNavMovil();
    var nav = document.querySelector('.nav-main');
    if (!nav || nav._navMovilBound) return;
    nav._navMovilBound = true;
    var pendiente = false;
    function programar() {
        if (pendiente) return;
        pendiente = true;
        requestAnimationFrame(function () { pendiente = false; actualizarNavMovil(); });
    }
    window.addEventListener('scroll', programar, { passive: true });
    window.addEventListener('resize', programar);
    nav.addEventListener('click', function () { setTimeout(actualizarNavMovil, 0); });
    nav.addEventListener('focusin', programar);
    nav.addEventListener('input', programar);
}

// ------------------------------------------------------------
// Inicialización General
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    actualizarFechaActual();
    sincronizarMenusCompartidos();
    setupDropdownsPersistentes();
    verificarGobmxBarra();
    setupNavMovil();

    // Re-ejecutar al cambiar tamaño de pantalla
    window.addEventListener('resize', function () {
        setupDropdownsPersistentes();
    });
});
