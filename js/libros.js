const librosContainer = document.getElementById("libroscontainer");

const libros = [
  {
    isbn:"4521369782012",
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    precio: 19.99,
    editorial: "Literatura Random House",
    cantidad: 8,
    descripción: "José Arcadio Buendía y Úrsula Iguarán se aman, pero son primos hermanos, y sobre ellos cae el presagio de que sus hijos podrían nacer con colas de cerdo. La maldición los atormenta día y noche sin descanso. Cuando se les aparece el fantasma de un hombre a quien José Arcadio Buendía asesinó, él y su mujer deciden huir de su propio destino. Se van a la selva y fundan el pueblo de Macondo, el mítico escenario donde se desarrollan las aventuras de esta saga familiar a lo largo de siete generaciones. García Márquez (1927 - 2014) es uno de los autores colombianos más reconocidos de todos los tiempos. La narración de Gustavo Bonfigli tiene con un acento neutro y un ritmo pausado, lo que causa el efecto de no querer abandonar nunca la escucha este audiolibro. En 1982, García Márquez recibió el Premio Nóbel de Literatura gracias a esta obra, una de las obras maestras más importantes de la literatura universal, según el juicio unánime de la crítica. Con este audiolibro, García Márquez inició no solo un género nuevo –el realismo mágico–, sino que afianzó el éxito del movimiento literario, el “boom” latinoamericano. La novela “Cien años de soledad” ha sido traducida a 35 idiomas y se han vendido más de 30 millones de ejemplares en todo el mundo.",
    dir: "libro1.html",
    img: "img/libro1.jpg"
  },
  {
    isbn:"5632122145863",
    titulo: "El señor de los Anillos",
    autor: "J.R.R Tolkien",
    precio: 21.00,
    editorial: "Tirant Lo Blanch",
    cantidad: 14,
    descripción: "Un héroe inesperado. Una misión peligrosa. La mayor aventura que jamás te hayan contado. La primera entrega de la trilogía de J. R. R. Tolkien El Señor de los Anillos En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal. «La obra de Tolkien, difundida en millones de ejemplares, traducida a docenas de lenguas, inspiradora de slogans pintados en las paredes de Nueva York y de Buenos Aires... una coherente mitología de una autenticidad universal creada en pleno siglo veinte.» —George Steiner, Le Monde, 1973.",
    dir: "libro2.html",
    img: "img/libro2.jpg"
  },
  {
    isbn:"1250565320058",
    titulo: "1984",
    autor: "George Orwell",
    precio: 12.00,
    editorial: "Austral Editorial",
    cantidad: 3,
    descripción: "1984, escrita hace más de 70 años, fue la escalofriante profecía de George Orwell sobre el futuro. Y aunque 1984 pasó, su visión distópica de un gobierno que hará cualquier cosa para controlar la narrativa es más actual que nunca... • Nominada como una de las novelas más queridas de Estados Unidos por The Great American Read de PBS • “El Partido les dijo que rechazaran la evidencia de sus ojos y oídos. Fue su orden final y más esencial”. Winston Smith sigue la línea del Partido y reescribe la historia para satisfacer las demandas del Ministerio de la Verdad. Con cada mentira que escribe, Winston llega a odiar al Partido que busca el poder por sí mismo y persigue a quienes se atreven a cometer crímenes de pensamiento. Pero cuando comienza a pensar por sí mismo, Winston no puede escapar del hecho de que el Gran Hermano siempre está mirando... 1984, una novela sorprendente e inquietante, crea un mundo imaginario que es completamente convincente de principio a fin. Nadie puede negar el dominio de la novela sobre la imaginación de generaciones enteras, o el poder de sus advertencias, un poder que parece crecer, no disminuir, con el paso del tiempo.",
    dir: "libro3.html",
    img: "img/libro3.avif"
  },
  {
    isbn:"4566998521012",
    titulo: "Damián un secreto oscuro y perverso",
    autor: "Alex Mirez",
    precio: 17.00,
    editorial: "Ediciones Déjà vu",
    cantidad: 42,
    descripción: "Padme ha vivido durante toda su vida en el pueblo de Asfil. Es una chica normal, buena. O eso parece. En el fondo tiene varios secretos, y uno de ellos se llama Damián. Es su peculiar vecino, que siempre le dio la impresión de estar ocultando algo y a quien ella trató de descifrar sin éxito. Un día, Damián desaparece y su vida sigue un curso corriente, pero meses después vuelve, y con él regresa la peligrosa curiosidad que Padme tanto intentó reprimir. Ella decide, finalmente, seguirlo. Es entonces cuando descubre eso que tanto Damián como Asfil, han intentado...¿esconder? ¿Y si te preparas para adentrarte en este perverso mundo? Aquí no existen la moral ni la cordura. Si decides dejar eso atrás, entonces ellos te recibirán...",
    dir: "libro4.html",
    img: "img/libro4.jpg"
  },
  {
    isbn:"1256356986587",
    titulo: "Harry Potter Y La Piedra Filosofal",
    autor: "J.k Rowling",
    precio: 30.00,
    editorial: "Salamandra S.A.",
    cantidad: 12,
    descripción: "Harry Potter y la piedra filosofal es el primer volumen de la ya clásica serie de novelas fantásticas de la autora británica J.K. Rowling. «Con las manos temblorosas, Harry le dio la vuelta al sobre y vio un sell o de lacre púrpura con un escudo de armas: un león, un águila, un tejón y una serpiente, que rodeaban una gran letra H.» Harry Potter nunca ha oído hablar de Hogwarts hasta que empiezan a caer cartas en el felpudo del número 4 de Privet Drive. Llevan la dirección escrita con tinta verde en un sobre de pergamino amarillento con un sello de lacre púrpura, y sus horripilantes tíos se apresuran a confiscarlas. Más tarde, el día que Harry cumple once años, Rubeus Hagrid, un hombre gigantesco cuyos ojos brillan como escarabajos negros, irrumpe con una noticia extraordinaria: Harry Potter es un mago, y le han concedido una plaza en el Colegio Hogwarts de Magia y Hechicería. ¡Está a punto de comenzar una aventura increíble!.",
    dir: "libro5.html",
    img: "img/libro5.jpg"
  },
  {
    isbn:"5852144458789",
    titulo: "Los Juegos del Hambre",
    autor: "Suzanne Collins",
    precio: 10.00,
    editorial: "Scholastic Press",
    cantidad: 42,
    descripción: "El mundo está observando. Ganar significa fama y riqueza. Perder significa una muerte segura. ¡Que empiecen los septuagésimo cuartos juegos del hambre! En una oscura versión del futuro próximo, doce chicos y doce chicas se ven obligados a participar en un reality show llamado Los Juegos del Hambre. Solo hay una regla: matar o morir. Cuando Katniss Everdeen, una joven de dieciséis años se presenta voluntaria para ocupar el lugar de su hermana en los juegos, lo entiende como una condena a muerte. Sin embargo, Katniss ya ha visto la muerte de cerca y la supervivencia forma parte de su naturaleza.",
    dir: "libro6.html",
    img: "img/libro6.jpg"
  }
];


libros.forEach(libro => {
  const divCol = document.createElement("div");
  divCol.className = "col-md-4";

  const divBookCard = document.createElement("div");
  divBookCard.className = "book-card";

  const img = document.createElement("img");
  img.src = libro.img;
  img.className = "custom-libro";
  img.alt = libro.titulo;

  const h2 = document.createElement("h2");
  h2.textContent = libro.titulo;

  const pAutor = document.createElement("p");
  pAutor.textContent = libro.autor;

  const pPrecio = document.createElement("p");
  pPrecio.textContent = `$${libro.precio.toFixed(2)}`;

  const a = document.createElement("a");
  a.href = libro.dir;

  const button = document.createElement("button");
  button.className = "btn btn-primary btn-block";
  button.textContent = "Ver Libro";

  a.appendChild(button);

  divBookCard.appendChild(img);
  divBookCard.appendChild(h2);
  divBookCard.appendChild(pAutor);
  divBookCard.appendChild(pPrecio);
  divBookCard.appendChild(a);

  divCol.appendChild(divBookCard);

  librosContainer.appendChild(divCol);
});
