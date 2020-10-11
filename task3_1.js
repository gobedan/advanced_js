function MoneyBox() {
    Object.defineProperty(this, '_coins', {
        value: 0,
        configurable: true
    });
    // тут я ничего умнее не придумал, чтобы запретить доступ из вне, выглядит как анти-паттерн
    this.addCoin = () => {
        Object.defineProperty(this, '_coins', { writable: true });
        this._coins++;
        Object.defineProperty(this, '_coins', { writable: false });
        return null;
    };
    this.getAmount = () => this._coins;
}
