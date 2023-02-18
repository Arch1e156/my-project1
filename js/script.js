/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
   console.log('Просмотрено довольно мало фильмов'); 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


// for (let i = 0; i < 2; ++i){

//     let lastFilmAnswer = prompt("Один из последних просмотренных фильмов?", "");
//     let lastFilmScore = prompt("На сколько оцените его?");
//     if (lastFilmAnswer == '' || lastFilmScore == '' || lastFilmAnswer == null || lastFilmScore == null || lastFilmAnswer.length > 50 || lastFilmScore.length > 50) {
//         console.log('Error');
//         i--;
//     } else {
//         console.log('Good');
//         personalMovieDB.movies[lastFilmAnswer] = lastFilmScore;
//     }
    
// }

let n = 0;

// while (n < 2) {
//     let lastFilmAnswer = prompt("Один из последних просмотренных фильмов?", "");
//     let lastFilmScore = prompt("На сколько оцените его?");
//     if (lastFilmAnswer == '' || lastFilmScore == '' || lastFilmAnswer == null || lastFilmScore == null || lastFilmAnswer.length > 50 || lastFilmScore.length > 50) {
//         console.log('Error');
//     } else {
//         console.log('Good');
//         personalMovieDB.movies[lastFilmAnswer] = lastFilmScore;
//         n++;
//     }
// }

do {
    let lastFilmAnswer = prompt("Один из последних просмотренных фильмов?", "");
    let lastFilmScore = prompt("На сколько оцените его?");
    if (lastFilmAnswer == '' || lastFilmScore == '' || lastFilmAnswer == null || lastFilmScore == null || lastFilmAnswer.length > 50 || lastFilmScore.length > 50)
    {
        console.log('Error');
    } else {
        console.log('Good');
        personalMovieDB.movies[lastFilmAnswer] = lastFilmScore;
        n++;
    }
    console.log(n);
} while (n < 2);

console.log(personalMovieDB);

