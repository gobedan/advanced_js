 function MoneyBox() {
    let coins = 0; 
    this.addCoin = () => { 
        coins++;
        return null;
    };
    this.getAmount = () => coins; 
 }