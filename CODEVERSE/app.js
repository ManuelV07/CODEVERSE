var E = function (s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
};

var SKINS = [
  ["rookie", "Cyber", "🤖"],
  ["coder", "Cyborg", "👾"],
  ["ninja", "Ninja", "🥷"],
  ["wizard", "Brujo", "🧙"],
];

var ACCS = [
  ["helmet", "Casco holográfico", "⛑️"],
  ["aura", "Aura neón", "✨"],
  ["pet", "Cyber-Pet", "🐱"],
];

var TABS = [
  ["path", "Mapa", "🗺️"],
  ["mission", "Misión", "⚙️"],
  ["glossary", "Glosario", "📖"],
  ["profile", "Perfil", "🏆"],
  ["supervisor", "Supervisor", "👥"],
];

var SECTORS = [
  {
    id: 1,
    tone: "done",
    icon: "✓",
    sector: "Sector 1 · Sistemas Primarios",
    title: "Fundamentos y lógica",
    prompt: "Ordena las etapas básicas para resolver un problema mediante un algoritmo.",
    code: "INICIO\n  Leer datos\n  Procesar información\n  Mostrar resultado\nFIN",
    options: [
      "Entrada → Proceso → Salida",
      "Proceso → Salida → Entrada",
      "Salida → Entrada → Proceso",
      "Entrada → Salida → Proceso",
    ],
    answer: "Entrada → Proceso → Salida",
    hints: [
      "Piensa en qué necesita recibir primero un programa.",
      "Después de recibir datos, el sistema debe trabajar con ellos.",
      "La salida se muestra al final: Entrada → Proceso → Salida.",
    ],
    holo: "Cómo se construye un algoritmo",
    video: "6c89Y0yTISI",
    transcript: "Un algoritmo organiza pasos para resolver un problema. Primero recibe los datos, después los procesa y finalmente presenta un resultado.",
    glossary: [
      ["Algoritmo", "Conjunto ordenado de pasos para resolver un problema."],
      ["Entrada", "Datos que recibe un programa."],
      ["Proceso", "Operaciones que transforman los datos."],
      ["Salida", "Resultado que entrega el programa."],
    ],
    success: "¡Secuencia correcta! Has organizado las etapas fundamentales de un algoritmo.",
  },
  {
    id: 2,
    tone: "now",
    icon: "⚙️",
    sector: "Sector 2 · Matriz de Datos",
    title: "Variables y tipos de datos",
    prompt: "¡Atención! Necesitamos identificar el tipo de dato correcto para almacenar la edad de una persona.",
    code: "int edad = 20;\ncout << edad;",
    options: ["int", "string", "float", "void"],
    answer: "int",
    hints: [
      "Piensa en un tipo de dato que no tenga decimales.",
      "La variable edad representa años: un número entero.",
      "La respuesta correcta es int.",
    ],
    holo: "Variables explicadas con analogías visuales",
    video: "qILS8EjPSeI",
    transcript: "Una variable es como una caja con etiqueta. En C++ declaramos su tipo antes del nombre, por ejemplo: int edad, seguido del valor que va a guardar.",
    glossary: [
      ["int", "Tipo de dato para números enteros."],
      ["std::cout", "Imprime texto o valores en la consola."],
      [";", "Cierra cada instrucción en C++."],
    ],
    success: "¡Núcleo estable! 20 es un entero, así que int era el tipo correcto.",
  },
  {
    id: 3,
    tone: "boss",
    icon: "👾",
    sector: "Sector 3 · Boss Level",
    title: "El Guardián Condicional",
    prompt: "El guardián solo permite avanzar si se cumple una condición. ¿Qué estructura permite tomar esa decisión?",
    code: 'if (vidas > 0) {\n  cout << "Continuar";\n} else {\n  cout << "Game Over";\n}',
    options: ["if / else", "for", "while", "cout"],
    answer: "if / else",
    hints: [
      "Busca una estructura que evalúe una expresión lógica.",
      "Tiene una rama para cuando la condición se cumple y otra para cuando no.",
      "La estructura correcta es if / else.",
    ],
    holo: "Decisiones y condiciones en C++",
    video: "I_eEU9sMvPI",
    transcript: "Las estructuras condicionales permiten ejecutar diferentes instrucciones según el resultado de una condición. if evalúa la condición y else ofrece una ruta alternativa.",
    glossary: [
      ["if", "Ejecuta un bloque cuando una condición es verdadera."],
      ["else", "Define qué hacer cuando la condición es falsa."],
      ["Condición", "Expresión que se evalúa como verdadera o falsa."],
    ],
    success: "¡Guardián derrotado! Has identificado correctamente la estructura condicional.",
  },
  {
    id: 4,
    tone: "loop",
    icon: "🔁",
    sector: "Sector 4 · Ciclos y repetición",
    title: "Bucle Infinito",
    prompt: "Para repetir una instrucción cinco veces, ¿qué estructura de control es la más adecuada?",
    code: "for (int i = 0; i < 5; i++) {\n  cout << i;\n}",
    options: ["if", "for", "int", "cout"],
    answer: "for",
    hints: [
      "Necesitas una estructura de repetición.",
      "Piensa en el ciclo que permite definir un contador y un límite.",
      "La respuesta correcta es for.",
    ],
    holo: "Ciclos: repite instrucciones con control",
    video: "OfUcJisOj3A",
    transcript: "El ciclo for permite repetir un bloque de código usando una inicialización, una condición y una actualización. Es útil cuando conocemos la cantidad de repeticiones.",
    glossary: [
      ["for", "Repite un bloque un número determinado de veces."],
      ["while", "Repite mientras una condición sea verdadera."],
      ["Contador", "Variable que permite controlar las repeticiones."],
    ],
    success: "¡Sector desbloqueado! Has dominado la estructura de repetición for.",
  },
];

/* =========================================
   DIAGNÓSTICO INICIAL
   ========================================= */

var DQ = [
  {
    p: "¿Cuál es la salida de este pseudocódigo?",
    c: "x = 4\ny = 2\nmostrar x * y",
    o: ["6", "8", "42"],
    a: "8",
  },
  {
    p: "¿Cuál es una secuencia lógica correcta?",
    c: "",
    o: [
      "Repetir → Comparar → Iniciar",
      "Iniciar → Comparar → Repetir",
      "Comparar → Iniciar → Terminar",
    ],
    a: "Iniciar → Comparar → Repetir",
  },
  {
    p: "Si la condición es falsa, ¿qué bloque se ejecuta?",
    c: "si (condicion) { A } sino { B }",
    o: ["A", "B", "Ambos"],
    a: "B",
  },
];

/* =========================================
   MISIONES DIARIAS CODEVERSE
   ========================================= */

