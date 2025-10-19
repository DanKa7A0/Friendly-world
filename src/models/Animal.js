import { Schema, Types, model } from "mongoose";

const animalSchema = new Schema({
    name: {
        type: String
        , required: [true, "Name is required"]
        , minLength: [2, "Name should be at least 2 characters long"]
    }
    , years: {
        type: Number
        , required: [true, "Years is required"]
        , min: [1, "Year should be at least 0"]
        , max: [100, "Year should be below 100"]
        , cast: "{VALUE} is not a valid number for year",
    }
    , kind: {
        type: String
        , required: [true, "Kind is required"]
        , minLength: [3, "Kind should be at least 3 characters long"]
    }
    , image: {
        type: String
        , required: [true, "Image is required"]
        , match: [/^https?:\/\//, 'Image Url is invalid!'],
    }
    , need: {
        type: String
        , required: [true, "Need of is required"]
        , minLenght: [3, "Need of should be at least 3 characters long"]
        , maxLength: [20, "Need of should be at below 20 characters long"]
    }
    , location: {
        type: String
        , required: [true, "Location is required"]
        , minLenght: [5, "Location should be at least 5 characters long"]
        , maxLenght: [15, "Location should be at below 15 characters long"]
    }
    , description: {
        type: String
        , required: [true, "Description is required"]
        , minLenght: [5, "Description should be at least 5 characters long"]
        , maxLenght: [50, "Description should be at below 50 characters long"]
    }
    , donation: [{
        type: Types.ObjectId
        , ref: "User"
    }]
    , owner: {
        type: Types.ObjectId
        , ref: "User"
    }
});

const Animal = model("Animal", animalSchema);

export default Animal;