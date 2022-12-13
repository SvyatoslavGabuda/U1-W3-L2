/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log(
  "\n---------------------------------------Es1---------------------------------------\n"
);
const concatenante = function (str1, str2) {
  let srtconc =
    str1.charAt(0) +
    str1.charAt(1) +
    str2.charAt(str2.length - 3) +
    str2.charAt(str2.length - 2) +
    str2.charAt(str2.length - 1);
  let strconcUpp = srtconc.toUpperCase();
  return strconcUpp;
};
console.log(concatenante("CIAO", "buongiorno"));
console.log(concatenante("abdcefg", "qwerty"));
/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log(
  "\n---------------------------------------Es2---------------------------------------\n"
);
// const randomNumber = Math.floor(Math.random() * 101);
// console.log(randomNumber);
// console.log("----------------------------------");
// const randNumFun = function () {
//   return Math.floor(Math.random() * 101);
// };
// console.log(randNumFun());
// console.log("----------------------------------");
const randomArr = function (n) {
  const arrRandomNumber = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    arrRandomNumber.push(randomNumber);
  }
  return arrRandomNumber;
};
console.log("array di n numeri random " + randomArr(10));
console.log("array di n numeri random " + randomArr(25));
console.log("----------------------------------");
const randomArr10 = function () {
  const arrRandomNumber = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    arrRandomNumber.push(randomNumber);
  }
  return arrRandomNumber;
};
console.log("arry di 10 numeri random: " + randomArr10());
console.log("arry di 10 numeri random: " + randomArr10());
/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici 
  (suggerimento: il metodo filter può aiutare)
*/
console.log(
  "\n---------------------------------------Es3---------------------------------------\n"
);
const arrProvaNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 234, 23, 52];
console.log(arrProvaNumeri);
const arrNumeriPari = arrProvaNumeri.filter((numero) => numero % 2 === 0);
console.log(arrNumeriPari);

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log(
  "\n---------------------------------------Es4---------------------------------------\n"
);
const numeriFino10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const somma = function (arrnum) {
  let somman = 0;
  for (let i = 0; i < arrnum.length; i++) {
    somman += arrnum[i];
  }
  return somman;
};
console.log("somma numeri di un array dato: " + somma(numeriFino10));

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
console.log(
  "\n---------------------------------------Es5---------------------------------------\n"
);
const sommaReduce = numeriFino10.reduce((acc, cur) => acc + cur, 0);
console.log("somma con reduce: " + sommaReduce);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, 
  ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log(
  "\n---------------------------------------Es6---------------------------------------\n"
);
// const numeriFino10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const incremento = function (arr, n) {
  const arrIncrementato = arr.map((x) => x + n);
  return arrIncrementato;
};
console.log("valori array incrementati di n:  " + incremento(numeriFino10, 1));
console.log("valori array incrementati di n:  " + incremento(numeriFino10, 5));
/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, 
  ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log(
  "\n---------------------------------------Es8---------------------------------------\n"
);
const arrDiStringhe = ["Ciao", "a", "tutti", "Epicoders"];

const contaLunghezza = function (arr) {
  const risultato = [];
  for (let i = 0; i < arr.length; i++) {
    risultato.push(arr[i].length);
  }

  return risultato;
};
console.log(contaLunghezza(arrDiStringhe));
/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log(
  "\n---------------------------------------Es9---------------------------------------\n"
);
const arrNumeriDispariFino100 = function () {
  let arrNumDisp = [];
  let n = 1;
  for (let i = 0; i < 50; i++) {
    arrNumDisp.push(n);
    n += 2;
  }
  return arrNumDisp;
};
console.log(arrNumeriDispariFino100());
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log(
  "\n---------------------------------------Es10---------------------------------------\n"
);
for (let i = 0; i < movies.length; i++) {
  // console.log(Number(movies[i].Year));
}

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log(
  "\n---------------------------------------Es11---------------------------------------\n"
);
const numeroDiFilm = function (arr) {
  const lunghezzaarr = arr.length;
  return lunghezzaarr;
};
console.log("nel array film ci sono " + numeroDiFilm(movies) + " elementi");

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log(
  "\n---------------------------------------Es12---------------------------------------\n"
);
const prendiNomiFilm = function (arr) {
  let nomiFilm = [];
  for (let i = 0; i < movies.length; i++) {
    nomiFilm.push(movies[i].Title);
  }
  return nomiFilm;
};
console.log(prendiNomiFilm(movies));

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log(
  "\n---------------------------------------Es13---------------------------------------\n"
);
const filmDell2000 = function (arr) {
  let filmDopo2000 = [];
  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].Year) >= 2000) {
      filmDopo2000.push(movies[i].Title);
    }
  }
  return filmDopo2000;
};
console.log(filmDell2000(movies));

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log(
  "\n---------------------------------------Es14---------------------------------------\n"
);
const trovaFilm = function (arr, numImd) {
  let filmTrovato = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === numImd) {
      filmTrovato.push(movies[i]);
    }
  }
  return filmTrovato;
};
console.log(trovaFilm(movies, "tt0355702"));
/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log(
  "\n---------------------------------------Es15---------------------------------------\n"
);
const sommaAnni = function (arr) {
  let sAnni = 0;
  for (let i = 0; i < movies.length; i++) {
    sAnni += Number(movies[i].Year);
  }
  return sAnni;
};
console.log(sommaAnni(movies));