var DAILY_MISSIONS = [
  {
    id: "variables",
    icon: "🧬",
    category: "VARIABLES",
    title: "Repara la matriz de datos",
    description: "Identifica los tipos de datos correctos en C++.",
    questions: [
      {
        p: "¿Qué tipo de dato permite almacenar un número entero?",
        c: "int edad = 21;",
        o: ["int", "float", "string"],
        a: "int",
      },
      {
        p: "¿Qué tipo de dato permite almacenar texto?",
        c: 'std::string nombre = "Ana";',
        o: ["bool", "std::string", "int"],
        a: "std::string",
      },
      {
        p: "¿Qué valores puede almacenar una variable bool?",
        c: "bool sistemaActivo = true;",
        o: ["Solo números", "true o false", "Texto"],
        a: "true o false",
      },
    ],
  },
  {
    id: "condicionales",
    icon: "⚡",
    category: "CONDICIONALES",
    title: "Reinicia el sistema de decisiones",
    description: "Resuelve condiciones y desbloquea las rutas del sistema.",
    questions: [
      {
        p: "¿Qué operador permite comparar si dos valores son iguales?",
        c: "if (edad == 18) { ... }",
        o: ["=", "==", "!="],
        a: "==",
      },
      {
        p: "¿Qué resultado produce esta condición si edad vale 20?",
        c: 'if (edad >= 18) {\n  cout << "Mayor de edad";\n}',
        o: ["Menor de edad", "Mayor de edad", "No muestra nada"],
        a: "Mayor de edad",
      },
      {
        p: "Si una condición del if es falsa, ¿qué estructura puede ejecutar una alternativa?",
        c: "if (activo) {\n  iniciar();\n} else {\n  detener();\n}",
        o: ["for", "else", "while"],
        a: "else",
      },
    ],
  },
  {
    id: "ciclos",
    icon: "🔁",
    category: "CICLOS",
    title: "Detén el bucle infinito",
    description: "Controla repeticiones y estabiliza el sistema.",
    questions: [
      {
        p: "¿Qué valores imprime este ciclo?",
        c: "for (int i = 0; i < 3; i++) {\n  cout << i;\n}",
        o: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3"],
        a: "0, 1, 2",
      },
      {
        p: "¿Cuándo deja de ejecutarse este ciclo?",
        c: "while (vidas > 0) {\n  vidas--;\n}",
        o: [
          "Cuando vidas sea mayor que 0",
          "Cuando vidas sea igual a 0",
          "Nunca termina",
        ],
        a: "Cuando vidas sea igual a 0",
      },
      {
        p: "¿Qué instrucción permite detener inmediatamente un ciclo?",
        c: "for (int i = 0; i < 10; i++) {\n  if (i == 5) {\n    break;\n  }\n}",
        o: ["continue", "break", "return"],
        a: "break",
      },
    ],
  },
];

/* =========================================
   GLOSARIO - 18 TÉRMINOS
   ========================================= */

var TAGS = [
  "Todas",
  "Variables",
  "Entrada y salida",
  "Operadores",
  "Condicionales",
  "Ciclos",
];

var TERMS = [
  // 1. Variables y tipos de datos
  ["int", "Variables", "Guarda números enteros, sin decimales.", "int vidas = 3;"],
  ["float", "Variables", "Guarda números con decimales.", "float escala = 1.5;"],
  ["std::string", "Variables", "Guarda texto: nombres, títulos y cadenas de caracteres.", 'std::string nombre = "Ana";'],
  ["bool", "Variables", "Almacena valores booleanos: verdadero o falso.", "bool activo = true;"],
  ["char", "Variables", "Almacena un único carácter, como una letra o símbolo.", "char inicial = 'A';"],
  ["double", "Variables", "Almacena números decimales con mayor precisión que float.", "double pi = 3.14159265;"],
  ["const", "Variables", "Define una variable cuyo valor no debe modificarse después de inicializarse.", "const int edad = 20;"],

  // 2. Entrada y salida
  ["std::cout", "Entrada y salida", "Muestra texto o valores en la consola.", 'std::cout << "Hola mundo";'],
  ["std::cin", "Entrada y salida", "Permite recibir información escrita por el usuario.", "int puntos;\nstd::cin >> puntos;"],

  // 3. Operadores
  ["Aritméticos", "Operadores", "Realizan operaciones matemáticas como suma, resta, multiplicación, división y módulo.", "int resultado = 10 + 5;\n// +  -  *  /  %"],
  ["Lógicos", "Operadores", "Permiten combinar o negar condiciones mediante AND, OR y NOT.", "bool resultado = (edad >= 18) && activo;\n// &&  ||  !"],

  // 4. Condicionales
  ["if / else", "Condicionales", "Ejecuta un bloque si se cumple una condición y otro cuando no se cumple.", "if (xp > 100) {\n  subirNivel();\n} else {\n  seguir();\n}"],
  ["switch / case", "Condicionales", "Permite seleccionar diferentes instrucciones dependiendo del valor de una expresión.", "switch (opcion) {\n  case 1:\n    iniciar();\n    break;\n  default:\n    salir();\n}"],

  // 5. Ciclos
  ["for", "Ciclos", "Repite un bloque de instrucciones un número determinado de veces.", "for (int i = 0; i < 5; i++) {\n  std::cout << i;\n}"],
  ["while", "Ciclos", "Repite un bloque de instrucciones mientras una condición sea verdadera.", "while (vidas > 0) {\n  vidas--;\n}"],
  ["do / while", "Ciclos", "Ejecuta las instrucciones al menos una vez y después evalúa la condición para repetirlas.", "int i = 0;\ndo {\n  i++;\n} while (i < 5);"],
  ["break", "Ciclos", "Interrumpe inmediatamente la ejecución de un ciclo o una estructura switch.", "if (vidas == 0) {\n  break;\n}"],
  ["continue", "Ciclos", "Omite el resto de la iteración actual y continúa con la siguiente repetición del ciclo.", "for (int i = 0; i < 5; i++) {\n  if (i == 2) continue;\n  std::cout << i;\n}"],
];

/* =========================================
   SISTEMA DE 8 INSIGNIAS CODEVERSE
   ========================================= */

