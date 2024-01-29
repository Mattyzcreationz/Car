//Part One 
/*Creatre a class for vehicle. Each vehicle instance should have the following properties */

//Make
//Model
//Year


class CarDetails{
    constructor(Make, Model, Year){
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
    }

   honk(){
    return "Beep.";
   }

   toString(){
    return `"This vehilce is a ${this.Make} ${this.Model} from ${this.Year}."`;
   }
}

class Car extends CarDetails{
    constructor(Make, Model, Year){
        super(Make, Model, Year);
        this.numWheels = 4;
    }
}

class Motorcylce{
    constructor(Make, Model, Year){
        this.Make = Make;
        this.Model = Model;
        this.Year =  Year;
    }
    honk(){
        return "Beep."
    }
    revEngine(){
        return "VROOM!!!"
    }
}
class Motorcylce extends CarDetails{
    constructor(Make, Model, Year){
        super(Make, Model, Year);
        this.numWheels = 2;
    }
}

class Garage{
    vehilce = [];
    capacity = this.capacity;
}

add(newVehicle){
    if (!(newVehicle instanceof CarDetails)) {
        return "Only vehicles are allowed in here!";
    }

    if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
    }

    this.vehicles.push(newVehicle);
    return "Vehicle added!";
}

/*Each vehicle instance should have access to a method called honk, which returns the string "Beep." */
let myFirstVehicle = new Car("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();

/*Each Vehilce instance should have a method called to String, which returns the string contaning the make, mode, and year */
let mySecondVehicle = new Car("Honda", "Monster truck", 1999);
mySecondVehicle.toString()


//Part Two
/*Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4. */
let myFirstCar = new Car("Honda", "Nighthawk", 2000);
myFirstCar.toString();
myFirstCar.honk();
myFirstCar.numWheels();

//Part Three
/*Create a class for a Motorcylce. 
This class should inherit from Vehicle and each motorcycle instance should have aproperty called 
numWheels which has value of 2. It should also have a revEngine Method which returns "VROOM!!!*/
let myFirstMotorcylce = new Bike("Honda", "NightHawk", 2000);
myFirstMotorcylce.toString();
myFirstMotorcylce.honk();
myFirstMotorcylce.numWheels;

let mySecondMotorcycle = new Bike("Yamaha", "R1", 2003);
mySecondMotorcycle.toString();
mySecondMotorcycle.honk();
mySecondMotorcycle.numWheels;

//Part 4

/*Vehicles store an array of vehicles
Capacity is number indicating how many vehicles will fit in the garage.
vehicles will always be empty you only need to proviuded the capatcity


The garage should aslo have an add method, which attempt sto add a vehicle to array of vehicles.

HowEver, if you try to add somethjing which is not a vehicle the garage should return sorry were full/*/


