const repeatString = function(string, num) {
    let string2='';
    for(let i=0;i<num;i++){
        string2+=string;
    }
    return string2
};
repeatString('hey',3)

// Do not edit below this line
module.exports = repeatString;