function getBadges() {

  var finished = S.finished || [];

  // Comprobar sectores completados
  var sector1 = finished.indexOf(1) > -1;
  var sector2 = finished.indexOf(2) > -1;
  var sector3 = finished.indexOf(3) > -1;
  var sector4 = finished.indexOf(4) > -1;

  // Contar sectores completados
  var completedSectors = SECTORS.filter(function (sector) {
    return finished.indexOf(sector.id) > -1;
  }).length;

  // Comprobar finalización total
  var allCompleted = completedSectors === 4;

  return [

    // INSIGNIAS INICIALES
    {
      name: "Lógico Principiante",
      emoji: "🥇",
      earned: true,
      progress: null,
    },

    {
      name: "Maestro de Sintaxis",
      emoji: "🥇",
      earned: true,
      progress: null,
    },

    // INSIGNIAS DE PROGRESO
    {
      name: "Cazador de Bugs",
      emoji: "🐞",
      earned: false,
      progress: 40,
    },

    {
      name: "Racha de 7 días",
      emoji: "🔥",
      earned: false,
      progress: 60,
    },

    // SECTOR 2
    {
      name: "Arquitecto de Variables",
      emoji: "🧬",
      earned: sector2,
      progress: null,
    },

    // SECTOR 3
    {
      name: "Guardián Derrotado",
      emoji: "⚡",
      earned: sector3,
      progress: null,
    },

    // SECTOR 4
    {
      name: "Domador de Bucles",
      emoji: "🔁",
      earned: sector4,
      progress: null,
    },

    // RECOMPENSA FINAL
    {
      name: "Leyenda CodeVerse",
      emoji: "🏆",
      earned: allCompleted,
      progress: Math.round(
        (completedSectors / 4) * 100
      ),
    },

  ];

}

var STU = [
  [
    "Mariana Ríos",
    "Sector 2 · Matriz de Datos",
    "g",
    "Avanza sin dificultades, 3 misiones esta semana.",
  ],
  [
    "Julián Castro",
    "Sector 1 · Sistemas Primarios",
    "y",
    "Repitió el mismo ejercicio 3 veces. Requiere refuerzo.",
  ],
  [
    "Valentina Gómez",
    "Sector 2 · Matriz de Datos",
    "r",
    "Sin actividad hace 6 días. Posible frustración detectada.",
  ],
  [
    "Andrés Pardo",
    "Sector 3 · Guardián Condicional",
    "g",
    "Racha activa de 9 días, buen ritmo de avance.",
  ],
];

var SM = {
  g: ["Avanzando", "em"],
  y: ["Requiere refuerzo", "am"],
  r: ["Dificultades recurrentes", "ro"],
};

/* =========================================
   ESTADO GENERAL DE CODEVERSE
   ========================================= */

var S = {
  tab: "path",
  sector: 2,
  finished: [1],

  diag: false,
  sel: null,
  res: null,
  stab: 65,
  bt: "holovid",
  tr: false,
  hint: 0,

  ds: 0,
  dsel: null,
  dscore: 0,
  dfin: false,

  q: "",
  tag: "Todas",

  skin: "rookie",
  accs: ["pet"],

  // Estado de misiones diarias
  dailyOpen: false,
  dailyIndex: 0,
  dailyActiveIndex: 0,
  dailyStep: 0,
  dailySelected: null,
  dailyScore: 0,
  dailyFin: false,
  dailyCompleted: [],
  dailyPaused: false,
};

var A = document.getElementById("app");

/* =========================================
   COMPONENTE CYBER-BOT
   ========================================= */

/* =========================================
   AVATAR DINÁMICO EN LOS MENSAJES
   ========================================= */

function bot(t) {

  var currentSkin = SKINS.find(function (skin) {
    return skin[0] === S.skin;
  }) || SKINS[0];

  return (

    '<div class="bot">' +

      '<i>' +
        currentSkin[2] +
      '</i>' +

      '<div>' +

        '<small>' +
          E(currentSkin[1]) +
        '</small>' +

        E(t) +

      '</div>' +

    '</div>'

  );

}
/* =========================================
   CABECERA
   ========================================= */

function head() {
  var sk = SKINS.filter(function (s) {
    return s[0] === S.skin;
  })[0];

  return (
    '<header class="h"><div class="w">' +
    '<span class="logo">CodeVerse</span>' +
    '<div class="st">' +
    '<span class="streak-badge" title="Racha de 12 días" aria-label="12 días de racha">' +
    '<span class="streak-flame" aria-hidden="true">🔥</span>' +
    '<strong>12</strong>' +
    '</span>' +
    '<span class="c" title="Nivel y XP">⚡ Nv.2 · 860 XP</span>' +
    '<span class="p" title="Gemas">💎 320</span>' +
    '<button class="av" data-a="tab" data-v="profile" aria-label="Ver perfil"><b>' +
    sk[2] +
    "</b><span>" +
    sk[1] +
    "</span></button></div></div></header>"
  );
}

/* =========================================
   NAVEGACIÓN PRINCIPAL
   ========================================= */

function nav() {
  return (
    '<nav class="b" aria-label="Principal">' +
    TABS.map(function (t) {
      return (
        '<button data-a="tab" data-v="' +
        t[0] +
        '"' +
        (S.tab === t[0] ? ' aria-current="page"' : "") +
        '><span aria-hidden="true">' +
        t[2] +
        "</span>" +
        t[1] +
        "</button>"
      );
    }).join("") +
    "</nav>"
  );
}

/* =========================================
   WIDGET DE MISIÓN DIARIA
   ========================================= */

function dailyMissionWidget() {
  var mission = DAILY_MISSIONS[S.dailyIndex];

  var completed =
    S.dailyCompleted.indexOf(mission.id) > -1;

  var progress = completed ? 100 : 0;

  return (
    '<section class="card daily-widget">' +

      '<div class="daily-widget-heading">' +

        '<b>✨ Misión diaria express</b>' +

        '<span class="daily-category">' +
          E(mission.category) +
        '</span>' +

      '</div>' +

      '<button type="button" class="daily-main-button" data-a="daily-open">' +

        '<span class="daily-mission-icon">' +
          mission.icon +
        '</span>' +

        '<strong>' +
          E(mission.title) +
        '</strong>' +

        '<span class="daily-description">' +
          E(mission.description) +
        '</span>' +

        '<div class="meter daily-meter">' +
          '<i style="width:' + progress + '%;background:var(--am)"></i>' +
        '</div>' +

        '<span class="daily-progress-label">' +

          (completed
            ? "3 de 3 preguntas · Completada"
            : "0 de 3 preguntas · Pendiente") +

        '</span>' +

        '<span class="daily-cta">' +

          (completed
            ? "Repetir misión ↗"
            : "Resolver misión →") +

        '</span>' +

      '</button>' +

      '<div class="daily-carousel-controls">' +

        '<button type="button" class="daily-arrow" data-a="daily-prev" aria-label="Misión anterior">‹</button>' +

        '<div class="daily-indicators">' +

          '<span>' +
            (S.dailyIndex + 1) +
            ' / ' +
            DAILY_MISSIONS.length +
          '</span>' +

          '<div class="daily-dots">' +

            DAILY_MISSIONS.map(function (m, i) {
              return '<i class="' +
                (i === S.dailyIndex ? "active" : "") +
                '"></i>';
            }).join("") +

          '</div>' +

          '<small>Cambio automático cada 30 s</small>' +

        '</div>' +

        '<button type="button" class="daily-arrow" data-a="daily-next-preview" aria-label="Siguiente misión">›</button>' +

      '</div>' +

    '</section>'
  );
}

