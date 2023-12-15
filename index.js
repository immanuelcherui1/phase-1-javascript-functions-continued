// code your solution here

function saturdayFun(satFun = "roller-skate"){
    return `This Saturday, I want to ${satFun}!`

}console.log(saturdayFun());

function mondayWork(satFun = "go to the office"){
    return `This Monday, I will ${satFun}.`

}console.log(mondayWork());

function wrapAdjective(wrapper = "*"){
    return function (adjective = "a hard worker"){
    return `You are ${wrapper}${adjective}${wrapper}!`}

}