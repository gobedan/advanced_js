function Calc() {
    this.history_entries = []; 
    
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b
    }

    this.add = this.operations["+"];
    this.substract = this.operations["-"];
    this.addOperation = (symbol, func) => {
        this.operations[symbol] = func;
    }

    this.operation = expression => {
        let operands = [+expression.trim().split(' ')[0], +expression.trim().split(' ')[2]];
        let operation = expression.trim().split(' ')[1]; 
        this.history_entries.push('{operation: ' + operation + ', operands: ' + operands + '}');
        
        return this.operations[operation](operands[0], operands[1]);
    }

    this.history = () => console.log(this.history_entries);
    this.clearHistory = () => this.history_entries = []; 
}

