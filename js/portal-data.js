// ============================================================
//  portal-data.js  -  Base de datos de Especialidades y Planteles SCEO
//  Fuente única compartida para index.html, boletines.html e historico.html
// ============================================================

const especialidades = [
            { nombre: "Administración", id: "planteles-administracion" },
            { nombre: "Alimentos y bebidas", id: "planteles-alimentos" },
            { nombre: "Aplicación de normas y proced.contables y fiscales", id: "planteles-normas" },
            { nombre: "Artes gráficas", id: "planteles-artes-graficas" },
            { nombre: "Artesanías con fibras textiles", id: "planteles-fibras-textiles" },
            { nombre: "Artesanías con pastas, pinturas y acabados", id: "planteles-pastas-pinturas" },
            { nombre: "Artesanías metálicas", id: "planteles-artesanias-metalicas" },
            { nombre: "Asistencia educativa inicial y preescolar", id: "planteles-asistencia-educativa" },
            { nombre: "Asistencia ejecutiva", id: "planteles-asistencia-ejecutiva" },
            { nombre: "Atención integral a personas adultas mayores", id: "planteles-atencion-adultos-mayores" },
            { nombre: "Atención integral a personas con discapacidad", id: "planteles-atencion-discapacidad" },
            { nombre: "Auxiliar de enfermería", id: "planteles-auxiliar-enfermeria" },
            { nombre: "Confección de prendas de vestir", id: "planteles-confeccion-prendas" },
            { nombre: "Cuidados cosmetológicos faciales y corporales", id: "planteles-cuidados-cosmetologicos" },
            { nombre: "Diseño e imagen de la carrocería", id: "planteles-diseno-carroceria" },
            { nombre: "Diseño de moda", id: "planteles-diseno-moda" },
            { nombre: "Diseño y fabricación de muebles de madera", id: "planteles-muebles-madera" },
            { nombre: "Elaboración de dibujos arquitectónico e industrial", id: "planteles-dibujos-arquitectonicos" },
            { nombre: "Elaboración y restauración de artesanías de madera", id: "planteles-artesanias-madera" },
            { nombre: "Estilismo y diseño de imagen", id: "planteles-estilismo-diseno" },
            { nombre: "Expresión gráfica digital", id: "planteles-expresion-digital" },
            { nombre: "Gestión y venta de servicios turísticos", id: "planteles-gestion-turismo" },
            { nombre: "Hotelería", id: "planteles-hoteleria" },
            { nombre: "Informática", id: "planteles-informatica" },
            { nombre: "Inglés", id: "planteles-ingles" },
            { nombre: "Mantenimiento al sistema electrónico automotriz", id: "planteles-mantenimiento-electronico" },
            { nombre: "Mantenimiento electromecánico del automóvil", id: "planteles-mantenimiento-electromecanico" },
            { nombre: "Máquinas-Herramienta", id: "planteles-maquinas-herramienta" },
            { nombre: "Mecánica diésel", id: "planteles-mecanica-diesel" },
            { nombre: "Refrigeración y aire acondicionado", id: "planteles-refrigeracion-aire-acondicionado" },
            { nombre: "Sastrería", id: "planteles-sastreria" },
            { nombre: "Soldadura y pailería", id: "planteles-soldadura-paileria" },
            { nombre: "Soporte a instalac. eléctricas y motores eléctricos", id: "planteles-soporte-electricos" },
            { nombre: "Soporte técnico a equipos y sistemas computacionales", id: "planteles-soporte-computacionales" },
            
        ];

const imagenesPlanteles = {
                'SCEO Veracruz': 'sceo.jpeg',
                'CECATI 31': 'C31.jpeg',
                'CECATI 33': 'C33.jpeg',
                'CECATI 42': 'C42.jpeg',
                'CECATI 49': 'C49.jpeg',
                'CECATI 72': 'C72.jpeg',
                'CECATI 103': 'C103.jpeg',
                'CECATI 151': 'C151.jpeg',
                'CECATI 159': 'C159.jpeg',
                'CECATI 168': 'C168.jpeg',
                'CECATI 170': 'C170.jpeg'
            };

