// ============================================================
//  portal.js  -  Lógica interactiva de Planteles, Especialidades,
//  Búsqueda y Navegación del Portal SCEO
// ============================================================

(function () {
    'use strict';

    console.log('portal.js cargado');

    // ------------------------------------------------------------
    // Control de Vistas Principales (index.html)
    // ------------------------------------------------------------
    // ------------------------------------------------------------
    // Control Centralizado de Vistas (Garantía de Respuesta Inmediata)
    // ------------------------------------------------------------
    function activarVista(nombre) {
        console.log('activarVista:', nombre);
        const vistas = {
            'inicio': ['contenido-principal', 'seccion-accesos-rapidos', 'banner-marquesina'],
            'especialidades': ['especialidades-contenido'],
            'requisitos': ['requisitos-inscripcion'],
            'plantel': ['plantel-info'],
            'especialidad': ['especialidad-info'],
            'noticia': ['noticia-detalle']
        };

        const todasLasSecciones = [
            'contenido-principal',
            'seccion-accesos-rapidos',
            'banner-marquesina',
            'especialidades-contenido',
            'requisitos-inscripcion',
            'plantel-info',
            'especialidad-info',
            'noticia-detalle'
        ];

        const aMostrar = vistas[nombre] || [];

        todasLasSecciones.forEach(function (id) {
            const el = document.getElementById(id);
            if (!el) return;
            if (aMostrar.indexOf(id) !== -1) {
                el.classList.remove('seccion-oculta');
                el.classList.add('seccion-visible');
                el.style.display = 'block';
                el.style.visibility = 'visible';
                el.style.opacity = '1';
            } else {
                el.classList.remove('seccion-visible');
                el.classList.add('seccion-oculta');
                el.style.display = 'none';
            }
        });

        // Limpiar tarjeta o detalle de especialidad previa si regresamos a inicio
        if (nombre === 'inicio') {
            const espDetalle = document.getElementById('especialidad-detalle');
            if (espDetalle) espDetalle.innerHTML = '';
            document.querySelectorAll('.especialidad-item.activa').forEach(function (item) {
                item.classList.remove('activa');
            });
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.activarVista = activarVista;

    function mostrarInicio() {
        console.log('mostrarInicio llamada');
        const esIndex = !!document.getElementById('contenido-principal');
        if (!esIndex) {
            localStorage.removeItem('mostrarNoticia');
            window.location.href = 'index.html';
            return;
        }

        activarVista('inicio');

        // Limpiar hash sin recargar
        if (window.location.hash) {
            history.pushState(null, document.title, window.location.pathname + window.location.search);
        }
    }

    window.mostrarInicio = mostrarInicio;

    function mostrarRequisitos() {
        console.log('mostrarRequisitos llamada');
        const esIndex = !!document.getElementById('contenido-principal');
        if (!esIndex) {
            sessionStorage.setItem('mostrarSeccion', 'requisitos');
            window.location.href = 'index.html';
            return;
        }

        activarVista('requisitos');
        window.location.hash = 'requisitos';
    }

    window.mostrarRequisitos = mostrarRequisitos;

    function mostrarEspecialidades() {
        console.log('mostrarEspecialidades llamada');
        const esIndex = !!document.getElementById('contenido-principal');
        if (!esIndex) {
            sessionStorage.setItem('mostrarSeccion', 'especialidades');
            window.location.href = 'index.html';
            return;
        }

        activarVista('especialidades');
        window.location.hash = 'especialidades';
    }

    window.mostrarEspecialidades = mostrarEspecialidades;

    function _cerrarListasPlanteles() {
        document.querySelectorAll('.planteles-list').forEach(function (pl) {
            pl.style.display = 'none';
            pl.classList.add('planteles-oculto');
            pl.classList.remove('planteles-visible');
        });
        document.querySelectorAll('.especialidad-header').forEach(function (h) {
            h.classList.remove('active');
        });
    }

    function _abrirListaPlanteles(planteles) {
        // La clase .planteles-oculto usa !important: hay que quitarla,
        // no basta con poner style.display = 'block'.
        planteles.classList.remove('planteles-oculto');
        planteles.classList.add('planteles-visible');
        planteles.style.display = 'block';
        const header = planteles.previousElementSibling;
        if (header) header.classList.add('active');
    }

    function togglePlanteles(plantelesId) {
        const planteles = document.getElementById(plantelesId);
        if (!planteles) return;

        const estabaAbierta = planteles.classList.contains('planteles-visible');
        _cerrarListasPlanteles();

        if (!estabaAbierta) {
            _abrirListaPlanteles(planteles);
            const item = planteles.parentElement;
            setTimeout(function () {
                if (item) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    }

    // Exponer togglePlanteles globalmente para uso desde HTML
    window.togglePlanteles = togglePlanteles;
    console.log('togglePlanteles expuesta globalmente');

    // ------------------------------------------------------------
    // Vista de Planteles
    // ------------------------------------------------------------
    function mostrarInfoPlantel(plantelNombre) {
        const esIndex = !!document.getElementById('contenido-principal');
        if (!esIndex) {
            sessionStorage.setItem('mostrarPlantel', plantelNombre);
            window.location.href = 'index.html';
            return;
        }

        const plantel = (typeof window.obtenerInfoPlantel === 'function')
            ? window.obtenerInfoPlantel(plantelNombre)
            : (window.infoPlanteles ? window.infoPlanteles[plantelNombre] : null);

        if (!plantel) {
            console.warn('Plantel no encontrado:', plantelNombre);
            return;
        }

        const plantelDetalle = document.getElementById('plantel-detalle');
        const plantelContainer = document.getElementById('plantel-info');
        if (!plantelDetalle || !plantelContainer) return;

        const imgMap = window.imagenesPlanteles || {};
        const imagenPlantel = imgMap[plantelNombre] || 'cecatin.png';
        const iconoPlantel = 'cecatin.png';

        let html = `
            <div class="plantel-hero-card">
                <div class="plantel-hero-img-wrap">
                    <img loading="lazy" src="imagenes/${imagenPlantel}" alt="${plantelNombre}" class="plantel-hero-img" onerror="this.onerror=null; this.src='imagenes/cecatin.png';">
                </div>
                <div class="plantel-hero-title">
                    <img loading="lazy" src="imagenes/${iconoPlantel}" alt="Logo CECATI" class="plantel-badge-logo">
                    <h1>${plantelNombre}</h1>
                </div>
                <div class="divisor-dorado-3d"></div>
            </div>

            <div class="plantel-bloque-info">
                <h2>📍 Datos de Ubicación y Contacto</h2>
                <div class="plantel-info-grid">
                    <div>
                        <p><strong>Plantel:</strong> ${plantelNombre}</p>
                        <p><strong>CCT:</strong> ${plantel.cct || 'N/A'}</p>
                        <p><strong>Calle:</strong> ${plantel.direccion || 'N/A'}</p>
                        <p><strong>Colonia:</strong> ${plantel.colonia || 'N/A'}</p>
                    </div>
                    <div>
                        <p><strong>C.P.:</strong> ${plantel.cp || 'N/A'}</p>
                        <p><strong>Municipio:</strong> ${plantel.municipio || 'N/A'}</p>
                        <p><strong>Región:</strong> ${plantel.region || 'N/A'}</p>
                        <p><strong>Teléfono:</strong> <a href="tel:${plantel.telefono}" class="enlace-telefono">${plantel.telefono || 'N/A'}</a></p>
                    </div>
                </div>
            </div>

            <div class="plantel-bloque-info">
                <h2>👥 Directorio del Plantel</h2>
                <div class="plantel-directorio-grid">
                    ${plantel.directorio && plantel.directorio.Subdireccion ? `
                    <div class="directorio-card-3d">
                        <h3>🏢 Subdirección</h3>
                        <p><strong>Titular:</strong> ${plantel.directorio.Subdireccion.titular}</p>
                        <p><strong>Correo:</strong> <a href="mailto:${plantel.directorio.Subdireccion.email}">${plantel.directorio.Subdireccion.email}</a></p>
                    </div>` : ''}

                    ${plantel.directorio && plantel.directorio.TécnicoAcadémico ? `
                    <div class="directorio-card-3d">
                        <h3>🎓 Técnico Académico</h3>
                        <p><strong>Titular:</strong> ${plantel.directorio.TécnicoAcadémico.titular}</p>
                        <p><strong>Correo:</strong> <a href="mailto:${plantel.directorio.TécnicoAcadémico.email}">${plantel.directorio.TécnicoAcadémico.email}</a></p>
                    </div>` : ''}

                    ${plantel.directorio && plantel.directorio.PlaneaciónyEvaluación ? `
                    <div class="directorio-card-3d">
                        <h3>📊 Planeación y Evaluación</h3>
                        <p><strong>Titular:</strong> ${plantel.directorio.PlaneaciónyEvaluación.titular}</p>
                        <p><strong>Correo:</strong> <a href="mailto:${plantel.directorio.PlaneaciónyEvaluación.email}">${plantel.directorio.PlaneaciónyEvaluación.email}</a></p>
                    </div>` : ''}

                    ${plantel.directorio && plantel.directorio.direccion ? `
                    <div class="directorio-card-3d">
                        <h3>🏢 Dirección</h3>
                        <p><strong>Titular:</strong> ${plantel.directorio.direccion.titular}</p>
                        <p><strong>Correo:</strong> <a href="mailto:${plantel.directorio.direccion.email}">${plantel.directorio.direccion.email}</a></p>
                    </div>` : ''}

                    ${plantel.directorio && plantel.directorio.capacitacion ? `
                    <div class="directorio-card-3d">
                        <h3>💼 Jefatura de Capacitación</h3>
                        <p><strong>Titular:</strong> ${plantel.directorio.capacitacion.titular}</p>
                        <p><strong>Correo:</strong> <a href="mailto:${plantel.directorio.capacitacion.email}">${plantel.directorio.capacitacion.email}</a></p>
                    </div>` : ''}

                    ${plantel.directorio && plantel.directorio.vinculacion ? `
                    <div class="directorio-card-3d">
                        <h3>🤝 Jefatura de Vinculación</h3>
                        <p><strong>Titular:</strong> ${plantel.directorio.vinculacion.titular}</p>
                        <p><strong>Correo:</strong> <a href="mailto:${plantel.directorio.vinculacion.email}">${plantel.directorio.vinculacion.email}</a></p>
                    </div>` : ''}

                    ${plantel.directorio && plantel.directorio.administrativo ? `
                    <div class="directorio-card-3d">
                        <h3>📋 Servicios Administrativos</h3>
                        <p><strong>Titular:</strong> ${plantel.directorio.administrativo.titular}</p>
                        <p><strong>Correo:</strong> <a href="mailto:${plantel.directorio.administrativo.email}">${plantel.directorio.administrativo.email}</a></p>
                    </div>` : ''}
                </div>
            </div>

            ${plantelNombre !== 'SCEO Veracruz' && plantel.especialidades && plantel.especialidades.length > 0 ? `
            <div class="plantel-bloque-info">
                <h2>📚 Especialidades que se Imparten en este Plantel</h2>
                <div class="plantel-especialidades-grid">
                    ${plantel.especialidades.map(function (esp) {
                        return `<button type="button" onclick="window.mostrarDetalleEspecialidad('${esp}', '${plantelNombre}')" class="plantel-especialidad-btn">
                            <span>${esp}</span>
                            <span class="btn-arrow">→</span>
                        </button>`;
                    }).join('')}
                </div>
            </div>` : ''}

        `;

        plantelDetalle.innerHTML = html;
        activarVista('plantel');
    }

    window.mostrarInfoPlantel = mostrarInfoPlantel;

    function ocultarPlantelInfo() {
        activarVista('inicio');
    }

    window.ocultarPlantelInfo = ocultarPlantelInfo;

    // ------------------------------------------------------------
    // Vista de Detalle de Especialidad
    // ------------------------------------------------------------
    function mostrarDetalleEspecialidad(nombreEspecialidad, nombrePlantel) {
        const esIndex = !!document.getElementById('contenido-principal');
        if (!esIndex) {
            sessionStorage.setItem('mostrarEspecialidadDetalle', nombreEspecialidad);
            window.location.href = 'index.html';
            return;
        }

        const especialidadDetalle = document.getElementById('especialidad-detalle');
        const espContainer = document.getElementById('especialidad-info');
        if (!especialidadDetalle || !espContainer) return;

        const info = (typeof window.obtenerInfoEspecialidad === 'function')
            ? window.obtenerInfoEspecialidad(nombreEspecialidad)
            : {};

        const imgMap = window.imagenesEspecialidades || {};
        const imagenEspecialidad = imgMap[nombreEspecialidad] || 'cecatin.png';

        const origenRegreso = nombrePlantel ? `window.mostrarInfoPlantel('${nombrePlantel}')` : `window.mostrarEspecialidades()`;
        const textoRegreso = nombrePlantel ? `← Regresar a ${nombrePlantel}` : `← Regresar al Catálogo de Especialidades`;

        let html = `
            <div class="vista-plantel-header">
                <button type="button" class="btn-regresar-3d" onclick="${origenRegreso}">
                    ${textoRegreso}
                </button>
            </div>

            <div class="especialidad-hero-card">
                <div class="especialidad-hero-header">
                    <img loading="lazy" src="imagenes/${imagenEspecialidad}" alt="${nombreEspecialidad}" class="especialidad-badge-icon" onerror="this.onerror=null; this.src='imagenes/cecatin.png';">
                    <h1>${nombreEspecialidad}</h1>
                </div>
                <div class="divisor-dorado-3d"></div>
            </div>

            <div class="especialidad-seccion-card">
                <h2>🎯 Objetivo de la Especialidad</h2>
                <p>${info.objetivo || 'Desarrollar competencias técnicas y laborales requeridas en el sector productivo.'}</p>
            </div>

            <div class="especialidad-seccion-card">
                <h2>📚 Enfoque Educativo</h2>
                <p>${info.enfoque || 'Modelo educativo basado en competencias integrales.'}</p>
            </div>

            <div class="especialidad-seccion-card">
                <h2>📋 Especificación de Cursos</h2>
                <p>${info.cursos || 'Cursos regulares, paquetes modulares y formación continua.'}</p>
            </div>

            <div class="especialidad-seccion-card">
                <h2>🎓 Certificación Académica</h2>
                <p>${info.certificacionAcademica || 'Diploma con validez oficial avalado por la Secretaría de Educación Pública (SEP).'}</p>
            </div>

            <div class="especialidad-seccion-card">
                <h2>🏆 Certificación Laboral</h2>
                <p>${info.certificacionLaboral || 'Certificación ante el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).'}</p>
            </div>

            <div class="especialidad-seccion-card">
                <h2>🏢 Sitios de Inserción y Campo Laboral</h2>
                <p>${info.sitiosInsercion || 'Industria, talleres especializados, comercios o autoempleo productivo.'}</p>
            </div>

            <div style="text-align: center; margin: 35px 0;">
                <button type="button" class="btn-regresar-3d" onclick="${origenRegreso}">
                    ${textoRegreso}
                </button>
            </div>
        `;

        especialidadDetalle.innerHTML = html;
        activarVista('especialidad');
    }

    window.mostrarDetalleEspecialidad = mostrarDetalleEspecialidad;

    function ocultarEspecialidadInfo() {
        const espContainer = document.getElementById('especialidad-info');
        if (espContainer) espContainer.style.display = 'none';

        const plantelInfo = document.getElementById('plantel-info');
        if (plantelInfo && plantelInfo.innerHTML.trim() !== '') {
            plantelInfo.style.display = 'block';
        } else {
            mostrarEspecialidades();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ------------------------------------------------------------
    // Búsqueda de Especialidades (compartida)
    // ------------------------------------------------------------
    let searchTimeout = null;

    function buscarEspecialidades(query) {
        const searchResults = document.getElementById('search-results');
        if (!searchResults) return;

        const lista = window.ESPECIALIDADES_LISTA || window.especialidades || [];
        if (!query || query.trim().length < 2) {
            searchResults.style.display = 'none';
            searchResults.innerHTML = '';
            return;
        }

        const queryLower = query.trim().toLowerCase();
        const resultados = lista.filter(function (esp) {
            return esp.nombre && esp.nombre.toLowerCase().includes(queryLower);
        });

        if (resultados.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">No se encontraron especialidades</div>';
            searchResults.style.display = 'block';
            return;
        }

        let html = '';
        resultados.forEach(function (esp) {
            const regex = new RegExp('(' + query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
            const resaltado = esp.nombre.replace(regex, '<strong>$1</strong>');
            html += `<div class="search-result-item" onclick="window.irAEspecialidad('${esp.id}', '${esp.nombre.replace(/'/g, "\\'")}')">${resaltado}</div>`;
        });

        searchResults.innerHTML = html;
        searchResults.style.display = 'block';
    }

    function irAEspecialidad(especialidadId, especialidadNombre) {
        const searchResults = document.getElementById('search-results');
        const searchInput = document.getElementById('busqueda-especialidad');
        if (searchResults) searchResults.style.display = 'none';
        if (searchInput) searchInput.value = especialidadNombre;

        const esIndex = !!document.getElementById('contenido-principal');
        if (!esIndex) {
            sessionStorage.setItem('irAEspecialidadId', especialidadId);
            sessionStorage.setItem('irAEspecialidadNombre', especialidadNombre);
            window.location.href = 'index.html';
            return;
        }

        mostrarEspecialidades();

        setTimeout(function () {
            _cerrarListasPlanteles();

            const planteles = document.getElementById(especialidadId);
            if (planteles) {
                const especialidadItem = planteles.parentElement;
                _abrirListaPlanteles(planteles);

                if (especialidadItem) {
                    especialidadItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    especialidadItem.classList.add('activa');
                    especialidadItem.style.transition = 'all 0.4s ease';
                    especialidadItem.style.transform = 'scale(1.02)';
                    especialidadItem.style.boxShadow = '0 12px 30px rgba(105, 28, 50, 0.35)';

                    setTimeout(function () {
                        especialidadItem.style.transform = '';
                        especialidadItem.style.boxShadow = '';
                    }, 1200);
                }
            }
        }, 150);
    }

    function setupSearchEvents() {
        const searchInput = document.getElementById('busqueda-especialidad');
        const searchResults = document.getElementById('search-results');
        const searchBtn = document.getElementById('search-btn');

        if (!searchInput) return;

        searchInput.addEventListener('input', function (e) {
            clearTimeout(searchTimeout);
            const val = e.target.value;
            searchTimeout = setTimeout(function () {
                buscarEspecialidades(val);
            }, 250);
        });

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                buscarEspecialidades(searchInput.value);
            }
        });

        if (searchBtn) {
            searchBtn.addEventListener('click', function (e) {
                e.preventDefault();
                buscarEspecialidades(searchInput.value);
            });
        }

        document.addEventListener('click', function (e) {
            if (!e.target.closest('.search-container') && searchResults) {
                searchResults.style.display = 'none';
            }
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && searchResults) {
                searchResults.style.display = 'none';
                searchInput.blur();
            }
        });
    }

    // ------------------------------------------------------------
    // Enlazar Eventos de Clic en Planteles del Menú
    // ------------------------------------------------------------
    function setupPlantelEvents() {
        document.querySelectorAll('.plantel-item, .nav-main .dropdown-menu a').forEach(function (el) {
            const text = el.textContent.trim();
            if (text.includes('CECATI') || text.includes('SCEO')) {
                let plantelName;
                if (text.includes('CECATI')) {
                    const match = text.match(/CECATI\s+\d+/i);
                    plantelName = match ? match[0].toUpperCase() : text;
                } else if (text.includes('SCEO')) {
                    plantelName = 'SCEO Veracruz';
                }

                if (!plantelName || el._plantelBound) return;
                el._plantelBound = true;
                el.style.cursor = 'pointer';

                el.addEventListener('click', function (e) {
                    if (el.tagName.toLowerCase() === 'a' && el.getAttribute('href') !== '#' && !el.getAttribute('href').startsWith('javascript')) {
                        // Si ya tiene un href válido a otra cosa, respetarlo
                    }
                    e.preventDefault();
                    mostrarInfoPlantel(plantelName);
                });
            }
        });
    }

    // ------------------------------------------------------------
    // Inicialización y Chequeo de Sesión / Hash
    // ------------------------------------------------------------
    function initPortal() {
        setupSearchEvents();
        setupPlantelEvents();

        // Checar si hay redirección pendiente desde otra página
        const seccionPendiente = sessionStorage.getItem('mostrarSeccion');
        const plantelPendiente = sessionStorage.getItem('mostrarPlantel');
        const espDetallePendiente = sessionStorage.getItem('mostrarEspecialidadDetalle');
        const espIdPendiente = sessionStorage.getItem('irAEspecialidadId');
        const espNomPendiente = sessionStorage.getItem('irAEspecialidadNombre');

        if (plantelPendiente) {
            sessionStorage.removeItem('mostrarPlantel');
            setTimeout(function () {
                mostrarInfoPlantel(plantelPendiente);
            }, 100);
        } else if (espDetallePendiente) {
            sessionStorage.removeItem('mostrarEspecialidadDetalle');
            setTimeout(function () {
                mostrarDetalleEspecialidad(espDetallePendiente);
            }, 100);
        } else if (espIdPendiente) {
            sessionStorage.removeItem('irAEspecialidadId');
            sessionStorage.removeItem('irAEspecialidadNombre');
            setTimeout(function () {
                irAEspecialidad(espIdPendiente, espNomPendiente || '');
            }, 100);
        } else if (seccionPendiente) {
            sessionStorage.removeItem('mostrarSeccion');
            setTimeout(function () {
                if (seccionPendiente === 'requisitos') mostrarRequisitos();
                else if (seccionPendiente === 'especialidades') mostrarEspecialidades();
            }, 100);
        } else {
            enrutarHash();
        }
        setupTilt3D();
    }

    // Enrutado por hash: #especialidades, #requisitos, #plantel-<nombre>
    function enrutarHash() {
        if (!document.getElementById('contenido-principal')) return;
        const hash = decodeURIComponent(window.location.hash || '');
        if (hash === '#requisitos') {
            activarVista('requisitos');
        } else if (hash === '#especialidades') {
            activarVista('especialidades');
        } else if (hash.indexOf('#plantel-') === 0) {
            mostrarInfoPlantel(hash.substring(9));
        }
    }
    window.addEventListener('hashchange', enrutarHash);

    // Inclinación 3D suave en tarjetas (solo con mouse y sin "reducir movimiento")
    function setupTilt3D() {
        if (window.matchMedia && (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover)').matches)) return;
        const sel = '.tarjeta-acceso, .tarjeta-noticia-home, .tarjeta-boletin-item';
        document.addEventListener('mousemove', function (e) {
            const card = e.target.closest && e.target.closest(sel);
            if (!card) return;
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = 'perspective(900px) rotateX(' + (-y * 5).toFixed(2) + 'deg) rotateY(' + (x * 6).toFixed(2) + 'deg)';
        });
        document.addEventListener('mouseout', function (e) {
            const card = e.target.closest && e.target.closest(sel);
            if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
        });
    }

    // Exponer funciones globales
    window.mostrarInicio = mostrarInicio;
    window.mostrarRequisitos = mostrarRequisitos;
    window.mostrarEspecialidades = mostrarEspecialidades;
    window.togglePlanteles = togglePlanteles;
    window.mostrarInfoPlantel = mostrarInfoPlantel;
    window.ocultarPlantelInfo = ocultarPlantelInfo;
    window.mostrarDetalleEspecialidad = mostrarDetalleEspecialidad;
    window.ocultarEspecialidadInfo = ocultarEspecialidadInfo;
    window.buscarEspecialidades = buscarEspecialidades;
    window.irAEspecialidad = irAEspecialidad;
    window.setupPlantelEvents = setupPlantelEvents;

    console.log('Funciones globales expuestas en portal.js');
    console.log('togglePlanteles disponible:', typeof window.togglePlanteles);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPortal);
    } else {
        initPortal();
    }
})();
