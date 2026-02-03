function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function sayhello(name) {
    console.log("hello", name, "welcome to nodejs");
}

module.exports = { add, sub, sayhello };
