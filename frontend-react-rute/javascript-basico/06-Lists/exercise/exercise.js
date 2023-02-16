/* Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */



const products = ["rice", "chicken", "beans", "duck", "tacos"];

products.push("girasol oil");

products.pop();

console.log(products);

// ----------------------------------- //

const movies = [
  {
    title: "Doctor Strange",
    director: "Scott Derrickson",
    date: {
      day: 13,
      month: 10,
      year: 2016,
    }
  },

  {
    title: "Aquaman",
    director: "James Wan",
    date: {
      day: 21,
      month: 12,
      year: 2018,
    }
  },

  {
    title: "Avengers Endgame",
    director: "Anthony Russo, Joe Russo",
    date: {
      day: 26,
      month: 4,
      year: 2019,
    }
  },
];

const updatedMovies = movies.filter((movie) => {
  if (movie.date.day > 1 && movie.date.month > 1 && movie.date.year > 2010) {
    return movie;
  }
});

console.log(updatedMovies);

const directors = movies.map(movie => movie.director);

console.log(directors);

const titles = movies.map(movie => movie.title);

console.log(titles);


const directors_titles = directors.concat(titles);

console.log(directors_titles);

const titles_directors = [...directors, ...titles];

console.log(titles_directors);
