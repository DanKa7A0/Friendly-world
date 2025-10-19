import Animal from "../models/Animal.js";

export async function createAnimal(animalData, userData) {
    const owner = userData.id;
    const animal = await Animal.create({...animalData, owner});
    return animal;
}