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

    const fetchData = {name: 1, need: 1, image: 1, location: 1}
    const result = await Animal.find({}, fetchData);
    return result;
export async function getAnimals(filter = {}){    
}