/* =========================================
   WIDGET DE RACHA Y EXPERIENCIA
   ========================================= */

function streakWidget() {

  var days = 12;
  var goal = 14;

  var progress = Math.min(
    100,
    Math.round((days / goal) * 100)
  );

  return `

    <section class="card streak-widget">

      <div class="streak-top">

        <div class="streak-title">
          🔥 Multiplicador de racha
        </div>

        <span class="streak-status">
          BONUS ACTIVO
        </span>

      </div>

      <div class="streak-main">

        <div>
          <strong class="streak-number">${days}</strong>
          <span class="streak-unit">DÍAS SEGUIDOS</span>
        </div>

        <div class="streak-multiplier">
          <strong>x1.5</strong>
          <span>XP POR MISIÓN</span>
        </div>

      </div>

      <p class="streak-description">
        Tu constancia te permite mantener un
        multiplicador de experiencia.
      </p>

      <div class="streak-divider"></div>

      <div class="streak-goal">

        <span>Próxima meta</span>

        <strong>${goal} días</strong>

      </div>

      <div class="meter streak-progress">

        <i style="width:${progress}%;background:var(--or)"></i>

      </div>

      <small class="streak-progress-label">
        ${days} de ${goal} días ·
        ${goal - days} días para la siguiente meta
      </small>

      <div class="streak-tip">
        ⚡ Completa una misión hoy para mantener tu racha.
      </div>

    </section>

  `;
}

/* =========================================
   WIDGET CYBER-PET Y EQUIPAMIENTO
   ========================================= */

function cyberPetWidget() {

  var accessories = [

    {
      id: "pet",
      emoji: "🐱",
      name: "Cyber-Pet",
      description:
        "Tu compañero te acompaña durante las misiones y representa un bonus de +5% XP.",
      type: "Compañero",
    },

    {
      id: "helmet",
      emoji: "⛑️",
      name: "Casco holográfico",
      description:
        "Una visera futurista que personaliza la apariencia de tu avatar.",
      type: "Cosmético",
    },

    {
      id: "aura",
      emoji: "✨",
      name: "Aura neón",
      description:
        "Un efecto luminoso que rodea al avatar y destaca tu presencia.",
      type: "Cosmético",
    }

  ];

  var items = accessories.map(function (item) {

    var active =
      S.accs.indexOf(item.id) > -1;

    return `

      <div class="equipment-item">

        <div class="equipment-icon">
          ${item.emoji}
        </div>

        <div class="equipment-info">

          <div class="equipment-heading">

            <strong>${E(item.name)}</strong>

            <span class="equipment-type">
              ${item.type}
            </span>

          </div>

          <p>
            ${E(item.description)}
          </p>

          <span class="equipment-state ${active ? "equipped" : ""}">
            ${active ? "✓ Equipado" : "Disponible en perfil"}
          </span>

        </div>

      </div>

    `;

  }).join("");

  return `

    <section class="card companion-widget">

      <div class="companion-header">

        <b>🐱 Cyber-Pet & equipamiento</b>

        <span class="companion-count">
          ${S.accs.length} / 3
        </span>

      </div>

      <div class="equipment-list">

        ${items}

      </div>

      <button
        class="btn gh equipment-button"
        data-a="tab"
        data-v="profile">

        Personalizar equipamiento →

      </button>

    </section>

  `;
}

/* =========================================
   MAPA DE SECTORES
   ========================================= */

function vPath() {
  var nodes = SECTORS.map(function (sector) {

    var isDone = S.finished.indexOf(sector.id) > -1;
    var tone = isDone ? "done" : sector.tone;

    var status = isDone
      ? "Completado · puedes repetirlo"
      : sector.id === 2
        ? "Misión activa · 3 de 5 envíos"
        : sector.id === 3
          ? "Disponible · reto de condicionales"
          : "Disponible · ciclos y repetición";

    var action = isDone
      ? "Repetir sector"
      : sector.id === 2
        ? "Continuar misión"
        : sector.id === 3
          ? "Enfrentar al guardián"
          : "Iniciar sector";

    var current = sector.id === 2 && !isDone;

    return (
      '<button type="button" class="nd node-btn ' +
      tone +
      '" data-a="sector" data-v="' +
      sector.id +
      '" aria-label="Abrir ' +
      E(sector.sector + ": " + sector.title) +
      '">' +

      (current
        ? '<span class="pill pc node-current">🤖 Tú estás aquí</span>'
        : "") +

      '<span class="o" aria-hidden="true">' +
      (isDone && sector.id !== 1 ? "✓" : sector.icon) +
      "</span>" +

      "<small>" +
      E(sector.sector) +
      "</small>" +

      "<b>" +
      E(sector.title) +
      "</b>" +

      '<small class="node-status">' +
      E(status) +
      "</small>" +

      '<span class="btn node-cta ' +
      (sector.id === 3 && !isDone ? "am" : "") +
      '">' +
      action +
      "</span>" +

      "</button>"
    );

  }).join("");

  return (
    '<div class="w col">' +

    '<div class="card neon-p col">' +

    bot("¡Hola, recluta! Haz tu escaneo inicial para personalizar tu ruta.") +

    '<div class="row" style="justify-content:space-between">' +

    '<span class="row">' +
    '<span class="pill pc">+100 XP</span>' +
    '<span class="pill pa">🎁 Cofre raro</span>' +
    '</span>' +

    '<button class="btn pu" data-a="diag">Hacer diagnóstico</button>' +

    "</div></div>" +

    '<div class="map" aria-label="Mapa de sectores">' +
    nodes +
    "</div>" +

    '<div class="grid3 path-widgets">' +

    streakWidget() +

    dailyMissionWidget() +

    cyberPetWidget() +

    '</div></div>'
  );
}

/* =========================================
   MISIÓN PRINCIPAL Y HOLOVID
   ========================================= */

