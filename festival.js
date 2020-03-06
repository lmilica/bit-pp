"use strict";
(function () {
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
        }
    }
    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            var outputMovieString = "";
            return outputMovieString = this.title + ", " + this.length + "min" + ", " + this.genre.getData();
        }
    }
    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.totalNumberOfMovies = 0;
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNumberOfMovies++;
        }
        this.getData = function () {
            var outputData = "";
            outputData = this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getFullYear() + ", ";
            var durationOfAllMovies = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                durationOfAllMovies += this.listOfMovies[i].length;
            }
            outputData += durationOfAllMovies + "\n";

            for (var i = 0; i < this.listOfMovies.length; i++) {
                outputData += "\t" + this.listOfMovies[i].getData() + "\n";
            }
            return outputData;
        }
    }
    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.moviesInAllProgram = 0;
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
            this.moviesInAllProgram += program.totalNumberOfMovies;

        }
        this.getData = function () {
            var outputFestivalString = "";
            outputFestivalString = this.name + " has " + this.moviesInAllProgram + " movie titles \n\t ";
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                outputFestivalString += this.listOfPrograms[i].getData();
            }
            return outputFestivalString;

        }
    }
    var createMovie = function (title, genre, length) {
        var createGenre = new Genre(genre);
        var createdMovie = new Movie(title, createGenre, length);
        return createdMovie;
    }
    var createProgram = function (date) {
        var createdProgram = new Program(date)
        return createdProgram;
    }
    var createFestival = new Festival("Weekend festival");
    var program1 = createProgram(new Date("03/25/2017"));
    var program2 = createProgram(new Date("03/28/2017"));
    var movie1 = createMovie("Spider-Man: Homecoming", "action", 133);
    var movie2 = createMovie("War for the Planet of the Apes", "drama", 140);
    var movie3 = createMovie("The Dark Tower", "western", 95);
    var movie4 = createMovie("Deadpool", "comedy", 108);
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program2.addMovie(movie4);
    createFestival.addProgram(program1);
    createFestival.addProgram(program2);

    console.log(createFestival.getData());



})();