const imagenesEspecialidades = {
                'Administración': 'administracion.png',
                'Alimentos y bebidas': 'alimentos.png',
                'Alimentos y Bebidas': 'alimentos.png',
                'Aplicación de normas y proced.contables y fiscales': 'contabilidad.png',
                'Aplicación de Normas y Procedimientos Contables y Fiscales': 'contabilidad.png',
                'Artes gráficas': 'graficas.png',
                'Artes Gráficas': 'graficas.png',
                'Artesanías con fibras textiles': 'textil.png',
                'Artesanías con Fibras Textiles': 'textil.png',
                'Artesanías con pastas, pinturas y acabados': 'pinturas.png',
                'Artesanías con Pastas, Pinturas y Acabados': 'pinturas.png',
                'Artesanías metálicas': 'metalicas.png',
                'Elaboración y restauración de artesanías de madera': 'artesanias.png',
                'Asistencia educativa inicial y preescolar': 'educativa.png',
                'Asistencia ejecutiva': 'administracion.png',
                'Asistencia Ejecutiva': 'administracion.png',
                'Atención integral a personas adultas mayores': 'adultos.png',
                'Atención integral a personas con discapacidad': 'discapacidad.png',
                'Auxiliar de enfermería': 'enfermeria.png',
                'Confección de prendas de vestir': 'confeccion.png',
                'Confección de Prendas de Vestir': 'confeccion.png',
                'Cuidados cosmetológicos faciales y corporales': 'cosmetologia.png',
                'Cosmetología Integral': 'cosmetologia.png',
                'Diseño e imagen de la carrocería': 'carroceria.png',
                'Diseño de moda': 'moda.png',
                'Diseño de Moda': 'moda.png',
                'Diseño y fabricación de muebles de madera': 'muebles.png',
                'Diseño y Fabricación de Muebles de Madera': 'muebles.png',
                'Elaboración de dibujos arquitectónico e industrial': 'dibujo.png',
                'Elaboración de Dibujos Arquitectónico e Industrial': 'dibujo.png',
                'Elaboración y restauración de artesanías de madera': 'artesanias.png',
                'Estilismo y diseño de imagen': 'estilismo.png',
                'Estilismo y Diseño de Imagen': 'estilismo.png',
                'Expresión gráfica digital': 'expresion.png',
                'Electricidad': 'electrica.png',
                'Electrónica': 'electronica.png',
                'Gestión y venta de servicios turísticos': 'turismo.png',
                'Gestión y Venta de Servicios Turísticos': 'turismo.png',
                'Hotelería': 'hoteleria.png',
                'Informática': 'informatica.png',
                'Inglés': 'ingles.png',
                'Mantenimiento al sistema electrónico automotriz': 'electronico.png',
                'Mantenimiento al Sistema Electrónico Automotriz': 'electronico.png',
                'Mantenimiento al Sistema Eléctrico Automotriz': 'electrica.png',
                'Mantenimiento electromecánico del automóvil': 'electromecanico.png',
                'Mantenimiento Electromecánico del Automóvil': 'electromecanico.png',
                'Máquinas-Herramienta': 'maquinas.png',
                'Mecánica diésel': 'diesel.png',
                'Mecánica Diésel': 'diesel.png',
                'Refrigeración y aire acondicionado': 'refri.png',
                'Refrigeración y Aire Acondicionado': 'refri.png',
                'Sastrería': 'sastre.png',
                'Soldadura y pailería': 'soldadura.png',
                'Soldadura y Pailería': 'soldadura.png',
                'Soporte a instalac. eléctricas y motores eléctricos': 'electrica.png',
                'Soporte técnico a equipos y sistemas computacionales': 'soporte.png',
                'Soporte Técnico a Equipos y Sistemas Computacionales': 'soporte.png'
            };

