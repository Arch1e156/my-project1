/* Задание на урок:

1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres(personalMovieDB.genres);
showMyDB(personalMovieDB.privat, personalMovieDB);

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; ++i) {
    let lastFilmAnswer = prompt("Один из последних просмотренных фильмов?", "");
    let lastFilmScore = prompt("На сколько оцените его?");

    if (
      lastFilmAnswer == "" ||
      lastFilmScore == "" ||
      lastFilmAnswer == null ||
      lastFilmScore == null ||
      lastFilmAnswer.length > 50 ||
      lastFilmScore.length > 50
    ) {
      console.log("Error");
      i--;
    } else {
      console.log("Good");
      personalMovieDB.movies[lastFilmAnswer] = lastFilmScore;
    }
  }
}

function showMyDB(hidden, database) {
  if (!hidden) {
    console.log(database);
  } else {
    console.log("This Database is private!");
  }
}

function writeYourGenres(databaseGenresSource) {
  for (let i = 1; i <= 3; i++) {
    databaseGenresSource[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
