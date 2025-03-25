const leapYears = function(YearNumber) {
    if(YearNumber%4==0 && (YearNumber%100!==0 || YearNumber%400==0)){
        return true
    }
    else{
        return false
    }

};
leapYears(2000)
leapYears(1985)
// Do not edit below this line
module.exports = leapYears;