const infoEspecialidades = {
                'Administración': {
                    objetivo: 'Establecer procesos de administración en micro y pequeña empresa, asesoría sobre mercadotecnia y establecer comunicación con el cliente, conforme a las especificaciones técnicas y procedimientos establecidos para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares, módulos del componente de formación laboral, así como oferta en escuelas particulares',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: empresas que cuentan con el área de administración y servicio al cliente, así como formas de trabajo independiente.'
                },
                'Alimentos y Bebidas': {
                    objetivo: 'Preparar alimentos, postres y bebidas; cumpliendo con los procedimientos del recetario base, así como servirlos con vino en tiempo y forma según preferencias del cliente, de acuerdo a la operación y servicio de calidad total al comensal.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación profesional',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER)',
                    sitiosInsercion: 'Cadenas hoteleras, cadenas restauranteras, bares, cruceros, autoempleo, entre otros'
                },
                'Aplicación de Normas y Procedimientos Contables y Fiscales': {
                    objetivo: 'Realizar el registro mecánico y electrónico de las operaciones financieras de una entidad, conforme a las especificaciones técnicas y procedimientos establecidos, para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: despachos de contadores públicos o privados, empresas pequeñas, medianas o grandes en el área de recursos financieros, almacenes, área de auditoría, en general toda empresa o entidad que este obligada a llevar registros contables, también puede recurrirse al autoempleo ofreciendo sus servicios a pequeños negocios para realizar los trámites necesarios ante la Secretaría de Hacienda y Crédito Público que no requieran de cédula profesional.'
                },
                'Artes Gráficas': {
                    objetivo: 'Aplicar los procesos de Artes Gráficas, con el fin de elevar la calidad de los servicios públicos de educación.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional y modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos y/o subobjetivos que integran los cursos de la especialidad, ya sea por formación presencial o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: empresas que cuentan con el área de artes gráficas, talleres de impresión, editoriales, periódicos, revistas, así como formas de trabajo independiente.'
                },
                'Artesanías con Fibras Textiles': {
                    objetivo: 'Elaborar diferentes objetos a través de técnicas, símbolos y formas, conforme a los procesos de las artes manuales como: bordado en tela, chaquira, macramé y tejido a mano, considerando las prácticas de trabajo seguras.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: tiendas de decoración, comercios artesanales, plazas, tianguis, mercados, ciudadelas, ferias de exposición, museos, escuelas de artesanías, microempresas e instalaciones públicas de fomento a las artesanías y el folklore.'
                },
                'Artesanías con Pastas, Pinturas y Acabados': {
                    objetivo: 'Elaborar diferentes objetos a través de técnicas, símbolos y formas, conforme a los procesos de las artes manuales como: pintura textil, migajón, pintura en cerámica, poliéster, cerámica artificial, trabajos en papel y cartón',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    cursos: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: tiendas de decoración, comercios artesanales, galerías de arte, plazas, tianguis, mercados, ciudadelas, ferias de exposición, museos, escuelas de artesanías, microempresas e instalaciones públicas de fomento a las artesanías y el folklore.'
                },
                'Artesanías de Madera': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de las Artesanías de Madera, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: industrias manufactureras, talleres comunitarios o en grupos familiares, fábricas de materiales trensables, de productos y utensilios para el hogar y de otros productos de madera, locales comerciales, ferias, mercados y exposiciones artesanales, entre otros.'
                },
                'Artesanías Metálicas': {
                    objetivo: 'Utilizar las herramientas y equipo necesario en cada una de las artes manuales que componen las artesanías metálicas como: Repujado en metal, vidrio artístico, esmalte a fuego y herrería artística; así como las técnicas de selección y transformación de materiales con diseño, decorados y ornamentación de buen gusto.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos que integran los cursos de la especialidad ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: comercios artesanales (plazas tianguis, tiendas propias), mercados artesanales (ciudadela, ferias de exposición como World Trade Center México), talleres artesanales, microempresas, museo de artesanías, internet y autoempleo.'
                },
                'Asistencia Educativa Inicial y Preescolar': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Asistencia Educativa Inicial y Preescolar, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: guarderías públicas y privadas, instituciones de educación inicial y preescolar públicas y privadas, centros de atención infantil, estancias infantiles, albergues y establecimientos de asistencia social.'
                },
                'Asistencia Ejecutiva': {
                    objetivo: 'Aplicar la taquigrafía, mecanografía y las relaciones personales, con el fin de establecer comunicación con el cliente, conforme a las especificaciones técnicas y procedimientos establecidos para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional y modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación profesional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos y/o submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: oficinas gubernamentales, despachos de una gran gama de servicios de oficina.'
                },
                'Atención Integral a Personas con Discapacidad': {
                    objetivo: 'Aplicar los procesos de asistencia familiar y de salud, con el fin de atender a personas con discapacidad auditiva, visual, habilitación física funcional y cuidados básicos de la salud para personas con discapacidad.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación profesional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'La demanda y localización de empleo en esta área se encuentra en todo el país, especialmente en instituciones públicas y privadas como: estancias infantiles, asilos, centros de salud y centros de rehabilitación.'
                },
                'Auxiliar de Enfermería': {
                    objetivo: 'Realizar los servicios de cuidado al paciente y dar orientación a la familia en unidades de atención médica, conforme a los procedimientos de seguridad e higiene establecidos, para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Proporcionar servicios de enfermería en centros hospitalarios que cuentan con las instalaciones para la hospitalización de pacientes, como hospitales generales, pediátricos geriátricos, de enfermedades de la mujer. También el autoempleo es muy frecuente en esta área, proporcionando servicios calificados de enfermería en el domicilio del paciente.'
                },
                'Confección de Prendas de Vestir': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Confección de Prendas de Vestir, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de competencias integrales.',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación laboral.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo con los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son en talleres, maquiladoras, empresas de sastrería y confección de ropa, grandes almacenes departamentales de ropa, empresas de vestuario para espectáculos, cine y televisión, también se puede recurrir al autoempleo mediante la apertura de un negocio propio.'
                },
                'Cosmetología Integral': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de Cosmetología Integral, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación laboral.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: salones de belleza, SPA, clínicas de belleza y estéticas, también se puede recurrir al autoempleo mediante la apertura de un negocio propio.'
                },
                'Diseño e Imagen de la Carrocería': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Diseño e Imagen de la Carrocería, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona estudiante en dicho contexto.',
                    enfoque: 'Enfoque de competencias integrales.',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad de los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'Agencia de servicio automotriz, talleres mecánicos de servicio y reparaciones menores, ensambladoras automotrices, empresas que presentan servicios de mecánica de emergencia, empresas que disponen de flotillas de vehículos, boutiques para automóviles, talleres de transmisiones, talleres de suspensiones y talleres electromotrices'
                },
                'Diseño de Moda': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Vestido y Textil, en Diseño de Moda, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER)',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Casa de moda de vestidos de noche y alta costura, talleres de costura dedicados a la creación de diseño y estilos de moda, patronaje, graduación y fabricación de ropa, en general, tiendas departamentales de alto prestigio, para realizar ajustes a la medida, fábricas de confección y maquila de camisas y pantalones y talleres de diseño de moda y confección de ropa deportiva, casual y accesorios'
                },
                'Diseño y Fabricación de Muebles de Madera': {
                    objetivo: 'Realizar los procesos de diseño y fabricación de muebles de madera, conforme a las especificaciones técnicas y procedimientos de seguridad e higiene establecidos, para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las fábricas de muebles en general, fábricas y talleres de puertas, ventanas y armarios, talleres de reparación y mantenimiento de productos de madera, talleres de ebanistería fina, laqueados y barnices, madererías, tiendas de puertas, ventanas y armarios, constructoras en donde se realizan trabajos de carpintería, compañías de mantenimiento, fábricas de construcción e instalación de cocinas integrales, también el autoempleo es muy frecuente en esta área, sobre todo en su forma familiar.'
                },
                'Elaboración de Dibujos Arquitectónico e Industrial': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo en la especialidad de Elaboración de Dibujos Arquitectónico e Industrial, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona estudiante en dicho contexto.',
                    enfoque: 'Enfoque de competencias integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: empresas constructoras y despachos particulares, servicios en examinar y estudiar croquis, bocetos y notas para verificar dimensiones y especificaciones de proyectos, integrar paquetes con planos e informes de la obra, calcular dimensiones y superficies para trazar planos y dibujos industriales y arquitectónicos.'
                },
                'Estilismo y Diseño de Imagen': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Estilismo y Diseño de Imagen, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: salones de belleza, barberías, SPA, clínicas de belleza, peluquerías y estéticas, también se puede recurrir al autoempleo mediante la apertura de un negocio propio.'
                },
                'Expresión Gráfica Digital': {
                    objetivo: 'Aplicar los procesos de presentaciones electrónicas, presentaciones gráficas y presentaciones fotográficas, respetando las normas y procedimientos de seguridad e higiene establecidos a fin de otorgar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional.',
                    cursos: 'Esta especialidad oferta cursos regulares y módulos del componente de formación profesional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos que integran los cursos de la especialidad ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: empresas públicas y privadas relacionadas con medios de comunicación y de publicidad, instituciones bancarias y comerciales, agencia de viajes, hospitales, escuelas, etc., en donde se utilice sistema de cómputo.'
                },
                'Electricidad': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Electricidad, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto',
                    enfoque: 'Enfoque de competencias integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación laboral.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: instalaciones eléctricas en construcción, edificación de viviendas unifamiliares, multifamiliares, naves y plantas industriales; edificación de inmuebles comerciales y de servicios y talleres de reparación de motores eléctricos.'
                },
                'Gestión y Venta de Servicios Turísticos': {
                    objetivo: 'Ofrecer bienes, servicios y productos, a través de las diferentes empresas y/u organizaciones públicas o privadas, de acuerdo a las preferencias del cliente.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Agencias de viaje, Líneas aéreas, Cadenas hoteleras, Cruceros, Dependencias oficiales del sector turístico, Módulos de información turística, Gestoría turística independiente, entre otros.'
                },
                'Hotelería': {
                    objetivo: 'Ofrecer servicios hoteleros antes, durante y al término de la estancia del huésped, de acuerdo a los procedimientos de operación y servicio de calidad total al huésped.',
                    enfoque: 'Modelo educativo basado en criterios de competencias ocupacional y modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional, módulos de componente de formación para el trabajo y formación de aprendices calificados.',
                    certificacionAcademica: 'El diploma o constancia se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Cadenas hoteleras, moteles, cruceros, casa de huéspedes, cabañas, bungalows, residencias, entre otros.'
                },
                'Informática': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Informática, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Instituciones de bienes y servicios públicos y privados y autoempleo.'
                },
                'Inglés': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Inglés, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación o elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación laboral.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo para los egresados de esta especialidad son: áreas turísticas, embajadas, institución o empresas que requiera de esta lengua.'
                },
                'Mantenimiento al Sistema Eléctrico Automotriz': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo de la Mantenimiento al Sistema Eléctrico Automotriz, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello la inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo con los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Agencias de servicio automotriz, talleres mecánicos de servicio y reparaciones menores, ensambladoras automotrices, empresas que presentan servicios de mecánica de emergencia, empresas que disponen de flotillas de vehículos, boutiques para automóviles y talleres electromotrices'
                },
                'Mantenimiento al Sistema Electrónico Automotriz': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Mantenimiento al Sistema Electrónico Automotriz, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo con los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Agencias de servicio automotriz, talleres mecánicos de servicio y reparaciones menores, ensambladoras automotrices, empresas que presentan servicios de mecánica de emergencia, empresas que disponen de flotillas de vehículos, boutiques para automóviles y talleres electromotrices'
                },
                'Mantenimiento Electromecánico del Automóvil': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Mantenimiento Electromecánico del Automóvil, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Empresas dedicadas a la rama automotriz, empresas públicas y privadas dedicadas a la producción y comercialización de bienes o de servicios de reparación automotriz, su propia empresa, concesionarios automotrices, talleres de reparación de vehículos, talleres de mantenimiento a flotas de diversas empresas, estaciones de servicio automotriz, empresas de transporte, concesionarios de marca, talleres de servicio técnico automotriz y plantas de revisión técnica automotriz.'
                },
                'Máquinas-Herramienta': {
                    objetivo: 'Desarrollar las competencias para la fabricación de piezas conforme a las especificaciones de máquinas-herramienta.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'El egresado de esta especialidad podrá desempeñarse en la fabricación, reparación y mantenimiento de maquinaria, en la manufactura de productos metálicos y el corte de metales.'
                },
                'Mecánica Diésel': {
                    objetivo: 'Reparar motores a Diesel con sistema de inyección de rango medio y pesado, de acuerdo a especificaciones técnicas del fabricante y procedimientos del servicio.',
                    enfoque: 'Modelo educativo basado en competencias',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad de los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Talleres mecánicos de servicio y reparaciones de rango medio y pesado; y agencias de servicio con laboratorio diesel de rango medio y pesado.'
                },
                'Refrigeración y Aire Acondicionado': {
                    objetivo: 'Ofertar un trayecto de formación dirigido al desarrollo de competencias en el campo de la Refrigeración y Aire Acondicionado, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación con base en especificaciones técnicas aplicables, la prestación de servicios con amabilidad y honestidad así como el compromiso a la preservación del medio ambiente y la aplicación de las normas de seguridad e higiene con la finalidad de atender con altos niveles de calidad las demandas del sector productivo.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Unidades económicas dedicadas principalmente a la instalación, mantenimiento y reparación de equipos de refrigeración y aire acondicionado de tipo doméstico, comercial, industrial, automotriz y de transporte, así como el autoempleo.'
                },
                'Sastrería': {
                    objetivo: 'Realizar los procesos de Confección de saco, chaleco, falda y pantalón sastre, conforme a las especificaciones técnicas y procedimientos de seguridad e higiene establecidas, para proporcionar un servicio de calidad.',
                    enfoque: 'Modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencia Laboral (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Industrias, talleres de sastrería, fabricación de ropa sastre, tiendas departamentales de ropa sastre y talleres propios de Confección de ropa sastre hechas a la medida del cliente.'
                },
                'Soldadura y Pailería': {
                    objetivo: 'Desarrollar y reconocer los conocimientos, habilidades y destrezas para llevar a cabo diferentes posiciones y procesos de la soldadura.',
                    enfoque: 'Modelo educativo basado en criterios de competencia ocupacional y modelo educativo basado en competencias.',
                    cursos: 'Esta especialidad oferta cursos regulares, paquete polifuncional y módulos del componente de formación profesional.',
                    certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita en su totalidad los subobjetivos y/o submódulos que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Industria dedicada a la fabricación de maquinaria y equipo. Las principales fuentes de empleo son: talleres de herrería, soldadura y mantenimiento, talleres de procesos metálicos especiales y establecimientos de elaboración y reparación de artículos de láminas y hojalatería.'
                },
                'Soporte Técnico a Equipos y Sistemas Computacionales': {
                    objetivo: 'Ofrecer una red amplia y estructurada de servicios de formación para el trabajo en el campo del Soporte Técnico a Equipos y Sistemas Computacionales, para atender flexiblemente los intereses de la persona/estudiante, quien podrá estructurar rutas personales de formación para elegir uno o más trayectos formativos, diseñados con la finalidad de responder a las demandas del contexto económico, productivo, social y educativo, optimizando con ello las posibilidades diferenciales de inserción de la persona/estudiante en dicho contexto.',
                    enfoque: 'Enfoque de Competencias Integrales',
                    cursos: 'Esta especialidad oferta cursos regulares en los niveles básico, medio y avanzado, así como módulos del componente de formación para el trabajo.',
                    certificacionAcademica: 'El diploma se obtiene cuando el estudiante acredita en su totalidad las competencias que integran los cursos de la especialidad, ya sea por formación presencial, en línea o Reconocimiento Oficial de la Competencia Ocupacional (ROCO) y de acuerdo a los lineamientos establecidos en el Manual de Procedimientos de Control Escolar.',
                    certificacionLaboral: 'El certificado de competencia laboral se obtiene cuando el candidato acredita un estándar de competencias, a través de un proceso de evaluación con fines de certificación ante un Organismo Certificador, reconocido por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (CONOCER).',
                    sitiosInsercion: 'Las principales fuentes de empleo son: Instituciones de bienes y/o servicios públicos y privados'
                }
            };