function vMission() {

  var mission = SECTORS.filter(function (sector) {
    return sector.id === S.sector;
  })[0] || SECTORS[1];

  var ok = S.res === "success";
  var er = S.res === "error";
  var s = S.sel;

  var col =
    S.stab >= 90
      ? "var(--em)"
      : S.stab >= 50
        ? "var(--cy)"
        : "var(--am)";

  var bt = [
    ["holovid", "🎬 Holovid"],
    ["hints", "💡 Pistas"],
    ["gl", "📖 Glosario"],
  ];

  var bc = "";

  /* ---------- VIDEO DE YOUTUBE ---------- */

  if (S.bt === "holovid") {

    bc =
      '<div class="video-container" style="width:100%;aspect-ratio:16/9;background:#080d1a;border-radius:12px;overflow:hidden;border:1px solid var(--bd)">' +

      '<iframe ' +

      'src="https://www.youtube-nocookie.com/embed/' +
      E(mission.video) +
      '?rel=0" ' +

      'title="' +
      E(mission.holo) +
      '" ' +

      'style="width:100%;height:100%;border:0;display:block" ' +

      'loading="lazy" ' +

      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +

      'referrerpolicy="strict-origin-when-cross-origin" ' +

      'allowfullscreen>' +

      "</iframe>" +

      "</div>" +

      '<b style="display:block;color:var(--cy);margin-top:12px">' +
      E(mission.holo) +
      "</b>" +

      '<p style="color:var(--mu);font-size:.9rem">Material educativo · YouTube</p>' +

      '<button class="btn gh" data-a="tr">' +
      (S.tr ? "Ocultar transcripción" : "Mostrar transcripción") +
      "</button>" +

      (S.tr
        ? '<p class="box" style="color:var(--mu);line-height:1.7">' +
          E(mission.transcript) +
          "</p>"
        : "") +

      '<a class="btn gh" href="https://www.youtube.com/watch?v=' +
      E(mission.video) +
      '" target="_blank" rel="noopener noreferrer">Abrir en YouTube ↗</a>';

  }

  /* ---------- SISTEMA DE PISTAS ---------- */

  if (S.bt === "hints") {

    bc =
      '<p style="color:var(--mu)">Pistas progresivas: revela solo lo que necesites.</p>' +

      mission.hints
        .slice(0, S.hint)
        .map(function (h, i) {

          return (
            '<p class="box"><b style="color:var(--cy)">Pista ' +
            (i + 1) +
            ":</b> " +
            E(h) +
            "</p>"
          );

        })
        .join("") +

      (S.hint < mission.hints.length

        ? '<button class="btn am" data-a="hint">Ver pista ' +
          (S.hint + 1) +
          " de " +
          mission.hints.length +
          "</button>"

        : "");

  }

  /* ---------- GLOSARIO DEL SECTOR ---------- */

  if (S.bt === "gl") {

    bc = mission.glossary
      .map(function (g) {

        return (
          '<div class="box"><span class="t">' +
          E(g[0]) +
          '</span><p style="color:var(--mu)">' +
          E(g[1]) +
          "</p></div>"
        );

      })
      .join("");

  }

  /* ---------- RESULTADOS DEL EJERCICIO ---------- */

  var result = ok

    ? '<p class="box ok" role="status">' +
      E(mission.success) +
      " +50 XP</p><button class=\"btn\" data-a=\"tab\" data-v=\"path\">Volver al mapa</button>"

    : er

      ? '<p class="box er" role="alert">La respuesta "' +
        E(s) +
        '" no es correcta todavía. Revisa las pistas e inténtalo de nuevo.</p><button class="btn am" data-a="retry">Intentar de nuevo</button>'

      : '<button class="btn" data-a="check"' +
        (s ? "" : " disabled") +
        ">Comprobar respuesta</button>";

  var options = mission.options
    .map(function (o) {

      return (
        '<button class="opt" data-a="opt" data-v="' +
        E(o) +
        '" aria-pressed="' +
        (s === o) +
        '">' +
        E(o) +
        "</button>"
      );

    })
    .join("");

  return (

    '<div class="w col mission-view">' +

    '<div class="row mission-heading" style="justify-content:space-between">' +

    '<div><span class="pill pp">' +
    E(mission.sector) +
    "</span><h1 style=\"font-size:1.6rem;margin-top:8px\">" +
    E(mission.title) +
    '</h1><p style="color:var(--mu)">Explora el contenido, resuelve el reto y avanza en tu ruta.</p></div>' +

    '<button class="btn gh" data-a="tab" data-v="path">← Volver al mapa</button>' +

    "</div>" +

    '<div class="card"><div class="row" style="justify-content:space-between"><b>Estabilidad del núcleo</b><b style="color:' +
    col +
    '">' +
    S.stab +
    '%</b></div><div class="meter" style="margin-top:8px"><i style="width:' +
    S.stab +
    "%;background:" +
    col +
    ";box-shadow:0 0 12px " +
    col +
    '"></i></div><p style="margin-top:8px;color:' +
    (S.stab < 100 ? "var(--am)" : "var(--em)") +
    '">' +
    (S.stab < 100 ? "🖥️ Sistema en proceso" : "✅ Sistema estabilizado") +
    "</p></div>" +

    '<div class="card col"><div class="row" style="justify-content:space-between"><b style="color:var(--cy)">RETO DEL SECTOR</b><span class="pill pc">Módulo ' +
    mission.id +
    " / 4</span></div>" +

    bot(mission.prompt) +

    '<pre class="code mono">' +
    E(mission.code) +
    "</pre>" +

    '<p style="color:var(--mu)">Selecciona la respuesta correcta para completar el módulo:</p>' +

    '<div class="opts mono" role="group" aria-label="Opciones de respuesta">' +
    options +
    "</div>" +

    result +

    "</div>" +

    '<div class="card"><div class="tabs">' +

    bt
      .map(function (t) {
        return (
          '<button data-a="bt" data-v="' +
          t[0] +
          '" aria-pressed="' +
          (S.bt === t[0]) +
          '">' +
          t[1] +
          "</button>"
        );
      })
      .join("") +

    '</div><div class="col" style="gap:10px">' +
    bc +
    "</div></div></div>"

  );
}
/* =========================================
   GLOSARIO
   ========================================= */

function glList() {

  var l = TERMS.filter(function (t) {

    return (
      (S.tag === "Todas" || t[1] === S.tag) &&
      (t[0] + t[2]).toLowerCase().indexOf(S.q) > -1
    );

  });

  return l.length

    ? l
        .map(function (t) {

          return (
            '<article class="card">' +

            '<span class="pill pp">' +
            E(t[1]) +
            "</span>" +

            '<h3 class="t" style="margin-top:6px">' +
            E(t[0]) +
            "</h3>" +

            '<p style="color:var(--mu)">' +
            E(t[2]) +
            "</p>" +

            "<pre>" +
            E(t[3]) +
            "</pre>" +

            "</article>"
          );

        })
        .join("")

    : '<p style="color:var(--mu)">Sin resultados. Borra el texto o elige otro tema.</p>';

}

function vGloss() {

  return (

    '<div class="w col">' +

    '<h1 style="font-size:1.6rem">Glosario</h1>' +

    '<input type="search" id="q" value="' +
    E(S.q) +
    '" placeholder="Buscar término, por ejemplo cout" aria-label="Buscar en el glosario">' +

    '<div class="row">' +

    TAGS.map(function (t) {

      return (

        '<button class="chip" data-a="tag" data-v="' +
        t +
        '" aria-pressed="' +
        (S.tag === t) +
        '">' +

        t +

        "</button>"

      );

    }).join("") +

    '</div><div class="grid3" id="gl">' +

    glList() +

    "</div></div>"

  );

}

