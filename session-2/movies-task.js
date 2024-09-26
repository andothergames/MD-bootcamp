const movies = new Set();
movies.add("movie 1");
movies.add("movie 2");
movies.add("movie 3");
movies.add("movie 4");
movies.add("movie 4");

console.log(movies);
console.log(movies.has("movie 3"));
console.log(movies.has("godzilla"));

const movieDetails = new Map();
movieDetails.set("M1", { year: 1990, director: "Some Director" });
movieDetails.set("M2", { year: 2000, director: "Another Director" });
movieDetails.set("M3", { year: 2010, director: "Cool Director" });
movieDetails.set("M4", { year: 2020, director: "Groovy Director" });

console.log(movieDetails.get("M4"));
console.log(movieDetails.has("M2"));
console.log(movieDetails.has("godzilla"));
