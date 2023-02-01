export class Movie {

  constructor(id, title, director, year, img, urlImdb = '', sinopsis = '', isFavourite = false) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.img = img;
    this.urlImdb = urlImdb;
    this.sinopsis = sinopsis;
    this.isFavourite = isFavourite;
  }
}