// initdb.js
const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: 'Jugosa hamburguesa de queso',
    slug: 'jugosa-hamburguesa-de-queso',
    image: 'https://res.cloudinary.com/dvx1k0wi2/image/upload/v1722524847/comidas/jugosa-hamburguesa-de-queso.jpg',
    summary: 'Una hamburguesa que hace agua la boca con una carne de res jugosa y queso derretido, servida en un pan suave.',
    instructions: `
1. Preparar la hamburguesa:
Mezclar 200 g de carne picada con sal y pimienta. Dar forma de hamburguesa.

2. Cocinar la hamburguesa:
Calentar una sartén con un poco de aceite. Cocinar la hamburguesa durante 2-3 minutos por cada lado, hasta que se dore.

3. Montar la hamburguesa:
Tostar las mitades del pan de hamburguesa. Colocar lechuga y tomate en la mitad inferior. Añadir la hamburguesa cocida y cubrir con una rodaja de queso.

4. Servir:
Completar el montaje con el pan de arriba y servir caliente.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
    created_at: new Date().toISOString() // Valor de ejemplo para created_at
  },
  {
    title: 'Curry picante',
    slug: 'curry-picante',
    image: 'https://res.cloudinary.com/dvx1k0wi2/image/upload/v1722524960/comidas/curry-picante.jpg',
    summary: 'Un rico y picante curry, infundido con especias exóticas y leche de coco cremosa.',
    instructions: `
1. Picar las verduras:
Cortar las verduras de su elección en trozos pequeños.

2. Saltear las verduras:
En una sartén con aceite, saltear las verduras hasta que empiecen a ablandarse.

3. Añadir la pasta de curry:
Añadir 2 cucharadas de pasta de curry y cocinar durante un minuto más.

4. Cocinar a fuego lento con leche de coco:
Vierte 500 ml de leche de coco y deja que hierva a fuego lento. Deja cocinar durante unos 15 minutos.

5. Servir:
Disfrutar de este curry cremoso con arroz o pan.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
    created_at: new Date().toISOString() // Valor de ejemplo para created_at
  },
  {
    title: 'Albondigas caseras',
    slug: 'albondigas-caseras',
    image: 'https://res.cloudinary.com/dvx1k0wi2/image/upload/v1722525137/comidas/albondigas-caseras.jpg',
    summary: 'Albondigas tiernas rellenas de carne y sabrosos vegetales, cocidos al vapor a punto perfecto.',
    instructions: `
1. Prepara el relleno:
Mezcla la carne picada, las verduras desmenuzadas y las especias.

2. Rellena los dumplings:
Coloca una cucharada de relleno en el centro de cada envoltorio de dumpling. Humedece los bordes y dóblalos para sellar.

3. Cocina los dumplings al vapor:
Coloca los dumplings en una vaporera. Cocínalos al vapor durante unos 10 minutos.

4. Sirve:
Disfruta estos dumplings calientes, con la salsa para mojar que prefieras.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
    created_at: new Date().toISOString() // Valor de ejemplo para created_at
  },
  {
    title: 'Macarrones con queso clásicos',
    slug: 'macarrones-con-queso-clasicos',
    image: 'https://res.cloudinary.com/dvx1k0wi2/image/upload/v1722525264/comidas/macarrones-con-queso-clasicos.jpg',
    summary: "Macarrones crema y quesoso, un clásico reconfortante que siempre es un éxito entre los invitados.",
    instructions: `
1. Cocine los macarrones:
Hierva los macarrones según las instrucciones del paquete hasta que estén al dente.

2. Prepare la salsa de queso:
En una cacerola, derrita la mantequilla, agregue la harina y agregue la leche gradualmente, batiendo hasta que espese. Agregue el queso rallado hasta que se derrita.

3. Combine:
Mezcle la salsa de queso con los macarrones escurridos.

4. Hornee:
Transfiera a una fuente para horno, cubra con pan rallado y hornee hasta que se doren.

5. Sirva:
Sirva caliente, adornado con perejil si lo desea.
    `,
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
    created_at: new Date().toISOString() // Valor de ejemplo para created_at
  },
  {
    title: 'Pizza hecha en casa',
    slug: 'pizza-hecha-en-casa',
    image: 'https://res.cloudinary.com/dvx1k0wi2/image/upload/v1722525562/comidas/pizza-hecha-en-casa.jpg',
    summary: 'Pizza lanzada a mano con salsa de tomate agrio, ingredientes frescos y queso derretido.',
    instructions: `
1. Prepara la masa:
Amasar la masa de pizza y dejar que crezca hasta que doble su tamaño.

2. Dar forma y añadir los ingredientes:
Extender la masa, esparcir la salsa de tomate y añadir los ingredientes y el queso que más te gusten.

3. Hornear la pizza:
Hornear en un horno precalentado a 220 °C durante unos 15-20 minutos.

4. Servir:
Cortar en rebanadas calientes y disfrutar con una pizca de hojas de albahaca.
    `,
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
    created_at: new Date().toISOString() // Valor de ejemplo para created_at
  },
  {
    title: 'Escalope de Viena',
    slug: 'escalope-de-viena',
    image: 'https://res.cloudinary.com/dvx1k0wi2/image/upload/v1722525709/comidas/escalope-de-viena.jpg',
    summary: 'Filete de ternera empanado crujiente y dorado, un plato clásico austriaco.',
    instructions: `
1. Preparar la ternera:
Aplastar las chuletas de ternera hasta que tengan un grosor uniforme.

2. Rebozar la ternera:
Pasar cada chuleta en harina, pasarla por huevo batido y luego por pan rallado.

3. Freír los escalopes:
Calentar el aceite en una sartén y freír cada escalope hasta que se dore por ambos lados.

4. Servir:
Sirvir caliente con una rodaja de limón y una guarnición de ensalada de patatas o verduras.
 `,
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
    created_at: new Date().toISOString() // Valor de ejemplo para created_at
  },
  {
    title: 'Ensalada de tomate fresca',
    slug: 'ensalada-de-tomate-fresca',
    image: 'https://res.cloudinary.com/dvx1k0wi2/image/upload/v1722525826/comidas/ensalada-de-tomate-fresca.jpg',
    summary: 'Una ensalada ligera y refrescante con tomates maduros, albahaca fresca y una vinagreta agria.',
    instructions: `
1. Prepara los tomates:
Corta los tomates frescos en rodajas y colócalos en un plato.

2. Agrega las hierbas y los condimentos:
Espolvorea albahaca picada, sal y pimienta sobre los tomates.

3. Adereza la ensalada:
Rocía con aceite de oliva y vinagre balsámico.

4. Sirve:
Disfruta de esta ensalada simple y sabrosa como guarnición o comida ligera.
    `,
    creator: 'Sophia Green',
    creator_email: 'sophiagreen@example.com',
    created_at: new Date().toISOString() // Valor de ejemplo para created_at
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL,
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`).run();

async function initData() {
  try {
    const stmt = db.prepare(`
        INSERT INTO meals (
           slug,
           title,
           image,
           summary,
           instructions,
           creator,
           creator_email
        ) VALUES (
           @slug,
           @title,
           @image,
           @summary,
           @instructions,
           @creator,
           @creator_email
        )
     `);

    for (const meal of dummyMeals) {
      stmt.run(meal);
    }
    console.log('Data initialized successfully.');
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

initData();
