const sumAll = function(start, end) {
let result =0;
for(let i = start; i<=end;i++){
    result+=i;
    console.log(i)
}
return result;
console.log(result)
};
sumAll(1, 4)
// Do not edit below this line
module.exports = sumAll;
