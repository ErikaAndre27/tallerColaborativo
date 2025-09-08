// Información detallada del proceso de matrícula SENA por tramos
const procesoMatricula = {
    tramos: {
        'tramo-a': {
            nombre: 'TRAMO A — Acceso y requisitos',
            descripcion: 'Proceso inicial de acceso a la plataforma SOFIA Plus y verificación de requisitos del programa',
            pasos: [
                'Verificar si ya tienes usuario en SOFIA Plus',
                'Registrarse si es necesario (crear cuenta, completar datos, cargar documento de identidad)',
                'Iniciar sesión en la plataforma',
                'Buscar programa en Oferta Educativa usando filtros',
                'Verificar cumplimiento de requisitos del programa seleccionado'
            ]
        },
        'tramo-b': {
            nombre: 'TRAMO B — Inscripción',
            descripcion: 'Proceso de inscripción formal en la convocatoria vigente',
            pasos: [
                'Verificar si cursas actualmente un programa del mismo nivel',
                'Decidir sobre programa actual si aplica',
                'Inscribirse en convocatoria vigente desde la ficha del programa',
                'Confirmar inscripción en plataforma',
                'Corregir errores si es necesario'
            ]
        },
        'tramo-c': {
            nombre: 'TRAMO C — Selección (admisión)',
            descripcion: 'Proceso de selección mediante pruebas y evaluación de candidatos',
            pasos: [
                'Consultar cronograma de pruebas',
                'Presentar Fase I (prueba web) en fecha/hora asignada',
                'Verificar si el programa exige Fase II',
                'Agendar y presentar Fase II si aplica',
                'Consultar publicación de resultados',
                'Gestionar resultado (seleccionado, lista de espera, no seleccionado)'
            ]
        },
        'tramo-d': {
            nombre: 'TRAMO D — Matrícula',
            descripcion: 'Proceso formal de matrícula con entrega de documentos y legalización',
            pasos: [
                'Asistir a cita de matrícula convocada por el Centro',
                'Entregar documentos requeridos según programa',
                'Verificar que documentos estén completos y legibles',
                'Subsanar documentos si es necesario',
                'Realizar firmas y legalización en SOFIA Plus',
                'Obtener confirmación de matrícula'
            ]
        },
        'tramo-e': {
            nombre: 'TRAMO E — Inducción e inicio',
            descripcion: 'Proceso final de inducción e inicio de la etapa lectiva',
            pasos: [
                'Participar en inducción (orientaciones, horarios, plataforma)',
                'Confirmar asistencia a inducción',
                'Reprogramar/justificar si no asiste (riesgo de pérdida de cupo)',
                'Iniciar formación en etapa lectiva',
                'Completar proceso de matrícula'
            ]
        }
    },
    
    nodos: {
        // TRAMO A
        'inicio': {
            titulo: 'Inicio del Proceso',
            descripcion: 'Punto de partida para el proceso de matrícula en SENA',
            tipo: 'inicio',
            tramo: 'A'
        },
        'tiene-usuario-sofia': {
            titulo: '¿Ya tienes usuario en SOFIA Plus?',
            descripcion: 'Verificar si el aspirante ya cuenta con usuario registrado en la plataforma SOFIA Plus',
            tipo: 'decision',
            opciones: ['Sí → Iniciar sesión', 'No → Registrarse'],
            tramo: 'A'
        },
        'registrarse-sofia': {
            titulo: 'Registrarse en SOFIA Plus',
            descripcion: 'Crear cuenta nueva, completar datos personales y cargar documento de identidad vigente',
            tipo: 'entrada-salida',
            documentos: ['Documento de identidad vigente'],
            tramo: 'A'
        },
        'iniciar-sesion': {
            titulo: 'Iniciar sesión en SOFIA Plus',
            descripcion: 'Acceder a la plataforma con credenciales registradas',
            tipo: 'proceso',
            tramo: 'A'
        },
        'buscar-programa-new': {
            titulo: 'Buscar programa en Oferta Educativa',
            descripcion: 'Filtrar programas por nivel formativo, ciudad/centro de formación y jornada',
            tipo: 'proceso',
            filtros: ['Nivel (técnico/tecnólogo/especialización)', 'Ciudad/Centro', 'Jornada'],
            tramo: 'A'
        },
        'cumple-requisitos': {
            titulo: '¿Cumples los requisitos del programa?',
            descripcion: 'Verificar si se cumplen todos los requisitos académicos y documentales especificados en la ficha del programa',
            tipo: 'decision',
            opciones: ['Sí → Continuar', 'No → Explorar otro programa o completar requisitos'],
            tramo: 'A'
        },
        
        // TRAMO B
        'cursa-mismo-nivel': {
            titulo: '¿Cursas actualmente un programa del mismo nivel?',
            descripcion: 'Verificar si está cursando un programa técnico/tecnólogo actualmente (no se puede cursar dos del mismo nivel simultáneamente)',
            tipo: 'decision',
            opciones: ['Sí → Definir terminar/retirarse', 'No → Continuar inscripción'],
            tramo: 'B'
        },
        'inscribirse-convocatoria-new': {
            titulo: 'Inscribirse en convocatoria vigente',
            descripcion: 'Realizar inscripción formal desde la ficha del programa en convocatoria activa',
            tipo: 'proceso',
            tramo: 'B'
        },
        'inscripcion-confirmada': {
            titulo: '¿Inscripción confirmada en plataforma?',
            descripcion: 'Verificar que la inscripción se haya registrado correctamente en el sistema',
            tipo: 'decision',
            opciones: ['Sí → Continuar a selección', 'No → Corregir errores'],
            tramo: 'B'
        },
        
        // TRAMO C
        'presentar-fase1': {
            titulo: 'Presentar Fase I (prueba web)',
            descripcion: 'Realizar prueba de competencias básicas en línea en fecha y hora asignada',
            tipo: 'proceso',
            duracion: 'Según programa (generalmente 1-2 horas)',
            tramo: 'C'
        },
        'exige-fase2': {
            titulo: '¿Programa exige Fase II?',
            descripcion: 'Verificar si el programa requiere entrevista, taller práctico o prueba controlada presencial',
            tipo: 'decision',
            opciones: ['Sí → Agendar Fase II', 'No → Esperar resultados'],
            tramo: 'C'
        },
        'resultado-seleccion': {
            titulo: 'Resultado de Selección',
            descripcion: 'Consultar resultado final del proceso de selección en SOFIA Plus',
            tipo: 'decision',
            opciones: ['Seleccionado(a)', 'Lista de espera', 'No seleccionado(a)'],
            tramo: 'C'
        },
        
        // TRAMO D
        'entregar-documentos': {
            titulo: 'Entregar documentos de matrícula',
            descripcion: 'Presentar documentación requerida según el programa específico',
            tipo: 'documento',
            documentos: {
                'general': ['Documento de identidad al 150%', 'Certificados académicos exigidos'],
                'tecnologo': ['Diploma y acta de bachiller', 'Resultados ICFES', 'Documentos al 150%'],
                'especializacion': ['Documentos al 150%', 'Certificados de experiencia (si aplica)']
            },
            tramo: 'D'
        },
        'documentos-completos': {
            titulo: '¿Documentos completos y legibles?',
            descripcion: 'Verificación de que toda la documentación esté completa, legible y cumpla los requisitos',
            tipo: 'decision',
            opciones: ['Sí → Continuar', 'No → Subsanar dentro del plazo'],
            tramo: 'D'
        },
        
        // TRAMO E
        'induccion': {
            titulo: 'Inducción',
            descripcion: 'Orientaciones generales sobre horarios, plataforma virtual, reglamento estudiantil y metodología',
            tipo: 'proceso',
            contenido: ['Horarios y cronograma', 'Plataforma virtual', 'Reglamento estudiantil', 'Metodología'],
            tramo: 'E'
        },
        'asiste-induccion': {
            titulo: '¿Asiste a inducción?',
            descripcion: 'Confirmar asistencia obligatoria al proceso de inducción',
            tipo: 'decision',
            opciones: ['Sí → Iniciar formación', 'No → Reprogramar/Justificar (riesgo de pérdida de cupo)'],
            tramo: 'E'
        },
        'fin-new': {
            titulo: 'Fin del proceso de matrícula',
            descripcion: 'Proceso de matrícula completado exitosamente. La etapa productiva vendrá después según el programa.',
            tipo: 'fin',
            nota: 'La etapa productiva se realizará cuando el programa lo indique',
            tramo: 'E'
        }
    }
};

