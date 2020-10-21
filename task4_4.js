function Ship(color){
    this.color = color
};

function MotorBoat(horsepower, material, color){
    this.__proto__ = new Ship(color);
    this.horsepower = horsepower;
    this.material = material;
}

function Yacht(masts, sails_square, color){
    this.__proto__ = new Ship(color);
    this.masts = masts;
    this.sails_square = sails_square;
}

function Shipyard(boat_type){
    this.boat_type = boat_type;
    this.buildShip = () => {
        switch(this.boat_type){
            case 'MotorBoat':
                return new MotorBoat(100, 'wood', 'white');
            case 'Yacht':
                return new Yacht(1, 200, 'white');
            default:
                console.log('Error! This shipayard has incompatible boat type!');
        };
    };
    
    this.repairShip = ship => {
        if (this.isCorrectShipType(ship)) {
            console.log('Ship successfully repaired!');
        };
        return ship; 
    };

    this.repaintShip = (ship, color) => {
        if (this.isCorrectShipType(ship) && color) {
            ship.color = color;
            console.log('New color of ship is ' + color + '!');
        };
        return ship;
    };

    this.exchangeShip = ship => {
        if (this.isCorrectShipType(ship)) {
            Object.assign(ship, this.buildShip());
        };
        return ship;
    };

    this.isCorrectShipType = ship => {
        return ((ship.hasOwnProperty('horsepower') && this.boat_type == 'MotorBoat') ||
                (ship.hasOwnProperty('sails_square') && this.boat_type == 'Yacht'));
    }
}



