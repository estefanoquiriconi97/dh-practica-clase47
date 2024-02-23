window.onload = async () => {
  const urlBase = "http://localhost:3031/api/movies/";
  const movieId = new URLSearchParams(location.search).get("id");

  const getMovie = async () => {
    const response = await fetch(`${urlBase} + ${movieId}`);
    const data = await response.json();
    return data;
  };

  const data = await getMovie();
  const pelicula = data.data;

  const title = document.getElementById("title");
  const rating = document.getElementById("rating");
  const awards = document.getElementById("awards");
  const release_date = document.getElementById("release_date");
  const length = document.getElementById("length");

  title.value = pelicula.title;
  rating.value = pelicula.rating;
  awards.value = pelicula.awards;
  release_date.value = pelicula.release_date.split("T")[0];
  length.value = pelicula.length;

  //Botones
  const botonEditar = document.getElementById("botonEditar");
  const botonEliminar = document.getElementById("botonEliminar");
  const botonCrear = document.getElementById("botonCrear");

  console.log(botonEditar);

  botonEditar.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(urlBase + `update/${movieId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        rating: rating.value,
        awards: awards.value,
        release_date: release_date.value,
        length: length.value,
      }),
    });
  });
};
