function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work="go to the office"){
    return `This Monday, I will ${work}.`
}

let wrapAdjective=function(abc="*"){
    return function (xyz="Special"){
            return `You are ${abc}${xyz}${abc}!`
        }
}