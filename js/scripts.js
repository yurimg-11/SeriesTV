const seriesContainer = document.getElementById("popularContainer");
var contenido = "";

const series = {
    recomendadas: [
      {
        titulo: "The Last of Us",
        temporada: "Temporada 2",
        pais: "EE. UU.",
        sinopsis: "Adaptación del videojuego sobre Joel y Ellie en un mundo postapocalíptico.",
        plataforma: "HBO Max",
        imagen: ""
      },
      {
        titulo: "The Mandalorian",
        temporada: "Temporada 4",
        pais: "EE. UU.",
        sinopsis: "Sigue las aventuras de Din Djarin y Grogu en el universo de Star Wars.",
        plataforma: "Disney+",
        imagen: ""
      },
      {
        titulo: "Heartstopper",
        temporada: "Temporada 2",
        pais: "Reino Unido",
        sinopsis: "Historia de amor entre Charlie y Nick explorando temas de identidad y aceptación.",
        plataforma: "Netflix",
        imagen: ""
      },
      {
        titulo: "1899",
        pais: "Alemania",
        sinopsis: "Pasajeros de un barco en 1899 enfrentan eventos misteriosos y sobrenaturales.",
        plataforma: "Netflix",
        imagen: ""
      },
      {
        titulo: "Slow Horses",
        temporada: "Temporada 3",
        pais: "Reino Unido",
        sinopsis: "Agentes del MI5 relegados a misiones peligrosas tras cometer errores en el pasado.",
        plataforma: "Apple TV+",
        imagen: ""
      },
      {
        titulo: "La Serpiente de Essex",
        pais: "Reino Unido",
        sinopsis: "Explora el mito de una serpiente mítica en la Inglaterra victoriana.",
        plataforma: "Apple TV+",
        imagen: ""
      },
      {
        titulo: "The Idol",
        pais: "EE. UU.",
        sinopsis: "Joven estrella del pop navega la fama, la adicción y relaciones tóxicas.",
        plataforma: "HBO Max",
        imagen: ""
      },
      {
        titulo: "Obi-Wan Kenobi",
        pais: "EE. UU.",
        sinopsis: "Regreso de Ewan McGregor como Obi-Wan Kenobi en una serie ambientada en el universo de Star Wars.",
        plataforma: "Disney+",
        imagen: ""
      },
      {
        titulo: "Willow",
        pais: "EE. UU.",
        sinopsis: "Secuela de la película de fantasía de 1988 que enfrenta críticas divididas.",
        plataforma: "Disney+",
        imagen: ""
      },
      {
        titulo: "She-Hulk: Attorney at Law",
        pais: "EE. UU.",
        sinopsis: "Comedia sobre una abogada que es también una superheroína.",
        plataforma: "Disney+",
        imagen: ""
      },
      {
        titulo: "The Peripheral",
        pais: "EE. UU.",
        sinopsis: "Adaptación de la novela de William Gibson con una narrativa compleja y ritmo lento.",
        plataforma: "Amazon Prime Video",
        imagen: ""
      },
      {
        titulo: "Paper Girls",
        pais: "EE. UU.",
        sinopsis: "Serie de ciencia ficción basada en cómics con críticas mixtas.",
        plataforma: "Amazon Prime Video",
        imagen: ""
      }
    ]
  };

  for (let i = 0; i < series.recomendadas.length; i++) {
    contenido += `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${series.recomendadas[i].titulo}</h5>
                                    <!-- Product reviews-->
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="detalles.html?id=${i}">Detalles</a></div>
                            </div>
                        </div>
                    </div>`;
  }

seriesContainer.innerHTML = contenido;
