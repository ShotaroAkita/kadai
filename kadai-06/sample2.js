//const jsonstring = '{"hello" : "world"}'
//const jsonobject = {"hello" : "world"}
//console.log(jsonstring)
//console.log(jsonobject)

const object = {
    species:"cat",
    name:"Tama"
}

const jsonstring = JSON.stringify(object)
console.log(jsonstring === '{"species":"cat","name":"Tama"}')

const parsed_object = JSON.parse(jsonstring)
console.log(parsed_object)
console.log(parsed_object.name)

const broken_jason = '{"species":"dog", "Name":"Pochi"}'
JSON.perse(broken_jason)