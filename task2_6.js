function sortRandom(array){
    if (Math.random() > 0.5) return array.sort(function(a ,b) {
        return a - b;
    });
    else return array.sort(function(a, b) {
        return b - a; 
    });
}
