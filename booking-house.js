"use strict";
(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }
    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
    }
    Person.prototype.getData = function () {
        return " " + this.name + "\t " + this.surname + "\t" + this.dateOfBirth
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    }
    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
    }
    Address.prototype.getData = function () {
        return " " + this.street + " " + this.number + ", " + this.postalCode + this.city + ", " + this.country;
    }
    function BettingPLace(address) {
        this.address = address;
        this.listOfPLayers = [];
    }
    function BettingHouse(competition, numberOfPLayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPLayers = numberOfPLayers;
    }
    var CONTINENTS = Object.freeze({
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTHAMERICA: "SA",
        NORTHAMERICA: "NA",
        AUSTRALIA: "AU"


    });





})();