const infoPlanteles = {
            'SCEO Veracruz': {
                cct: '30ACC0001N',
                direccion: 'Av. Veracruz No. 236',
                colonia: 'Infonavit Las Brisas',
                cp: '91809',
                municipio: 'Veracruz',
                region: 'Zona Sur-Sureste',
                telefono: '(229) 790-90-59 ',
                directorio: {
                    Subdireccion: {
                        titular: 'Sergio López Hernández',
                        email: 'ver.sceo@dgcft.sems.gob.mx'
                    },
                    TécnicoAcadémico: {
                        titular: 'Jose Luis Silva Romero',
                        email: 'ver.acade@dgcft.sems.gob.mx'
                    },
                    PlaneaciónyEvaluación: {
                        titular: 'Irene Margarita Vargas Camarillo',
                        email: 'ver.plan@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Esmeralda Zarate Chávez',
                        email: 'ver.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Juan Carlos González Dominguez',
                        email: 'ver.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: []
            },
            'CECATI 31': {
                cct: '30DBT0030X',
                direccion: 'Av. Universidad Km. 8.2',
                colonia: '—',
                cp: '96530',
                municipio: 'Coatzacoalcos',
                region: 'Zona Sur-Sureste',
                telefono: '(921) 218-51-15',
                directorio: {
                    direccion: {
                        titular: 'Lila Inurreta Fernández <br>(Responsable de las Funciones)',
                        email: 'cecati31.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Vacante',
                        email: 'cecati31.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Cenobio Suárez Méndez',
                        email: 'cecati31.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Lila Inurreta Fernández',
                        email: 'cecati31.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Artes Gráficas', 'Asistencia Ejecutiva', 'Elaboración de Dibujos Arquitectónico e Industrial', 'Electricidad', 'Informática', 'Inglés', 'Máquinas-Herramienta', 'Refrigeración y Aire Acondicionado', 'Soldadura y Pailería', 'Soporte Técnico a Equipos y Sistemas Computacionales']
            },

            'CECATI 33': {
                cct: '30DBT0033U',
                direccion: 'Prolongación de Abasolo No. 78',
                colonia: 'Congregación de Tenango',
                cp: '94730',
                municipio: 'Río Blanco',
                region: 'Zona Sur-Sureste',
                telefono: '(272) 727-60-44',
                directorio: {
                    direccion: {
                        titular: 'Rolando Juan García Martínez <br>(Responsable de las Funciones)',
                        email: 'cecati33.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'María Esther Flores Contreras <br>(Responsable de las Funciones)',
                        email: 'cecati33.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Rolando Juan García Martínez',
                        email: 'cecati33.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Catalina Vanessa Carrasco Páez <br>(Responsable de las Funciones)',
                        email: 'cecati33.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Artes Gráficas', 'Cosmetología Integral', 'Elaboración de Dibujos Arquitectónico e Industrial', 'Electricidad', 'Estilismo y Diseño de Imagen', 'Informática', 'Inglés', 'Mantenimiento al Sistema Eléctrico Automotriz', 'Mantenimiento al Sistema Electrónico Automotriz', 'Mantenimiento Electromecánico del Automóvil', 'Máquinas-Herramienta', 'Soporte Técnico a Equipos y Sistemas Computacionales']
            },
            'CECATI 42': {
                cct: '30DBT0042B',
                direccion: 'Av. Veracruz No. 236',
                colonia: 'Infonavit Las Brisas',
                cp: '91809',
                municipio: 'Veracruz',
                region: 'Zona Sur-Sureste',
                telefono: '(229) 924-30-70',
                directorio: {
                    direccion: {
                        titular: 'Ángel Hernández Castillo',
                        email: 'cecati42.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Andrea Esquivel Ramón <br>(Responsable de las Funciones)',
                        email: 'cecati42.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Adrián Hernández Ravelo <br>(Responsable de las Funciones)',
                        email: 'cecati42.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Juan Ignacio Palacios Hernández <br>(Responsable de las Funciones)',
                        email: 'cecati42.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Alimentos y Bebidas', 'Aplicación de Normas y Procedimientos Contables y Fiscales', 'Artes Gráficas', 'Artesanías con Fibras Textiles', 'Artesanías con Pastas, Pinturas y Acabados', 'Asistencia Ejecutiva', 'Atención Integral a Personas con Discapacidad', 'Confección de Prendas de Vestir', 'Cosmetología Integral', 'Cuidados a Personas Adultas Mayores', 'Electricidad', 'Estilismo y Diseño de Imagen', 'Expresión Gráfica Digital', 'Gestión y Venta de Servicios Turísticos', 'Hotelería', 'Informática', 'Inglés', 'Mantenimiento al Sistema Eléctrico Automotriz', 'Mantenimiento al Sistema Electrónico Automotriz', 'Mantenimiento Electromecánico del Automóvil', 'Máquinas-Herramienta', 'Refrigeración y Aire Acondicionado', 'Sastrería', 'Soldadura y Pailería', 'Soporte Técnico a Equipos y Sistemas Computacionales']
            },
            'CECATI 49': {
                cct: '30DBT0049V',
                direccion: 'Prolongación Calle Hidalgo s/n',
                colonia: 'Santa Cruz Buenavista',
                cp: '94690',
                municipio: 'Córdoba',
                region: 'Zona Sur-Sureste',
                telefono: '(271) 714-77-94',
                directorio: {
                    direccion: {
                        titular: 'María Teresa Aguirre Jiménez <br>(Responsable de las Funciones)',
                        email: 'cecati49.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Óscar Pérez López',
                        email: 'cecati49.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'María Teresa Aguirre Jiménez',
                        email: 'cecati49.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Vacante',
                        email: 'cecati49.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Asistencia Ejecutiva', 'Confección de Prendas de Vestir', 'Cosmetología Integral', 'Diseño y Fabricación de Muebles de Madera', 'Electricidad', 'Electrónica', 'Estilismo y Diseño de Imagen', 'Informática', 'Inglés', 'Mantenimiento al Sistema Eléctrico Automotriz', 'Mantenimiento al Sistema Electrónico Automotriz', 'Mantenimiento Electromecánico del Automóvil', 'Máquinas-Herramienta', 'Mecánica Diésel', 'Sastrería']
            },
            'CECATI 72': {
                cct: '30DBT0050K',
                direccion: 'Av. Jesús Reyes Heroles s/n',
                colonia: 'Martín Lancero',
                cp: '96349',
                municipio: 'Cosoleacaque',
                region: 'Zona Sur-Sureste',
                telefono: '(922) 221-03-83',
                directorio: {
                    direccion: {
                        titular: 'Mateo Sinuhe Peña Morales <br>(Responsable de las Funciones)',
                        email: 'cecati72.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Héctor Isaac Zamudio Tenorio <br>(Responsable de las Funciones)',
                        email: 'cecati72.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Mayte Lara Escobar <br>(Responsable de las Funciones)',
                        email: 'cecati72.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Mateo Sinuhe Peña Morales',
                        email: 'cecati72.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Aplicación de Normas y Procedimientos Contables y Fiscales', 'Artes Gráficas', 'Asistencia Ejecutiva', 'Elaboración de Dibujos Arquitectónico e Industrial', 'Electricidad', 'Electrónica', 'Informática', 'Inglés', 'Mantenimiento al Sistema Eléctrico Automotriz', 'Mantenimiento al Sistema Electrónico Automotriz', 'Mantenimiento Electromecánico del Automóvil', 'Refrigeración y Aire Acondicionado']
            },
            'CECATI 103': {
                cct: '30DBT0051J',
                direccion: 'Av. Venustiano Carranza s/n',
                colonia: 'Revolución',
                cp: '93390',
                municipio: 'Poza Rica',
                region: 'Zona Sur-Sureste',
                telefono: '(782) 823-20-48',
                directorio: {
                    direccion: {
                        titular: 'María Silvia Mujica Ramírez',
                        email: 'cecati103.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Roberto Armando Ramírez Trinidad',
                        email: 'cecati103.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Vacante',
                        email: 'cecati103.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Adán Ovando Rodríguez <br>(Responsable de las Funciones)',
                        email: 'cecati103.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Alimentos y Bebidas', 'Aplicación de Normas y Procedimientos Contables y Fiscales', 'Artesanías con Fibras Textiles', 'Artesanías con Pastas, Pinturas y Acabados', 'Asistencia Ejecutiva', 'Confección de Prendas de Vestir', 'Cosmetología Integral', 'Diseño e Imagen de la Carrocería', 'Diseño y Fabricación de Muebles de Madera', 'Elaboración de Dibujos Arquitectónico e Industrial', 'Electricidad', 'Estilismo y Diseño de Imagen', 'Informática', 'Inglés', 'Mantenimiento al Sistema Eléctrico Automotriz', 'Mantenimiento al Sistema Electrónico Automotriz', 'Mantenimiento Electromecánico del Automóvil', 'Máquinas-Herramienta', 'Mecánica Diésel', 'Refrigeración y Aire Acondicionado', 'Soldadura y Pailería', 'Soporte Técnico a Equipos y Sistemas Computacionales']
            },
            'CECATI 151': {
                cct: '30DBT0053H',
                direccion: 'Granada Esq. Av. las Jacarandas s/n',
                colonia: 'Arboledas del Sumidero',
                cp: '91150',
                municipio: 'Xalapa',
                region: 'Zona Sur-Sureste',
                telefono: '(228) 810-65-16',
                directorio: {
                    direccion: {
                        titular: 'Maribel López Hernández <br>(Responsable de las Funciones)',
                        email: 'cecati151.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Maribel López Hernández <br>(Responsable de las Funciones)',
                        email: 'cecati151.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Claudia Patricia Cruz Cruz',
                        email: 'cecati151.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Belén Hernández Martínez',
                        email: 'cecati151.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Alimentos y Bebidas', 'Aplicación de Normas y Procedimientos Contables y Fiscales', 'Artesanías con Pastas, Pinturas y Acabados', 'Artesanías de Madera', 'Artesanías Metálicas', 'Asistencia Educativa Inicial y Preescolar', 'Asistencia Ejecutiva', 'Atención Integral a Personas con Discapacidad', 'Confección de Prendas de Vestir', 'Cuidados a Personas Adultas Mayores', 'Diseño y Fabricación de Muebles de Madera', 'Electricidad', 'Electrónica', 'Informática', 'Inglés', 'Mantenimiento al Sistema Eléctrico Automotriz', 'Mantenimiento al Sistema Electrónico Automotriz', 'Mantenimiento Electromecánico del Automóvil', 'Soporte Técnico a Equipos y Sistemas Computacionales']
            },
            'CECATI 159': {
                cct: '30DBT0159A',
                direccion: 'Av. Miguel Z. Cházaro No. 8',
                colonia: 'Centro',
                cp: '95460',
                municipio: 'Tlacotalpan',
                region: 'Zona Sur-Sureste',
                telefono: '(288) 884-29-29',
                directorio: {
                    direccion: {
                        titular: 'Juan Pablo Ponce Márquez',
                        email: 'cecati159.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Vacante',
                        email: 'cecati159.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Trinidad del Carmen Lara Barcelata',
                        email: 'cecati159.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Vacante',
                        email: 'cecati159.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Alimentos y Bebidas', 'Artes Gráficas', 'Artesanías con Fibras Textiles', 'Artesanías con Pastas, Pinturas y Acabados', 'Asistencia Ejecutiva', 'Confección de Prendas de Vestir', 'Cosmetología Integral', 'Diseño y Fabricación de Muebles de Madera', 'Estilismo y Diseño de Imagen', 'Informática', 'Inglés']
            },
            'CECATI 168': {
                cct: '30DBT0168I',
                direccion: 'Calle Juana de Arco No. 1',
                colonia: 'Unidad Hab. Benito Juárez',
                cp: '94744',
                municipio: 'Cd. Mendoza',
                region: 'Zona Sur-Sureste',
                telefono: '(272) 727-46-44',
                directorio: {
                    direccion: {
                        titular: 'Héctor Juan Hernández (Responsable de las Funciones)',
                        email: 'cecati168.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Salvador López Vargas',
                        email: 'cecati168.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Ma. del Carmen Salas Rodríguez',
                        email: 'cecati168.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Cecilia Martínez Chávez <br>(Responsable de las Funciones)',
                        email: 'cecati168.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Alimentos y Bebidas', 'Aplicación de Normas y Procedimientos Contables y Fiscales', 'Artes Gráficas', 'Asistencia Ejecutiva', 'Auxiliar de Enfermería', 'Confección de Prendas de Vestir', 'Cosmetología Integral', 'Diseño y Fabricación de Muebles de Madera', 'Electrónica', 'Estilismo y Diseño de Imagen', 'Gestión y Venta de Servicios Turísticos', 'Hotelería', 'Informática', 'Inglés', 'Soporte Técnico a Equipos y Sistemas Computacionales']
            },
            'CECATI 170': {
                cct: '30DBT0170X',
                direccion: 'Poniente 14 No. 121',
                colonia: 'Unión Obrera',
                cp: '94350',
                municipio: 'Orizaba',
                region: 'Zona Sur-Sureste',
                telefono: '(272) 725-91-13',
                directorio: {
                    direccion: {
                        titular: 'Jacqueline Jiménez Torres',
                        email: 'cecati170.dir@dgcft.sems.gob.mx'
                    },
                    capacitacion: {
                        titular: 'Vacante',
                        email: 'cecati170.cap@dgcft.sems.gob.mx'
                    },
                    vinculacion: {
                        titular: 'Juan Manuel Solís Carrasco',
                        email: 'cecati170.vinc@dgcft.sems.gob.mx'
                    },
                    administrativo: {
                        titular: 'Julieta Fuentes Luna',
                        email: 'cecati170.admvo@dgcft.sems.gob.mx'
                    }
                },
                especialidades: ['Administración', 'Alimentos y Bebidas', 'Asistencia Ejecutiva', 'Confección de Prendas de Vestir', 'Cosmetología Integral', 'Diseño de Moda', 'Elaboración de Dibujos Arquitectónico e Industrial', 'Estilismo y Diseño de Imagen', 'Gestión y Venta de Servicios Turísticos', 'Hotelería', 'Informática', 'Inglés', 'Soldadura y Pailería', 'Soporte Técnico a Equipos y Sistemas Computacionales']
            }
        };



// Funciones auxiliares para consulta
function obtenerInfoEspecialidad(nombreEspecialidad) {
    if (infoEspecialidades[nombreEspecialidad]) {
        return infoEspecialidades[nombreEspecialidad];
    }
    // Búsqueda insensible a acentos/mayúsculas
    const nombreNorm = nombreEspecialidad.trim().toLowerCase();
    for (const key in infoEspecialidades) {
        if (key.trim().toLowerCase() === nombreNorm) {
            return infoEspecialidades[key];
        }
    }
    // Fallback por defecto si no se encuentra
    return {
        objetivo: 'Formar recursos humanos con competencias laborales certificadas acordes a los requerimientos de los sectores productivos y sociales.',
        enfoque: 'Modelo educativo basado en competencias integrales.',
        cursos: 'Cursos regulares, paquete polifuncional y módulos de capacitación acelerada.',
        certificacionAcademica: 'El diploma se obtiene cuando el alumno acredita las competencias correspondientes conforme a los lineamientos oficiales.',
        certificacionLaboral: 'Certificado de competencia laboral reconocido por el CONOCER.',
        sitiosInsercion: 'Talleres, empresas del ramo correspondiente o desarrollo mediante el autoempleo.'
    };
}

function obtenerInfoPlantel(plantelNombre) {
    if (infoPlanteles[plantelNombre]) {
        return infoPlanteles[plantelNombre];
    }
    const clean = plantelNombre.trim().toUpperCase();
    for (const key in infoPlanteles) {
        if (key.trim().toUpperCase() === clean || clean.includes(key.toUpperCase())) {
            return infoPlanteles[key];
        }
    }
    return null;
}

// Exponer globalmente
window.especialidades = especialidades;
window.ESPECIALIDADES_LISTA = especialidades;
window.imagenesPlanteles = imagenesPlanteles;
window.imagenesEspecialidades = imagenesEspecialidades;
window.infoEspecialidades = infoEspecialidades;
window.infoPlanteles = infoPlanteles;
window.obtenerInfoEspecialidad = obtenerInfoEspecialidad;
window.obtenerInfoPlantel = obtenerInfoPlantel;
