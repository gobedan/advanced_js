const rectangle = {
    a_side: 10,
    b_side: 20,
    perimeter: function() {
        return 2 * (this.a_side + this.b_side); 
    },
    square: function() {
        return this.a_side * this.b_side;
    }
}

const square = Object.create(rectangle, {
    a_side: {
        value: 10,
        writable: true
    },
    b_side: {
        get: function() {
            return this.a_side;
        }
    }
});