/* =========================================
   PERFIL DEL ESTUDIANTE E INSIGNIAS
   ========================================= */

function vProfile() {

  var sk = SKINS.filter(function (s) {
    return s[0] === S.skin;
  })[0];

  // Obtener las 8 insignias actualizadas
  var badges = getBadges();

  // Calcular insignias obtenidas
  var earnedCount = badges.filter(function (b) {
    return b.earned;
  }).length;

  // Generar las tarjetas de insignias
  var badgeCards = badges.map(function (b) {

    var earned = b.earned;

    var status = earned
      ? "Obtenida"
      : b.progress !== null
        ? b.progress + "%"
        : "Bloqueada";

    var description = "";

    if (!earned) {

      if (b.name === "Cazador de Bugs") {
        description = "Detecta y corrige errores de programación.";
      }

      else if (b.name === "Racha de 7 días") {
        description = "Mantén tu constancia durante una semana.";
      }

      else if (b.name === "Arquitecto de Variables") {
        description = "Completa el Sector 2: Matriz de Datos.";
      }

      else if (b.name === "Guardián Derrotado") {
        description = "Completa el Sector 3: Boss Level.";
      }

      else if (b.name === "Domador de Bucles") {
        description = "Completa el Sector 4: Ciclos y repetición.";
      }

      else if (b.name === "Leyenda CodeVerse") {
        description = "Completa los cuatro sectores de CodeVerse.";
      }

    }

    return (

      '<div class="box badge-item ' +
      (earned ? "badge-earned" : "badge-locked") +
      '">' +

        '<div class="row badge-row" style="justify-content:space-between">' +

          '<span class="badge-name" style="color:' +
          (earned ? "var(--am)" : "var(--mu)") +
          '">' +

            (earned ? b.emoji : "🔒") +
            " " +
            E(b.name) +

          '</span>' +

          '<span class="pill ' +
          (earned ? "pa" : "pc") +
          '">' +

            status +

          '</span>' +

        '</div>' +

        // Descripción de las insignias pendientes
        (
          !earned && description
            ? '<p class="badge-requirement">' +
              E(description) +
              '</p>'
            : ""
        ) +

        // Barra de progreso cuando corresponda
        (
          !earned && b.progress !== null

            ? '<div class="meter badge-meter">' +
                '<i style="width:' +
                b.progress +
                '%;background:var(--cy)"></i>' +
              '</div>'

            : ""
        ) +

      '</div>'

    );

  }).join("");

  return (

    '<div class="w col">' +

      '<h1 style="font-size:1.6rem">Perfil</h1>' +

      /* ---------- AVATAR ---------- */

      '<div class="card neon-p">' +

        '<div class="big" aria-hidden="true">' +

          sk[2] +

          (S.accs.indexOf("pet") > -1
            ? '<span style="font-size:2rem">🐱</span>'
            : "") +

        '</div>' +

        '<p style="text-align:center;font-weight:700;color:var(--em)">' +

          sk[1] +

          (S.accs.indexOf("aura") > -1 ? " ✨" : "") +

          (S.accs.indexOf("helmet") > -1 ? " ⛑️" : "") +

        '</p>' +

      '</div>' +

      /* ---------- APARIENCIA ---------- */

      '<div class="card col">' +

        '<b>Apariencia</b>' +

        '<div class="grid3" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))">' +

          SKINS.map(function (s) {

            return (

              '<button class="sk" data-a="skin" data-v="' +
              s[0] +
              '" aria-pressed="' +
              (S.skin === s[0]) +
              '">' +

                '<span>' +
                s[2] +
                '</span>' +

                s[1] +

              '</button>'

            );

          }).join("") +

        '</div>' +

        '<b>Accesorios</b>' +

        '<div class="grid3" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))">' +

          ACCS.map(function (s) {

            return (

              '<button class="sk" data-a="acc" data-v="' +
              s[0] +
              '" aria-pressed="' +
              (S.accs.indexOf(s[0]) > -1) +
              '">' +

                '<span>' +
                s[2] +
                '</span>' +

                s[1] +

              '</button>'

            );

          }).join("") +

        '</div>' +

      '</div>' +

      /* ---------- VITRINA DE INSIGNIAS ---------- */

      '<div class="card col badge-collection">' +

        '<div class="row badge-heading" style="justify-content:space-between">' +

          '<b>🏆 Vitrina de insignias</b>' +

          '<span class="pill pc">' +
            earnedCount +
            ' / ' +
            badges.length +
            ' obtenidas' +
          '</span>' +

        '</div>' +

        '<p class="badge-intro">' +
          'Desbloquea reconocimientos completando tus desafíos y sectores de aprendizaje.' +
        '</p>' +

        '<div class="badge-list">' +

          badgeCards +

        '</div>' +

      '</div>' +

    '</div>'

  );

}


/* =========================================
   PANEL SUPERVISOR / COASE
   ========================================= */

function vSup() {

  var c = {
    g: 0,
    y: 0,
    r: 0
  };

  STU.forEach(function (s) {
    c[s[2]]++;
  });

  return (

    '<div class="w col">' +

    '<div class="row">' +

    '<span style="font-size:2rem">🛡️</span>' +

    '<div>' +

    '<h1 style="font-size:1.5rem">Panel Supervisor / COASE</h1>' +

    '<p style="color:var(--mu)">Seguimiento de estudiantes de Ingeniería en Multimedia</p>' +

    "</div></div>" +

    '<div class="grid3" style="grid-template-columns:repeat(3,1fr)">' +

    ["g", "y", "r"]
      .map(function (k) {

        return (

          '<div class="card" style="border-color:var(--' +
          SM[k][1] +
          ')">' +

          '<p style="font-size:1.6rem;font-weight:700;color:var(--' +
          SM[k][1] +
          ')">' +

          c[k] +

          '</p><p style="color:var(--mu);font-size:.9rem">' +

          SM[k][0] +

          "</p></div>"

        );

      })
      .join("") +

    "</div>" +

    STU.map(function (s) {

      var m = SM[s[2]];

      return (

        '<div class="card" style="border-color:var(--' +
        m[1] +
        ')">' +

        '<div class="row" style="justify-content:space-between">' +

        "<b>" +
        s[0] +
        "</b>" +

        '<span class="pill" style="color:var(--' +
        m[1] +
        ");border-color:var(--" +
        m[1] +
        ')">' +

        m[0] +

        "</span></div>" +

        '<p style="color:var(--mu);font-size:.9rem">' +
        s[1] +
        "</p>" +

        '<p style="margin-top:6px">' +
        s[3] +
        "</p>" +

        "</div>"

      );

    }).join("") +

    "</div>"

  );

}

