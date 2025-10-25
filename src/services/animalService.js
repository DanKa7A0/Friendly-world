import Animal from "../models/Animal.js";

export async function createAnimal(animalData, userData) {
    const owner = userData.id;
    const animal = await Animal.create({...animalData, owner});
    return animal;
}

export async function getAnimalsHome(){
    const fetchData = {name: 1, need: 1, image: 1}
    const result = await Animal
        .find({}, fetchData)
        .sort({ _id: -1 })
        .limit(3);
    return result;
}

export async function getAnimals(filter = {}){    
    const fetchData = {name: 1, need: 1, image: 1, location: 1} 
    let animals = await Animal.find({}, fetchData);

    if (filter.location) animals = animals.filter(animal => animal.location.toLowerCase().includes(filter.location.toLowerCase()));

    return animals;
}

export async function getAnimal(animalId){
    const animalData = Animal
        .findById(animalId)
        .select({
            name: 1
            , image: 1
            , years: 1
            , kind: 1
            , need: 1
            , location: 1
            , description: 1
            , donation: 1
            , owner: 1
        });

    return animalData;
}