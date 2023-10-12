// Callbacks
const greetUser = (username, callback) => {
    console.log(callback(username));
}

const cb = (username) => {
    return "Hello " + username;
}

greetUser("james", cb);
