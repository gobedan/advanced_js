Object.defineProperty([].__proto__, 'shuffle', {
    value: function() {
        return this.sort(function(a ,b) {
            return 0.5 - Math.random();
        });
    }
});