const fibonacci = function(num) {
    if(num < 0){
        return "OOPS"
    }
    else if(num == 0){
        return 0
    }
    let before = 1
    let after = 1
    for (let i = 0; i < num -2; i++) {
        let temp = after
        after += before
        before = temp 
        }
    return after

};

// Do not edit below this line
module.exports = fibonacci;
