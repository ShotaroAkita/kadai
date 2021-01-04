const animals = ['dog','cat','rabbit','bird','fish','beetle']
for (let index = 0; index < animals.length; index= index+1){
    const animal = animals[index];
    console.log(animal)
}
for (const animal of animals){
    console.log(animal)
}