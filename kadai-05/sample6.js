const animals = ['dog','cat','rabbit']

console.log(animals.length)
animals.push('bird')  //pushで加える
console.log(animals)

const last = animals.pop() //popで取り出す
console.log(last)
console.log(animals)

const removed = animals.splice(1,2,'flog')
console.log(removed)
console.log(animals)