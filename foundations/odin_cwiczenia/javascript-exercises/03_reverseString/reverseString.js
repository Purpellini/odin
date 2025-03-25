const reverseString = function(word) {
    let reversedString='';
    for(i=word.length-1;i>-1;i-- ){
        reversedString+=word[i]
    }
    return reversedString

};
reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;