// Función para mostrar información del nodo
function mostrarInfoNodo(nodoId) {
    const nodo = procesoMatricula.nodos[nodoId];
    if (!nodo) return;
    
    let info = `<h3>${nodo.titulo}</h3>`;
    info += `<p><strong>Tramo:</strong> ${nodo.tramo}</p>`;
    info += `<p>${nodo.descripcion}</p>`;
    
    if (nodo.opciones) {
        info += '<p><strong>Opciones:</strong></p><ul>';
        nodo.opciones.forEach(opcion => {
            info += `<li>${opcion}</li>`;
        });
        info += '</ul>';
    }
    
    if (nodo.documentos) {
        if (Array.isArray(nodo.documentos)) {
            info += '<p><strong>Documentos requeridos:</strong></p><ul>';
            nodo.documentos.forEach(doc => {
                info += `<li>${doc}</li>`;
            });
            info += '</ul>';
        } else {
            info += '<p><strong>Documentos por programa:</strong></p>';
            Object.keys(nodo.documentos).forEach(tipo => {
                info += `<p><strong>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:</strong></p><ul>`;
                nodo.documentos[tipo].forEach(doc => {
                    info += `<li>${doc}</li>`;
                });
                info += '</ul>';
            });
        }
    }
    
    if (nodo.filtros) {
        info += '<p><strong>Filtros disponibles:</strong></p><ul>';
        nodo.filtros.forEach(filtro => {
            info += `<li>${filtro}</li>`;
        });
        info += '</ul>';
    }
    
    if (nodo.contenido) {
        info += '<p><strong>Contenido de la inducción:</strong></p><ul>';
        nodo.contenido.forEach(item => {
            info += `<li>${item}</li>`;
        });
        info += '</ul>';
    }
    
    if (nodo.duracion) {
        info += `<p><strong>Duración:</strong> ${nodo.duracion}</p>`;
    }
    
    if (nodo.nota) {
        info += `<p><strong>Nota:</strong> ${nodo.nota}</p>`;
    }
    
    return info;
}

