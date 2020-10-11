function cache() { 
    let last_number = 0;
    let last_power = 0;
    let last_result = 1; 

    return (number, power) => {
        if (number == last_number && power == last_power) {
            return {
                    value: last_result,
                    fromCache: true
            }
        }
        last_number = number;
        last_power = power;
        last_result = Math.pow(number, power); 
        return {
                value: last_result,
                fromCache:false
        }
    }
}