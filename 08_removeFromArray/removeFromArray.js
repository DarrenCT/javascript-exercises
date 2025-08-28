function removeFromArray(inputArr, ...toBeRemoved) {
    let output = [];
    let match = false;
    for(let i = 0; i < inputArr.length; i++){
        for(let j = 0; j < toBeRemoved.length; j++){
            if(inputArr[i] === toBeRemoved[j]){
                match = true;
                break;
            }
        }
        if(!match){
            output.push(inputArr[i]);
        }
        match = false;
    }
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
