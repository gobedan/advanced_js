function reverse(word){
    result = '';
    for(let i = 0; i < word.length; i++) {
        result += word.charAt(word.length - i - 1);
    }
    return result;
}