function Rectangle(a, b) {
    this.a_side = a;
    this.b_side = b;
    Object.defineProperty(this, 'perimeter', {
        get: function(){
            return 2 * (this.a_side + this.b_side);
        }
    });
    Object.defineProperty(this, 'square', {
        get: function(){
            return this.a_side * this.b_side;
        }
    });
};

function Square(a) {
    this.__proto__ = new Rectangle(a, a);
};




