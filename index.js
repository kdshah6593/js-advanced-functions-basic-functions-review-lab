// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    // add: function(num1, num2) {
    //     return num1 + num2;
    // },
    // subtract: function(num1, num2) {
    //     return num1 - num2;
    // },
    // multiply: function(num1, num2) {
    //     return num1 * num2;
    // },
    // divide: function(num1, num2) {
    //     return num1 / num2;
    // }
};
Calculator.add = function(num1, num2) {
    return num1 + num2;
}
Calculator.subtract = function(num1, num2) {
    return num1 - num2;
}

Calculator.multiply = function(num1, num2) {
    return num1 * num2;
}

Calculator.divide = function(num1, num2) {
    return num1 / num2;
}

let actionApplyer = function(starting, arrs){
    let x = starting;
    for (let i = 0; i < arrs.length; i++) {
        x = arrs[i](x);
    }
    return x;
}