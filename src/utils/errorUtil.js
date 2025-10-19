export function getErrMsg(error){
    if (error.name === "ValidationError"){ // mongoose validation
        error = Object.values(error.errors)[0];
    }

    return error.message;
}