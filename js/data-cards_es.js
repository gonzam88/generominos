/*
 * Card data
 * Create new Generominos cards here
 * I'd recommend making a new entry in CardData for your custom cards, eg
 *    var cardData = {
 *	    katesCards: [{...},
 * 
 * A card must have a name, and an optional description
 * The type of card is set by which inputs and outputs it has
 * Input cards have "modOut" and "output" data types
 * Output cards have "input" data types, and no others
 * Transformation cards have "input" data types and "output" data types
 * Input modifier cards have "modIn" and "modOut"(optional) types
 * Output modifier cards have no data types
 */

var cardData = {
    "standardInput": [
        {
            "name": "Mesa táctil o tablet",
            "modOut": "person",
            "output": "event(touch inicia) vector(posición del touch) state(está touched)"
        },
        {
            "name": "Tiempo",
            "desc": "Un valor que siempre avanza",
            "output": "value"
        },
        {
            "name": "Cámara web",
            "desc": "cámara que crea imágenes",
            "modOut": "sensor",
            "output": "image"
        },
        {
            "name": "Guitarra rockband",
            "desc": "Guitarra de plástico Harmonix con botones y un sensor de inclinación",
            "modOut": "person",
            "output": "event(activa power) state(botones traste) event(rasgueo arriba) event(rasgeo abajo)"
        },
        {
            "name": "Alfombra DDR",
            "desc": "Alfombra de baile sensible a la presión",
            "modOut": "person",
            "output": "event(pie arriba) event(pie abajo) state(presionado)"
        },
        {
            "name": "Micrófono",
            "desc": "entrada de audio",
            "modOut": "sensor",
            "output": "waveform"
        },
        {
            "name": "GPS: Ubicación satelital",
            "desc": "¿Dónde está este sensor en el mundo?",
            "modOut": "sensor",
            "output": "geolocation"
        },
        {
            "name": "Acelerómetro",
            "desc": "Hacia dónde está inclinado este sensor?",
            "modOut": "sensor",
            "output": "value(aceleraciónX) value(aceleraciónY) value(aceleraciónZ)"
        },
        {
            "name": "Giroscopio",
            "desc": "Medir la tasa de rotación",
            "modOut": "sensor",
            "output": "value(X rotación) value(Y rotación) value(Z rotación)"
        },
        {
            "name": "Magnetómetro",
            "desc": "¿Para dónde está el norte?",
            "modOut": "sensor",
            "output": "value(dirección)"
        },
        {
            "name": "Teclado",
            "modOut": "person",
            "desc": "escribir texto o eventos de teclas",
            "output": [
                "event(tecla presionada)",
                "text"
            ]
        },
        {
            "name": "Teclado midi",
            "modOut": "person",
            "desc": "un teclado de piano u otro controlador MIDI",
            "output": [
                "event(key pressed)",
                "value(key intensity)",
                "waveform(synthesized music)"
            ]
        },
        {
            "name": "MoUsa",
            "output": [
                "vector(posición puntero)",
                "event(click izquierdo)",
                "event(click derecho)",
                "state(moUsa siendo usado)"
            ]
        },
        {
            "name": "Generador de números pseudoazaroso",
			titleScale: .9,
            "desc": "Genera un valor al azar",
            "output": [
                "value"
            ]
        }
    ],
    "contentInputs": [
        {
            "name": "texto generativo",
            "desc": "Usa una gramática o una red neuronal para Crea texto generativo cuando ocurra un evento.",
            "input": "event",
            "output": "text(texto generado)"
        },
        {
            "name": "Feed de Twitter",
            "modOut": "person",
            "desc": "Detectar cuándo alguien tuitea con este hashtag o tuitea a esta cuenta",
            "output": [
                "event(cuándo twiteó)",
                "text(contenido del tweet)"
            ]
        },
        {
            "name": "Datos de la bolsa de valores",
            "desc": "Valor actual de la bolsa de valores",
            "output": "value"
        },
        {
            "name": "Valor de Google Trend",
            "desc": "Ranking actual de búsqueda de palabras clave",
            "input": "*text",
            "output": "value"
        },
        {
            "name": "Música",
            "desc": "Mp3, oggs y wavs",
            "modOut": "content",
            "output": "waveform"
        },
        {
            "name": "Texto",
            "desc": "Libros, poesía, periódicos u otra escritura",
            "modOut": "content",
            "output": "text"
        }
    ],
    "highTech": [
        {
            "name": "Leap Motion",
            "desc": "cámara comercial de seguimiento de manos",
            "modOut": "person",
            "output": "graph(posición uniones) trimesh(modelo 3d mano)"
        },
        {
            "name": "Onda mental de NeuroSky",
            "titleScale": 0.94,
            "modOut": "person",
            "desc": "Casco EEG que detecta 5 tipos de ondas cerebrales",
            "output": [
                "value(onda alpha)",
                "value(onda gamma)",
                "value (onda beta)",
                "value(onda delta)",
                "value(onda theta)"
            ],
            "link": "http://neurosky.com/2015/05/greek-alphabet-soup-making-sense-of-eeg-bands/"
        },
        {
            "name": "Kinect",
            "desc": "Sensor de profundidad infrarroja comercial de Microsoft",
            "modOut": "sensor",
            "output": "depthmap(Mapa de profundidad) graph(gráfico de uniones)"
        },
        {
            "name": "Gamepad",
            "desc": "Los gamepads tienen muchas configuraciones diferentes, pero la mayoría de ellos tienen los mismos tipos de salidas",
            "modOut": "sensor",
            "output": "vector(joystick) event(boton) state(trigger)"
        },
        {
            "name": "Oculus Touch",
            "modOut": "sensor",
            "desc": "Controles de posición para el conjunto Oculus VR",
            "output": "state(botones) state(triggers) value(joystick izquierdo) value(joystick derecho) vector(posición)"
        }
    ],
    "arduinoSensors": [
        {
            "name": "Fotorresistor",
            "modOut": "sensor",
            "desc": "detecta la luz ambiental a través de una resistencia variable (puede detectar infrarrojos, ultravioleta o luz visible)",
            "output": [
                "value(cantidad de luz detectada)"
            ]
        },
        {
            "name": "Sensor de ritmo cardíaco",
			"titleScale": 0.85,
            "desc": "Detectar los latidos del corazón del usuario con el tiempo <br> (basado en la luz o electrocardiógrafo con electrodos)",
            "output": "waveform(pulso) value(beats por minuto)",
            "modOut": "person"
        },
        {
            "name": "Alcoholímetro",
            "desc": "detectar la cantidad de alcohol en el aliento de alguien",
            "output": "value(Contenido de alcohol en sangre)",
            "modOut": "person"
        },
        {
            "name": "sensor de flexión",
            "modOut": "sensor",
            "desc": "doblar el sensor cambia de resistencia. <br>Se puede hacer uno casero con bolsas antiestáticas",
            "output": "value(cantidad de flexión)"
        },
        {
            "name": "Sensor de sonido",
            "modOut": "sensor",
            "desc": "detectar el ruido ambiental, el viento o alguien que sopla",
            "output": [
                "value(amplitud de sonido)"
            ]
        },
        {
            "name": "Detector de velocidad",
            "desc": "detectar la velocidad de los automóviles, bicicletas o peatones",
            "modOut": "person",
            "output": "value(velocidad)"
        },
        {
            "name": "Sensor piezo",
            "desc": "Crea una carga eléctrica cuando se toca, exprime o vibra",
            "modOut": "sensor",
            "output": "value"
        },
        {
            "name": "Interruptor de rayo láser",
            "desc": "Dispara un láser y usa un sensor de luz para detectar si el haz está perturbado",
            "modOut": "sensor",
            "output": "state(si el haz está actualmente interrumpido) event(cambio detectado!)"
        },
        {
            "name": "Potenciómetro",
            "desc": "una perilla para girar, como un sintonizador estéreo",
            "modOut": "sensor",
            "output": "value(cantidad rotada)"
        },
        {
            "name": "Botón",
            "desc": "¡Es un botón! <br> Presionalo, mantenelo o hacele click",
            "modOut": "sensor",
            "output": "event(touch sucede) state(está presionado)"
        },
        {
            "name": "Sensor de distancia",
            "modOut": "sensor",
            "desc": "Detecta la distancia desde el sensor a un objeto.",
            "output": "value(distancia calculada) value(time of flight)"
        },
        {
            "name": "Interruptor de inclinación",
            "desc": "un interruptor mecánico simple que se cierra cuando se inclina",
            "modOut": "sensor",
            "output": "event(cierre sucede) event(abierto happens) state(está cerrado)"
        }
    ],
    "installationSensors": [
        {
            "name": "Hamaca",
            "desc": "una hamaca 'inteligente' que puede detectar cuándo se balancea y qué tan rápido",
            "modOut": "person",
            "output": "value(velocidad) state(está balanceando) event(cambiar dirección)"
        },
        {
            "name": "Sombras",
            "desc": "Algo proyecta sombras en una superficie. Una cámara detecta las sombras y cuán oscuras que están.",
            "modOut": "sensor",
            "output": "depthmap(imagen B&N de las sombras) shape(borde calculado de las sombras)"
        },
        {
            "name": "Rueda giratoria",
            "desc": "una rueda que puede decir qué tan rápido se está girando",
            "modOut": "person",
            "output": "value(velocidad) state(está girando) event(cambia dirección)"
        },
        {
            "name": "Objeto conductivo",
            "titleScale": 1,
            "desc": "un objeto que puede sentir el contacto utilizando la conductividad de la piel del usuario para cerrar un circuito",
            "modOut": "sensor",
            "output": "event(tocado!) state(está tocado) value(conductividad)"
        },
        {
            "name": "Seguimiento de microbios",
            "desc": "Uní una cámara web a un microscopio para ver los microbios que se mueven o crecen el moho. <br> ¡Miralos crecer 😍!",
            "output": "particle(posición microbios) depthmap(densidad moho)"
        },
        {
            "name": "Punteros láser",
            "modOut": "person",
            "desc": "Posiciones de punto láser detectado a través de la cámara",
            "output": "particle(posicionees del puntero)"
        }
    ],
    "signalProcessing": [
        {
            "name": "Transformación rápida de Fourier",
            "input": "waveform",
            "desc": "Convertir una señal de audio en múltiples frecuencias",
            "output": "value value value value value"
        },
        {
            "name": "Análisis de audio",
            "input": "waveform(fuente de audio)",
            "desc": "Detectar ritmos, tono actual y más",
            "output": "event(beat sucede) value(tono) value(BPM)"
        }
    ],
    "conversions": [
        {
            "name": "El estado comienza o termina",
            "desc": "Detectar cuando un estado comienza o termina",
            "input": "state",
            "output": "event"
        }
    ],
    "particleMath": [
        {
            "name": "generar partículas",
            "desc": "Generar partículas a partir de un punto que va en una dirección, o genere muchas partículas aleatorias en todas partes",
            "input": "*vector(punto) *value(dirección) *value(velocidad)",
            "output": "particle"
        },
        {
            "name": "Calcular la gravedad",
			"titleScale": 0.94,
            "desc": "Calcula la fuerza atractiva (o repulsiva) basada en la proximidad a los puntos",
            "input": "vector(masas) value(fuerzas)",
            "output": "particle"
        },
        {
            "name": "Calcular rutas",
            "desc": "Crea curvas a lo largo del camino de algunos puntos",
            "input": "vector",
            "output": "curve"
        },
        {
            "name": "Algoritmo de Decasteljau",
            "titleScale": 0.75,
            "desc": "Calcular puntos o tangentes a lo largo de una curva Bezier",
            "input": "curve(curva) *value(sampleo) *value(posición sampleo)",
            "output": "vector(puntos) vector(tangentes) vector(aceleracion)"
        },
        {
            "name": "Encuentra la masa promedio y la velocidad",
			"titleScale": 0.8,
            "desc": "Calcular promedios para partículas en un vecindario",
            "input": "particle *vector(punto sampleo) *value(radio sampleo)",
            "output": "vector"
        }
    ],
    "imageProcessing": [
        {
            "name": "Diferencia de frame",
            "desc": "Resta los datos de píxeles de cada cuadro de los datos del cuadro anterior, creando un mapa del cual los píxeles están cambiando (blanco) y que permanecen igual (negro)",
            "input": "image",
            "output": "image"
        },
        {
            "name": "dividir la imagen en los canales de color",
            "input": "image",
            "output": "depthmap(hue) depthmap(brillo) depthmap(rojo) depthmap(verde) depthmap(azul)"
        },
        {
            "name": "Muestreo de color de imagen",
            "titleScale": 0.99,
            "desc": "¿De qué color es este píxel o cuál es el color promedio de esta región?",
            "input": "image *vector(posiciones) *shape(región)",
            "output": "color"
        },
        {
            "name": "Obtener paletas de colores",
            "desc": "Usa una API como Colourlovers para obtener paletas usando este color",
            "input": "color",
            "output": "color(color 1) color(color 2) color(color 3) color(color 4) text(name)"
        },
        {
            "name": "Obtener nombre de color",
			"titleScale": 0.9,
            "input": "color(input color)",
            "output": "text(nombre color más cercano) color(color más cercano)",
            "desc": "Usa el directorio webcolor o la encuesta de color XKCD para obtener un nombre para este color"
        },
    ],
    "simulations": [
        {
            "name": "Boids flocking",
            "input": "particle(posiciones) value(separacion) value(alineamiento) value(cohesión)",
            "desc": "Simular el comportamiento de una bandada de pájaros",
            "output": "particle(flock resultado)"
        }
    ],
    "graphMath": [
        {
            "name": "Stipplegen",
            "desc": "Genera una trama punteada basada en un mapa de profundidad <br> (crea imágenes de medio tono de estilo diario)",
            "input": "depthmap",
            "output": "vector"
        }
    ],
    "geopolitical": [
        {
            "name": "Haz algo aquí",
            "desc": "organizar una fiesta, plantar un jardín o celebrar un mitin en este lugar",
            "input": "geolocation"
        },
        {
            "name": "Datos de población",
            "input": "geolocation(ubicación) *value(año)",
            "desc": "Obtener datos de población de la API de población mundial",
            "output": "value(población) value(PBI) value(expectativa de vida) value(edad promedio)"
        },
        {
            "name": "Condiciones oceánicas",
            "desc": "Obtenga las condiciones del océano de la API de NOAA",
            "input": "*geolocation",
            "output": "vector(corriento) vector(viento) value(salinidad) value(visibilidad) value(temperatura del agua)"
        }
    ],
    "math": [
        {
            "name": "Calcular estadísticas",
            "input": "value(número) *value *value *value *value",
            "output": "value(promedio) value(mediana) value(máximo) value(mínimo)"
        }
    ],
    "inputMods": [
        {
            "name": "dos competidores",
            "modIn": "person"
        },
        {
            "name": "pareja ❤️",
            "modIn": "person"
        },
        {
            "name": "una familia",
            "modIn": "person"
        },
        {
            "name": "contenido de dominio público",
            "modIn": "content"
        },
        {
            "name": "de una fuente histórica o políticamente significativa",
            "modIn": "content"
        },
        {
            "name": "que no sabe que lo está controlando",
            "modIn": "person"
        },
        {
            "name": "una multitud de extraños",
            "modIn": "person"
        },
        {
            "name": "el usuario no es en realidad una persona, sino algo como una rama de árbol o una ola",
            "modIn": "person"
        },
        {
            "name": "el usuario debe usar el control con una parte del cuerpo inusual",
            "modIn": "person"
        },
        {
            "name": "sostenido por una persona",
            "modIn": "sensor",
            "modOut": "person"
        },
        {
            "name": "enganchado a algo en la naturaleza",
            "modIn": "sensor"
        },
        {
            "name": "enganchado a un animal",
            "modIn": "sensor",
            "modOut": "person"
        },
        {
            "name": "que es una especie diferente a la del espectador",
            "modIn": "person"
        },
        {
            "name": "scrapeado de las redes sociales",
            "modIn": "content"
        },
        {
            "name": "de un usuario en particular",
            "modIn": "content",
            "modOut": "person"
        },
        {
            "name": "el artista mismo",
            "modIn": "person"
        },
        {
            "name": "oculto en un espacio público",
            "modIn": "sensor"
        },
        {
            "name": "una versión gigante en la que puedes pararte",
            "modIn": "sensor"
        }
    ],
    "etc": [
        {
            "name": "Superformula",
            "desc": "Crea una forma interesante a partir de valores múltiples (versión no patentada: Superelipse)",
            "input": "value value value value value",
            "output": "shape"
        },
        {
            "name": "colisión de punto-forma",
            "titleScale": 0.85,
            "desc": "Detectar si los puntos están dentro o fuera de una forma",
            "input": "vector shape",
            "output": "event(inicia colisión) event(termina colisión) state(dentro de la forma)"
        },
        {
            "name": "Calcular la distancia",
            "desc": "Detectar la distancia desde un punto a un punto, o el punto más cercano en una curva, o una forma",
            "input": "vector *vector *shape *curve",
            "output": "value(distancia) vector(punto más cercano)"
        },
        {
            "name": "Curva de compensación",
            "desc": "Dibuja una curva paralela a esta curva",
            "input": "curve(curva original) value(distancia a separar)",
            "output": "curve"
        },
        {
            "name": "Crea curva suave a partir de puntos",
            "desc": "Calcula una curva suave o Usa los puntos como puntos de control de Bezier",
            "input": "vector",
            "output": "curve"
        },
        {
            "name": "Lógica de forma booleana",
            "desc": "Calcula la unión, la intersección o el área excluida de múltiples formas",
            "input": "shape shape",
            "output": "shape(union) shape(intersección) shape(exclusión)"
        },
        {
            "name": "Umbral / threshold",
            "desc": "Determinar si el valor está arriba, abajo o dentro de un rango",
            "input": "value *value(mínimo) *value(máximo)",
            "output": "event(entra) event(sale) state(dentro de umbral)"
        },
        {
            "name": "Amplitud de muestra",
            "desc": "Calcula la amplitud actual de una onda",
            "input": "waveform",
            "output": "value(amplitud)"
        },
        {
            "name": "deformación de pincel",
            "desc": "Deformar una forma a lo largo de una curva",
            "input": "curve shape",
            "output": "shape"
        },
        {
            "name": "Modificar el sonido",
            "desc": "Cambiar velocidad, volumen o tono",
            "input": "waveform *value(velocidad) *value(volumen) *value(tono)",
            "output": "waveform"
        },
        {
            "name": "Reproducir el sonido mientras es verdadero",
            "titleScale": 0.9,
            "desc": "Reproduzca este sonido mientras esté en el estado <br> (o reproduce el otro sonido)",
            "input": "state(condición) waveform(sonido) *waveform(sonido alternativo)",
            "output": "waveform"
        },
        {
            "name": "Obtener datos de gráficos",
            "desc": "Dado un gráfico, mire los nodos o los bordes",
            "input": "graph",
            "output": "vector(nodos) curve(border)"
        },
        {
            "name": "Diagrama de Voronoi",
            "desc": "Calcula un diagrama Voronoi a partir de estos puntos",
            "input": "vector(puntos)",
            "output": [
                "graph(bordes región)",
                "shape(regiones)",
                "vector(centro region)"
            ]
        },
        {
            "name": "Diagrama de Delaunay",
            "desc": "Calcula un diagrama de Delaunay desde estos puntos",
            "input": "vector",
            "output": "graph(bordes) shape(triángulos) vector(centros triángulos)"
        },
        {
            "name": "Flor paramétrica",
            "titleScale": 1,
            "desc": "Generar procedimientos un modelo de una flor <br> (u otra forma 3D)",
            "input": "value(cantidad pétalos) value(tamaño pétalo) value(ancho pétalo) *color(color interno) *color(color externo)",
            "output": "trimesh"
        },
        {
            "name": "Distribuir puntos",
            "desc": "distribuir varios puntos dentro de una forma",
            "input": "shape(región) *value(densidad de puntos)",
            "output": "vector(puntos resultantes)"
        },
        {
            "name": "Generar color",
            "desc": "Genere un color HSBA (o un color RGB)",
            "input": "value(hue) value(saturación) value(brillo) *value(alfa)",
            "output": "color(color)"
        },
        {
            "name": "Detectar gestos",
            "desc": "detectar el gesto de un usuario desde sus posiciones conjuntas",
            "input": "graph(modelo cuerpo)",
            "output": "event(hizo un gesto) state(gesto actual) text(nombre gesto)"
        },
        {
            "name": "Texto a formas",
            "desc": "Convierte este texto en formas describidas",
            "input": "text(texto fuento) *shape(glifos de fuente) *vector(ángulo téxto) *vector(tamaño de fuente)",
            "output": "shape(text outlines)"
        },
        {
            "name": "Ruido de Perlin 2D",
            "desc": "Dada una escala y octavas, cree ruido de Perlin",
            "input": [
                "*value(escala)",
                "*value(# de octavas)",
                "*value(xOffset)",
                "*value(yOffset)"
            ],
            "output": "depthmap"
        },
        {
            "name": "Ruido de Perlin 3D voxel",
            "titleScale": 0.9,
            "desc": "Crea vóxeles basados en los valores de Perlin en cada posición de voxel",
            "input": [
                "*value(escala)",
                "*value(# de octavas)",
                "*value(offset)",
                "value(umbral)"
            ],
            "output": "voxel"
        },
        {
            "name": "Calcular contornos",
            "desc": "Calcula los contornos topográficos a partir de un mapa de profundidad",
            "input": "depthmap *value(altura)",
            "output": "shape(regiones anidadas) curve(líneas de contornos)"
        },
        {
            "name": "Muestreo en los puntos",
			"titleScale": 0.9,
            "desc": "Calcula el valor del mapa de profundidad en los puntos",
            "input": "depthmap(mapa profundidad) vector(posición a samplear)",
            "output": "value(valor en este punto)"
        },
        {
            "name": "Autómata celular",
            "desc": "Usa el color de la imagen como un mapa de las celdas en una simulación de autómatas celulares",
            "input": "depthmap *value(tiempo)",
            "output": "depthmap"
        },
        {
            "name": "Feed de redes sociales de un lugar",
            "desc": "Buscar tweets (u otros datos) geoetiquetados en alguna ubicación",
            "input": "geolocation",
            "output": "text image"
        },
        {
            "name": "Feed de redes sociales con una palabra clave",
            "desc": "Buscar tweets que contengan una palabra",
            "input": "text",
            "output": "text image"
        },
        {
            "name": "Análisis de los sentimientos",
            "desc": "Analizar cuán positivo o negativo es un texto",
            "input": "text(texto fuente)",
            "output": "value(actitud estimada)"
        },
        {
            "name": "Enmascaramiento de imágenes",
            "desc": "Enmascarar una imagen usando formas",
            "input": "shape(forma a usar para enmascarar) image(imágen fuente) *image *image",
            "output": "image"
        },
        {
            "name": "Mezcla de imágenes",
            "desc": "Mezcle dos imágenes con un mapa de profundidad",
            "input": "image(imagen fuente A) image(imagen fuente B) depthmap(% de A o B, por pixel)",
            "output": "image"
        },
        {
            "name": "Geometría de mapas de altura",
            "desc": "Crea un paisaje con un mapa de altura",
            "input": "depthmap(puntos de alturas) value(multiplicador de alturas)",
            "output": "trimesh"
        },
        {
            "name": "Impresión 3D",
            "desc": "Crea impresión 3D de este mesh",
            "input": "trimesh"
        },
        {
            "name": "Render 3D",
            "desc": "Renderizar este mesh en un motor 3D",
            "input": "trimesh",
            "output": "image(imagen) depthmap(z-buffer)"
        },
        {
            "name": "Imprimir como tela",
            "desc": "Imprima esta imagen en la tela",
            "input": "image"
        },
        {
            "name": "Grabado láser",
            "desc": "Usa un láser controlado por CNC para grabar este mapa de profundidad en madera, cuero o vidrio",
            "input": "depthmap"
        },
        {
            "name": "Corte por láser",
            "desc": "Usa un láser controlado por CNC para cortar formas en madera o plástico",
            "input": "shape"
        },
        {
            "name": "Posterización de la imagen",
            "desc": "Calcula las regiones en una imagen de acuerdo con la similitud de color",
            "input": "image(imagen fuente) *value(contador de regiones)",
            "output": "shape"
        },
        {
            "name": "Cambiar imágenes",
            "desc": "Cambiar qué imagen se muestra en función de los estados",
            "input": "state image *image *image",
            "output": "image"
        },
        {
            "name": "Detectar el centro de masa",
            "desc": "Calcula el centro y el tamaño de las formas",
            "input": "shape",
            "output": "particle"
        },
        {
            "name": "Construir una ubicación a partir de coordenadas",
            "input": "value(longitud) value(latitud)",
            "output": "geolocation(geolocación)"
        },
        {
            "name": "Trackeo de cara",
            "desc": "reconocimiento facial",
            "input": "image",
            "output": "event(cara detectada) graph(forma cara)"
        },
        {
            "name": "Reconocimiento de la expresión facial",
            "input": "image",
            "output": "state(expresión actual) event(expresión cambió) text(nombre expresión)"
        },
        {
            "name": "Dibujar formas",
            "desc": "renderizar formas a una imagen terminada",
            "input": "shape(formas) *color(colores a usar) *vector(posiciones)",
            "output": "image"
        },
        {
            "name": "Dibujar puntos con colores de imagen",
            "desc": "Dibujar puntos como coloreados por el píxel de imagen más cercano",
            "input": "vector image",
            "output": "image"
        },
        {
            "name": "Dibujar rastro de partículas",
            "desc": "Dibuja los rastro que las partículas en movimiento dejan atrás o dibujan curvas (particle trail)",
            "input": "*particle(particles) *curve(curves)",
            "output": "image"
        },
        {
            "name": "Vibración",
            "desc": "Vibrar un motor para sacudir la arena, el agua o la gente",
            "input": "*value(frecuencia) *waveform(forma de onda)"
        },
        {
            "name": "Altavoz",
            "desc": "Amplificar un sonido",
            "input": "waveform"
        },
        {
            "name": "Renderizar 3D",
            "desc": "Renderiza una escena 3D a una imagen",
            "input": "trimesh",
            "output": "image"
        },
        {
            "name": "Renderizar a la realidad virtual estereográfica",
            "desc": "Renderiza una escena 3D a una imagen estereográfica o una pantalla 3D como un auricular VR",
            "input": "trimesh"
        },
        {
            "name": "Obtener clima en un lugar",
            "input": "geolocation",
            "output": "text(descripción clima) value(temperatura) value(velocidad de viento) value(humedad)"
        },
        {
            "name": "Proyectar imagen a una pantalla",
            "desc": "o sobre humo, agua o un busto de yeso",
            "input": "image"
        },
        {
            "name": "Mover un servomotor",
            "desc": "Setear un motor servo para que se mueva a una determinada rotación",
            "input": "value"
        },
        {
            "name": "Girar un motor",
            "desc": "Gire un motor a una velocidad dada. ¿Está girando una rueda, un tocadiscos o un destornillador?",
            "input": "value"
        },
        {
            "name": "Led",
            "desc": "Enciende un led con cierto brillo",
            "input": "value"
        },
        {
            "name": "LED RGB",
            "desc": "Enciende un LED con valores rojos, verdes y azules",
            "input": "value(rojo) value(verde) value(azul)"
        },
        {
            "name": "Panel LED",
            "desc": "Enciende un panel 2D de LED de acuerdo con los colores en una imagen",
            "input": "image"
        },
        {
            "name": "¡Fuego!",
            "desc": "Controlar la cantidad de propano (y colorante) de un efecto de fuego",
            "input": "value(intensidad) *value(color)"
        },
        {
            "name": "Ventilador",
            "desc": "Controlar un ventilador para que sople el viento",
            "input": "value(intensidad) *value(dirección)"
        },
        {
            "name": "Texto a voz",
            "desc": "Convertir el texto en discurso humano",
            "input": "text(texto fuente) *value(velocidad) *value(tono)",
            "output": "waveform"
        },
        {
            "name": "Dictado a texto",
            "desc": "Reconocer palabras en una forma de onda de audio",
            "input": "waveform(sonido fuente)",
            "output": "text(texto detectado)"
        },
        {
            "name": "Cubo",
            "desc": "Enciende un cubo de LED según un conjunto de vóxeles",
            "input": "*voxel"
        },
        {
            "name": "vóxeles triangulados",
            "desc": "Calcula un mesh triangular de voxels",
            "input": "voxel",
            "output": "trimesh"
        },
        {
            "name": "Metaballs",
            "desc": "Calcula un mesh de metaballs alrededor de estas partículas",
            "input": "particle(posición y radio)",
            "output": "trimesh(mesh resultante)"
        },
        {
            "name": "Fundido cruzado",
            "desc": "Mezclar transmisiones de sonido basadas en un valor",
            "input": "waveform(audio 1) waveform(audio 2) value(fade)",
            "output": "waveform(audio resultante)"
        },
        {
            "name": "Extruir formas",
            "desc": "Extruir formas a lo largo de un tubo",
            "input": "shape(perfil) curve(curva a seguir) *value(rotación)",
            "output": "trimesh"
        },
        {
            "name": "Tubo de Ruben",
            "desc": "Vibrar un tubo de propano, haciendo que el fuego cambie la intensidad a lo largo de la longitud",
            "input": "waveform"
        },
        {
            "name": "Jugar un videojuego",
            "desc": "Super Mario Brothers, Halo y Tetris requieren el mismo tipo de input",
            "input": "event(botón) state(izquierda) state(derecha) state(arriba) state(abajo)"
        },
        {
            "name": "Vidrio que cambia de luz",
            "desc": "Vidrio que cambia de claro a opaco",
            "input": "value"
        },
        {
            "name": "... en un pedazo de moda",
            "desc": "joyería, ropa, zapatos o un salón"
        },
        {
            "name": "... en arquitectura"
        },
        {
            "name": "... en un vehículo en movimiento",
            "desc": "bicicletas, barcos, trenes, automóviles"
        },
        {
            "name": "... Donde ningún humano puede verlo"
        },
        {
            "name": "... en el cuerpo de alguien",
            "desc": "la cara ... o en otro lugar"
        },
        {
            "name": "...en naturaleza",
            "desc": "Metido en un árbol, en un campo, en el océano"
        },
        {
            "name": "... muy, muy, muy pequeño"
        },
        {
            "name": "... toda una nube de estas salidas"
        },
        {
            "name": "... muy muy grande"
        },
        {
            "name": "... en un espacio público"
        },
        {
            "name": "... en algún lugar ilegal"
        }
    ]
}


