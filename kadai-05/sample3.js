const person ={name:'akita', age:28, 'hasCat': false,}

console.log(person.age)
person.age=30 //オブジェクトのプロパティに代入することができる
console.log(person.age)
person['age']=33 //これでもいける
console.log(person.age)