/* =========================================
   PANTALLA DE MISIÓN DIARIA
   ========================================= */

function vDaily() {

  var mission =
    DAILY_MISSIONS[S.dailyActiveIndex];

  /* ---------- RESULTADO FINAL ---------- */

  if (S.dailyFin) {

    return (

      '<div class="w ov daily-screen">' +

        '<div class="card neon-p col daily-challenge" style="text-align:center">' +

          '<div class="daily-result-icon">🏆</div>' +

          '<p class="daily-overline">CODEVERSE · DAILY CHALLENGE</p>' +

          '<h1>Misión completada</h1>' +

          '<p style="color:var(--mu)">' +
            E(mission.title) +
          '</p>' +

          '<div class="daily-score">' +
            S.dailyScore +
            ' / ' +
            mission.questions.length +
          '</div>' +

          '<p style="color:var(--mu)">Respuestas correctas</p>' +

          '<div class="meter">' +
            '<i style="width:' +
              (S.dailyScore / mission.questions.length * 100) +
              '%;background:var(--em)"></i>' +
          '</div>' +

          '<p class="box ok">' +
            '¡Buen trabajo, recluta! Has finalizado el desafío diario.' +
          '</p>' +

          '<button class="btn" data-a="daily-return">' +
            'Volver al mapa' +
          '</button>' +

        '</div>' +

      '</div>'

    );

  }

  /* ---------- PREGUNTA ACTUAL ---------- */

  var question =
    mission.questions[S.dailyStep];

  var percentage =
    ((S.dailyStep + 1) / mission.questions.length) * 100;

  var feedback = "";

  if (S.dailySelected !== null) {

    var correct =
      S.dailySelected === question.a;

    feedback =

      '<p class="box ' +
      (correct ? "ok" : "er") +
      '" role="status">' +

      (correct
        ? "✓ ¡Correcto! Has seleccionado la respuesta adecuada."
        : "✕ Esa respuesta no es correcta. Puedes cambiar tu selección antes de continuar.") +

      '</p>';

  }

  /* ---------- OPCIONES DE RESPUESTA ---------- */

  var options = question.o.map(function (option) {

    return (

      '<button class="opt daily-option" ' +

        'data-a="daily-select" ' +

        'data-v="' +
        E(option) +
        '" ' +

        'aria-pressed="' +
        (S.dailySelected === option) +
        '">' +

        E(option) +

      '</button>'

    );

  }).join("");

  /* ---------- INTERFAZ DEL RETO ---------- */

  return (

    '<div class="w ov daily-screen">' +

      '<div class="card neon-p col daily-challenge">' +

        '<div class="daily-header">' +

          '<div>' +

            '<p class="daily-overline">CODEVERSE · MISIÓN DIARIA</p>' +

            '<h2>' +
              E(mission.title) +
            '</h2>' +

          '</div>' +

          '<button class="btn gh" data-a="daily-close">' +
            'Cerrar' +
          '</button>' +

        '</div>' +

        '<div class="daily-question-progress">' +

          '<b>Pregunta ' +
            (S.dailyStep + 1) +
            ' de ' +
            mission.questions.length +
          '</b>' +

          '<span>' +
            Math.round(percentage) +
            '%' +
          '</span>' +

        '</div>' +

        '<div class="meter">' +
          '<i style="width:' +
            percentage +
            '%;background:var(--pu)"></i>' +
        '</div>' +

        bot(question.p) +

        (question.c

          ? '<pre class="code daily-code">' +
              E(question.c) +
            '</pre>'

          : "") +

        '<div class="daily-answers">' +
          options +
        '</div>' +

        feedback +

        '<button class="btn pu daily-next-button" ' +
          'data-a="daily-question-next" ' +
          (S.dailySelected === null ? "disabled" : "") +
        '>' +

          (S.dailyStep === mission.questions.length - 1
            ? "Completar misión"
            : "Siguiente pregunta") +

        '</button>' +

      '</div>' +

    '</div>'

  );

}

/* =========================================
   DIAGNÓSTICO INICIAL
   ========================================= */

function vDiag() {

  if (S.dfin) {

    var n = S.dscore,

      msg =
        n === 3
          ? "Dominas la base. Empiezas en el sector 2."
          : n === 2
            ? "Buen punto de partida. Repasarás un par de conceptos."
            : "Empezarás desde los fundamentos, con pistas extra.";

    return (

      '<div class="w ov"><div class="card neon-p col" style="text-align:center">' +

      '<div style="font-size:3rem">🏁</div>' +

      "<h1>Escaneo completo: " +
      n +
      " de 3</h1>" +

      "<p>" +
      msg +
      "</p>" +

      '<p class="row" style="justify-content:center">' +
      '<span class="pill pc">+100 XP</span>' +
      '<span class="pill pa">🎁 Cofre raro</span>' +
      '</p>' +

      '<button class="btn" data-a="dclose">Volver al mapa</button>' +

      "</div></div>"

    );

  }

  var q = DQ[S.ds];

  return (

    '<div class="w ov"><div class="card neon-p col">' +

    '<div class="row" style="justify-content:space-between">' +

    "<b>Pregunta " +
    (S.ds + 1) +
    " de 3</b>" +

    '<button class="btn gh" data-a="dclose">Cerrar</button>' +

    "</div>" +

    '<div class="meter"><i style="width:' +
    ((S.ds + 1) / 3) * 100 +
    '%;background:var(--pu)"></i></div>' +

    bot(q.p) +

    (q.c
      ? '<pre class="code" style="color:var(--tx)">' + E(q.c) + "</pre>"
      : "") +

    '<div class="col" style="gap:10px">' +

    q.o
      .map(function (o) {

        return (

          '<button class="opt" style="text-align:left;padding:12px 16px" data-a="dsel" data-v="' +
          E(o) +
          '" aria-pressed="' +
          (S.dsel === o) +
          '">' +

          E(o) +

          "</button>"

        );

      })
      .join("") +

    '</div><button class="btn pu" data-a="dnext"' +

    (S.dsel ? "" : " disabled") +

    ">" +

    (S.ds === 2 ? "Ver resultado" : "Siguiente") +

    "</button></div></div>"

  );

}

/* =========================================
   RENDERIZADO GENERAL
   ========================================= */

function render() {

  // Mostrar misión diaria
  if (S.dailyOpen) {
    A.innerHTML = vDaily();
    return;
  }

  // Mostrar diagnóstico
  if (S.diag) {
    A.innerHTML = vDiag();
    return;
  }

  // Navegación entre secciones
  var v = {
    path: vPath,
    mission: vMission,
    glossary: vGloss,
    profile: vProfile,
    supervisor: vSup,
  }[S.tab]();

  A.innerHTML = head() + "<main>" + v + "</main>" + nav();

}

