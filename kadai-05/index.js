const profile = {
    name:'akita',
    age:20,
    hobby:'video game',
    major:'psychology',
    gender:'Male'
}
const keys = Object.keys(profile)
console.log(keys)
for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index]
    const value = profile[key]
    console.log('私の' + key + 'は、' + profile[key] + 'です。')   
}