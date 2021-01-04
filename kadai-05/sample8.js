const person ={name:'akita', age:28, 'hasCat': false,}


//組み込みのオブジェクトであるObjectを使う
//Objectには、keys(),values()のようなメソッドがある

const keys= Object.keys(person)
console.log(keys)
const values = Object.values(person)
console.log(values)

const prefectures = {
    '01':'北海道',
    '03':'青森県',
}
const prefCodes = Object.keys(prefectures) //['01','02',...]