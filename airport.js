"use strict";

(function () {
    console.log("Hi");

    var createFlight = function (relation, date) {
        var flightAdd = new Flight(relation, date);
        return flightAdd;

    }
    var createPassenger = function (name, surname, number, category) {
        var createSeat = new Seat(number, category);
        var createPerson = new Person(name, surname);
        var createdPassenger = new Passenger(createPerson, createSeat);
        return createdPassenger;
    }
    var flightOne = createFlight("Belgrade-London", "10.12.2020.");
    var airport = new Airport();
    var flightTwo = createFlight("London-NewYork", "13.12.2020.");
    var firstPsg = createPassenger("Bruce", "Dickinson", 15, "b");
    var secondPsg = createPassenger("Billy", "Idol", 10, "b");
    var thirdPsg = createPassenger("Milica", "Lazic", 13, "b");
    var fourthPsg = createPassenger("Steve", "Harris", 11, "b");
    flightOne.addPassenger(firstPsg);
    flightOne.addPassenger(secondPsg);
    flightTwo.addPassenger(thirdPsg);
    flightTwo.addPassenger(fourthPsg);
    airport.addFlight(flightOne);
    airport.addFlight(flightTwo);
    console.log(airport.getData());



    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }
    function Seat(number, category) {
        this.number = number;
        this.category = category;
        this.getData = function () {
            return this.number + ", " + this.category;
        }
    }
    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        }
    }
    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassengers = [];
        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        }
        this.getData = function () {
            var outputData = "";
            outputData += this.date + ", " + this.relation + "\n";
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                outputData += this.listOfPassengers[i].getData() + "\n";
            }
            return outputData;
        }


    }
    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }
        this.getData = function () {
            var outputData = "";
            outputData += this.name + "\n";
            for (var i = 0; i < this.listOfFlights.length; i++) {
                outputData += this.listOfFlights[i].getData();
            }
            return outputData;
        }
    }


})();