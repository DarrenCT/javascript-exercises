const repeatString = function(inputStr, numberOfTimes) {
    let output = ``;
    if(numberOfTimes < 0){
        return `ERROR`
    };
    while(numberOfTimes>0){
        output += inputStr
        numberOfTimes--;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
