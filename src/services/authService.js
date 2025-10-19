export async function register(userData) {    
    if (userData.pass !== userData.rePass){
        throw new Error("Passwords don't match");
    }

    
}