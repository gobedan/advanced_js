function createTextObjects(string) {
    result = [];
    string.trim().split(' ').forEach(function(word){
        const newObject = {
            word: word,
            length: word.length,
            isCapitalized: !!word[0].match(/[A-Z]/)
        }
        result.push(newObject);
    });
    return result;
}
