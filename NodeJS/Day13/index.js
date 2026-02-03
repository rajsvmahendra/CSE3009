import { error } from "console";
import EventEmitter from "events"; //importing event emitter
// const emitter = new EventEmitter(); //creating an event emitter
// registering an even listener
// emitter.on("userRegister", (user) => {
//     console.log("User registered", user)
// })
//once is used to register an event listener that will be claaed only once
// emitter.once("userRegister", (user) => {
//     console.log("User registered", user)
// })
//off is used to remove an event listener (OFF)
// emitter.off("userRegister", (user) => {
//     console.log("User registered", user)
// })
//emit the event
// emitter.emit("userRegister", "Rajsv");
// emitter.emit("userRegister", "Rajsv");
// emitter.emit("userRegister", "Rajsv");


const emitter2 = new EventEmitter();
emitter2.on("setNotif", () => {
    console.log("push has been sent");
});
emitter2.on("setNotif", () => {
    console.log("email has been sent");
});
emitter2.on("setNotif", () => {
    console.log("whatsapp has been sent");
});
function login() {
    const isLogin = true;
    if (isLogin) {
        console.log("Login Successfull")

    } else {
        console.log("Login Failed")
        return;
    }
    console.log("Login Done");
    emitter2.emit("setNotif");
    //Error listener 
    try {
        emitter2.emit("log in done!!")
    } catch (err) {
        emitter2.emit("error", err)
    }
}
login();

//ORDER NOTIFICATION
// orderplaced,confirmed,dpassigned,ontheway,delivered
// const emitter3 = new EventEmitter();

// emitter3.on("orderPlaced", (data) => {
//     // console.log("Status:", data.status);
//     console.log(`[Notification: Order Status: ${data.status}]`)
// });
// emitter3.on("orderPlaced", () => {
//     // console.log("Status:", data.status);
//     throw new Error("SEREVR DOWN")
// });
// emitter3.on("confirmed", (data) => {
//     // console.log("Order Confirmed. ID:", data.id);
//     console.log(`[Notification: Your Order ${data.id} has been confirmed by ${data.restaurant} and soon a DP will be assigned by us!]`)
// });
// emitter3.on("dpassigned", (data) => {
//     // console.log("Delivery Partner Assigned for OrderID:", data.id);
//     console.log(`[Notification: Your Order ${data.id} has been assigned to our DP: ${data.dpName}!]`)
// });
// emitter3.on("ontheway", (data) => {
//     // console.log("Order", data.id, "is on the way");
//     console.log(`[Notification: ${data.dpName} is on the way!]`)
// });
// emitter3.on("delivered", (data) => {
//     // console.log("Order", data.id, "delivered successfully!");
//     console.log(`[Notification: ${data.dpName} has delivered your order!]`)
// });
// emitter3.on("error", (err) => {
//     console.log("Error", err);
// })

// function processOrder() {
//     const orderDetails = {
//         id: 123,
//         status: "Pending",
//         restaurant: "LOVELY SWEETS",
//         dpName: "Pranjal"
//     };

//     console.log("Processing your Swiggy Order... wait here are your details");

//     emitter3.emit("orderPlaced", orderDetails);
//     emitter3.emit("confirmed", orderDetails);
//     emitter3.emit("dpassigned", orderDetails);
//     emitter3.emit("ontheway", orderDetails);
//     emitter3.emit("delivered", orderDetails);

//     try {
//         emitter3.emit("order placed");
//     } catch (err) {
//         emitter3.emit("Error", err);
//     }
// }

// processOrder();



