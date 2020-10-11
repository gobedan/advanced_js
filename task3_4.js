const ticketWindow = {
    cash: 0,
    sold_tickets: [],
    events: {},
    createEvent: function(title, price) {
        Object.defineProperty(this.events, title, { value: price });
    },

    buyTicket: function(title) {
        this.cash += this.events[title];
        let sold_ticket = {
            id: Math.floor((Math.random() * 1000000)),
            price: this.events[title]
        };

        this.sold_tickets.push(sold_ticket);

        return sold_ticket.id;
    },

    returnTicket: function(id) {
        let returned_ticket = this.sold_tickets.find( elem => {
            return elem.id == id;
        });

        this.cash -= returned_ticket.price;
        this.sold_tickets = this.sold_tickets.filter( elem => {
            elem != returned_ticket;
        });
    }
}