var spares = [{
		name: "directional bleed",
		desc: "Directionally blur the pixels, based on the direction of the vector field at that point",
		input: "image vectorfield",
		output: "image"
	}, {
		name: "cellular automata (grid)",
		desc: "Change values in the grid, depending on the values of the neighboring nodes",
		input: "vectorfield",
		output: "vectorfield",
	},

	{
		name: "turn points into particles",
		desc: "add velocity and other values to points to turn them into particles",
		input: "vector(points) *vectorfield(velocity) *vectorfield(color) *vectorfield(mass)",
		output: "particle",
		set: 1,
	},

	{
		name: "calculate gradients",
		desc: "calculate the gradient from points in a depthmap. Usaful for finding edges in images, or simulating water on terrain",
		input: "*depthmap *image *vectorfield",
		output: "vectorfield",
	}, {
		name: "apply forces to particles",
		desc: "simulate the particles moving in a field of forces",
		input: "particle vectorfield",
		output: "particle",
	},

	{
		name: "Directional vectorfield",
		input: "value(direction) value(velocity)",
		output: "vectorfield",
	}, {
		name: "Deform text along a curve",
		desc: "",
		input: "curve text *value(offset)",
		output: "shape"
	}, {
		name: "get particle data",
		desc: "get data about particles",
		input: "particle",
		output: "vector(position) value(direction) value(velocity)"
	}, {
		name: "Sine",
		desc: "Calculate the sine value",
		input: "value",
		output: "value",
		set: 1
	}, {
		name: "conductive fabric switch",
		desc: "fabric that can sense when it is closed",
		modOut: "sensor",

		output: "event(touch happens) state(is touched)"
	}, {
		name: "Mechanical switch",
		desc: "common toggle switches",
		modOut: "sensor",

		output: "event(close happens) event(open happens) state(is closed)"
	},

]