// Función para mostrar información del tramo
function mostrarInfoTramo(tramoId) {
    const tramo = procesoMatricula.tramos[tramoId];
    if (!tramo) return;
    
    let info = `<h3>${tramo.nombre}</h3>`;
    info += `<p>${tramo.descripcion}</p>`;
    info += '<p><strong>Pasos principales:</strong></p><ol>';
    tramo.pasos.forEach(paso => {
        info += `<li>${paso}</li>`;
    });
    info += '</ol>';
    
    return info;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Agregar eventos de clic a todos los nodos
    document.querySelectorAll('.node').forEach(nodo => {
        nodo.addEventListener('click', function() {
            const info = mostrarInfoNodo(this.id);
            if (info) {
                mostrarModal('Información del Paso', info);
            }
        });
        
        // Efecto hover
        nodo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '10';
        });
        
        nodo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });
    
    // Agregar eventos a headers de tramo
    document.querySelectorAll('.tramo-header').forEach(header => {
        header.addEventListener('click', function() {
            const info = mostrarInfoTramo(this.id);
            if (info) {
                mostrarModal('Información del Tramo', info);
            }
        });
        
        header.style.cursor = 'pointer';
    });
    
    // Botón de información adicional
    const infoBtn = document.getElementById('info-adicional-btn');
    if (infoBtn) {
        infoBtn.addEventListener('click', function() {
            const infoGeneral = `
                <h3>Proceso Completo de Matrícula SENA</h3>
                <p>Este diagrama representa el proceso completo desde el acceso inicial hasta el inicio de formación, organizado en 5 tramos principales:</p>
                <ul>
                    <li><strong>Tramo A:</strong> Acceso y verificación de requisitos</li>
                    <li><strong>Tramo B:</strong> Inscripción formal en convocatoria</li>
                    <li><strong>Tramo C:</strong> Proceso de selección y admisión</li>
                    <li><strong>Tramo D:</strong> Matrícula y documentación</li>
                    <li><strong>Tramo E:</strong> Inducción e inicio de formación</li>
                </ul>
                <p><strong>Instrucciones:</strong></p>
                <ul>
                    <li>Haz clic en cualquier nodo para ver información detallada</li>
                    <li>Haz clic en los headers de tramo para ver el resumen</li>
                    <li>Los conectores de colores indican diferentes tipos de flujo</li>
                    <li>Los bucles (↻) indican procesos que pueden repetirse</li>
                </ul>
                <p><strong>Leyenda de conectores:</strong></p>
                <ul>
                    <li><span style="color: #27ae60;">Verde:</span> Respuesta "Sí" o flujo positivo</li>
                    <li><span style="color: #e74c3c;">Rojo:</span> Respuesta "No" o flujo alternativo</li>
                    <li><span style="color: #f39c12;">Naranja:</span> Resultados de selección</li>
                    <li><span style="color: #9b59b6;">Morado (↻):</span> Bucles o procesos repetitivos</li>
                </ul>
            `;
            mostrarModal('Información General', infoGeneral);
        });
    }
});

// Función para mostrar modal
function mostrarModal(titulo, contenido) {
    // Crear modal si no existe
    let modal = document.getElementById('info-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'info-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 id="modal-title"></h2>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body" id="modal-body"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Agregar estilos del modal
        const modalStyles = `
            <style>
            #info-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1000;
            }
            .modal-overlay {
                background: rgba(0, 0, 0, 0.7);
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .modal-content {
                background: white;
                border-radius: 15px;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            .modal-header {
                padding: 20px;
                border-bottom: 1px solid #eee;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border-radius: 15px 15px 0 0;
            }
            .modal-header h2 {
                margin: 0;
                font-size: 1.5em;
            }
            .modal-close {
                background: none;
                border: none;
                font-size: 2em;
                color: white;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-close:hover {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
            }
            .modal-body {
                padding: 20px;
                line-height: 1.6;
            }
            .modal-body h3 {
                color: #2c3e50;
                margin-top: 0;
            }
            .modal-body ul, .modal-body ol {
                padding-left: 20px;
            }
            .modal-body li {
                margin-bottom: 5px;
            }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', modalStyles);
        
        // Event listener para cerrar modal
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal-overlay')) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Actualizar contenido y mostrar
    document.getElementById('modal-title').textContent = titulo;
    document.getElementById('modal-body').innerHTML = contenido;
    modal.style.display = 'block';
}

// Función para inicializar conectores (si se necesita en el futuro)
function inicializarConectores() {
    // Esta función puede expandirse para calcular posiciones dinámicas de conectores
    console.log('Conectores inicializados');
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', inicializarConectores);