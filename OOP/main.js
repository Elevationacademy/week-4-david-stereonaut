class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name){
        this.children.push(name)
    }
}

let cat = new Animal('Piposh', 4)
console.log(cat.name)
cat.giveBirth("Dolly")
console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿

class Human {
    constructor(name, age, isFriendly){
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

let h1 = new Human('Mitchell', 43, false)
console.log(h1)

class Vehicle {
    constructor(x, y, speed) {
        this.x = x
        this.y = y
        this.speed = speed
        this._fuel = 0
        Vehicle.carsSold++
    }

    getInfo(){
        console.log("Cars are great")
    }

    static getInfo() {
        console.log(`We've sold ${Vehicle.carsSold} vehicles.`)
    }

    static calculateMoney() {
        console.log(`Made ${Vehicle.carsSold * 30000} dollars`)
    }

    get fuel() {
        return this._fuel
    }

    set fuel(fuel) {
        if ( fuel < 0 || fuel > 150){
            return console.log("Fuel must be between 0 to 150")
        }
        this._fuel = fuel
    }
}
Vehicle.carsSold = 0

let car1 = new Vehicle(1, 3, 150)
let car2 = new Vehicle(3, 1, 120)
Vehicle.getInfo()
Vehicle.calculateMoney()