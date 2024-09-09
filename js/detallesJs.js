const seriesContainer = document.getElementById("recomendaciones");
var contenido = "";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const series = todasSeries

  function obtenerElementosAleatorios(arr, cantidad) {
    // Verificar que la cantidad solicitada no sea mayor que el tamaño del arreglo
    if (cantidad > arr.length) {
      throw new Error("La cantidad solicitada excede la longitud del arreglo.");
    }
  
    // Crear un conjunto para almacenar los índices seleccionados aleatoriamente
    const indicesSeleccionados = new Set();
  
    // Seleccionar índices aleatorios sin repetición
    while (indicesSeleccionados.size < cantidad) {
      const indiceAleatorio = Math.floor(Math.random() * arr.length);
      indicesSeleccionados.add(indiceAleatorio);
    }
  
    // Construir un arreglo de elementos seleccionados utilizando los índices
    const elementosSeleccionados = Array.from(indicesSeleccionados).map(indice => arr[indice]);
  
    return elementosSeleccionados;
  }


  if (id !== null && id < series.recomendadas.length) {
    // Obtener la serie correspondiente
    const serieSeleccionada = series.recomendadas[id];

    document.getElementById("nom").innerHTML = serieSeleccionada.titulo;
    document.getElementById("temporada").innerHTML = serieSeleccionada.temporada;
    document.getElementById("pais").innerHTML = serieSeleccionada.pais;
    document.getElementById("plataforma").innerHTML = serieSeleccionada.plataforma;
    document.getElementById("sinopsis").innerHTML = serieSeleccionada.sinopsis;



  } else {
    document.getElementById("nom").innerHTML = "<p>Detalles no disponibles</p>";
  }








  const seriesAleatorias = obtenerElementosAleatorios(series.recomendadas, 3)
  for (let i = 0; i < seriesAleatorias.length; i++) {
    contenido += `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${seriesAleatorias[i].titulo}</h5>
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
