//関数は、関数型という値の一種
function theFunction(){
    console.log('Hello')
}

console.log(typeof theFunction)
const myFunction = theFunction

theFunction()
myFunction()

const myFunction2 = function(){
    console.log('hello2')
}
myFunction2()