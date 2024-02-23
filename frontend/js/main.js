window.onload = async () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  const response = await fetch("http://localhost:3031/api/movies");
  const peliculas = await response.json();

  let data = peliculas.data;

  data.forEach((movie) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const botonEditar = document.createElement('a');
    botonEditar.textContent = "Editar";
    botonEditar.href = "http://127.0.0.1:3000/formulario.html?id=" + movie.id;
    botonEditar.classList.add("edit-button");

    const h1 = document.createElement("h1");
    h1.textContent = movie.title;

    const p = document.createElement("p");
    p.textContent = `Rating: ${movie.rating}`;

    const duracion = document.createElement("p");
    duracion.textContent = `Duración: ${movie.length}`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
    if (movie.genre !== null) {
      const genero = document.createElement("p");
      genero.textContent = `Genero: ${movie.genre.name}`;
      card.appendChild(genero);
    }
    card.appendChild(duracion);
    card.appendChild(botonEditar);
  });
};