/* =========================================
   REINICIAR MISIÓN PRINCIPAL
   ========================================= */

function resetMission() {

  S.sel = null;
  S.res = null;
  S.stab = 65;
  S.bt = "holovid";
  S.tr = false;
  S.hint = 0;

}

/* =========================================
   EVENTOS PRINCIPALES
   ========================================= */

A.addEventListener("click", function (e) {

  var el = e.target.closest("[data-a]");

  if (!el || el.disabled) return;

  var a = el.dataset.a,
    v = el.dataset.v;

  /* ---------- NAVEGACIÓN ---------- */

  if (a === "tab") {

    if (S.tab === "mission" && v !== "mission") {
      resetMission();
    }

    S.tab = v;

    window.scrollTo(0, 0);

  } else if (a === "sector") {

    var nextSector = Number(v);

    if (S.sector !== nextSector) {
      resetMission();
    }

    S.sector = nextSector;
    S.tab = "mission";
    S.diag = false;

    window.scrollTo(0, 0);

  /* ---------- MISIÓN PRINCIPAL ---------- */

  } else if (a === "opt") {

    S.sel = v;

  } else if (a === "check") {

    var currentMission = SECTORS.filter(function (sector) {
      return sector.id === S.sector;
    })[0];

    if (
      currentMission &&
      S.sel === currentMission.answer
    ) {

      S.res = "success";
      S.stab = 100;

      if (S.finished.indexOf(S.sector) === -1) {
        S.finished.push(S.sector);
      }

    } else {

      S.res = "error";

    }

  } else if (a === "retry") {

    S.res = null;

  } else if (a === "bt") {

    S.bt = v;

  } else if (a === "tr") {

    S.tr = !S.tr;

  } else if (a === "hint") {

    S.hint++;

  /* ---------- GLOSARIO ---------- */

  } else if (a === "tag") {

    S.tag = v;

  /* ---------- PERFIL ---------- */

  } else if (a === "skin") {

    S.skin = v;

  } else if (a === "acc") {

    S.accs =
      S.accs.indexOf(v) > -1
        ? S.accs.filter(function (x) {
            return x !== v;
          })
        : S.accs.concat(v);

  /* ---------- DIAGNÓSTICO ---------- */

  } else if (a === "diag") {

    S.diag = true;
    S.ds = 0;
    S.dsel = null;
    S.dscore = 0;
    S.dfin = false;

  } else if (a === "dclose") {

    S.diag = false;

  } else if (a === "dsel") {

    S.dsel = v;

  } else if (a === "dnext") {

    if (S.dsel === DQ[S.ds].a) {
      S.dscore++;
    }

    if (S.ds === 2) {

      S.dfin = true;

    } else {

      S.ds++;
      S.dsel = null;

    }

  /* =====================================
     MISIONES DIARIAS
     ===================================== */

  } else if (a === "daily-open") {

    // Abrir la misión que está mostrando el carrusel

    S.dailyActiveIndex = S.dailyIndex;

    S.dailyStep = 0;
    S.dailySelected = null;
    S.dailyScore = 0;
    S.dailyFin = false;
    S.dailyOpen = true;

    S.diag = false;

    window.scrollTo(0, 0);

  } else if (
    a === "daily-close" ||
    a === "daily-return"
  ) {

    // Volver al mapa

    S.dailyOpen = false;
    S.dailyFin = false;
    S.dailyStep = 0;
    S.dailySelected = null;
    S.dailyScore = 0;

    window.scrollTo(0, 0);

  } else if (a === "daily-select") {

    // Seleccionar respuesta

    S.dailySelected = v;

  } else if (a === "daily-question-next") {

    // Validar respuesta antes de avanzar

    if (S.dailySelected === null) return;

    var activeDaily =
      DAILY_MISSIONS[S.dailyActiveIndex];

    var currentQuestion =
      activeDaily.questions[S.dailyStep];

    if (S.dailySelected === currentQuestion.a) {
      S.dailyScore++;
    }

    // Avanzar a la siguiente pregunta

    if (
      S.dailyStep + 1 <
      activeDaily.questions.length
    ) {

      S.dailyStep++;
      S.dailySelected = null;

    } else {

      // Finalizar misión

      S.dailyFin = true;

      if (
        S.dailyCompleted.indexOf(activeDaily.id) === -1
      ) {

        S.dailyCompleted.push(activeDaily.id);

      }

    }

  } else if (a === "daily-prev") {

    // Misión anterior

    S.dailyIndex =
      (S.dailyIndex - 1 + DAILY_MISSIONS.length) %
      DAILY_MISSIONS.length;

  } else if (a === "daily-next-preview") {

    // Siguiente misión

    S.dailyIndex =
      (S.dailyIndex + 1) %
      DAILY_MISSIONS.length;

  }

  // Actualizar interfaz
  render();

});

/* =========================================
   BUSCADOR DEL GLOSARIO
   ========================================= */

A.addEventListener("input", function (e) {

  if (e.target.id === "q") {

    S.q = e.target.value.toLowerCase().trim();

    var glossaryContainer =
      document.getElementById("gl");

    if (glossaryContainer) {
      glossaryContainer.innerHTML = glList();
    }

  }

});

/* =========================================
   INICIO DE CODEVERSE
   ========================================= */

render();

/* =========================================
   CARRUSEL AUTOMÁTICO DE MISIONES
   ========================================= */

// Pausar cuando el cursor entra en la tarjeta

A.addEventListener("pointerover", function (e) {

  if (e.target.closest(".daily-widget")) {
    S.dailyPaused = true;
  }

});

// Reanudar cuando el cursor sale de la tarjeta

A.addEventListener("pointerout", function (e) {

  var widget = e.target.closest(".daily-widget");

  if (
    widget &&
    !widget.contains(e.relatedTarget)
  ) {

    S.dailyPaused = false;

  }

});

// Pausar cuando se navega con teclado

A.addEventListener("focusin", function (e) {

  if (e.target.closest(".daily-widget")) {
    S.dailyPaused = true;
  }

});

// Reanudar cuando se pierde el foco de la tarjeta

A.addEventListener("focusout", function (e) {

  var widget = e.target.closest(".daily-widget");

  if (
    widget &&
    !widget.contains(e.relatedTarget)
  ) {

    S.dailyPaused = false;

  }

});

// Rotación automática cada 30 segundos

window.setInterval(function () {

  if (
    S.tab !== "path" ||
    S.diag ||
    S.dailyOpen ||
    S.dailyPaused
  ) {

    return;

  }

  S.dailyIndex =
    (S.dailyIndex + 1) % DAILY_MISSIONS.length;

  render();

}, 30000);