function filterByLength(word_array, min_length, max_length){
    return word_array.filter(function(elem) {
        return elem.length >= min_length && elem.length <= max_length
    });
}
