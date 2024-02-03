// array = [1, 2, 3, 4, 5, "foo", "bar", true, 2.51]

// obj = {
//     firstname: "foo",
//     last_name: "bar",
//     age: 23,
//     status: true
// }

// console.log(array[5])
// console.log(obj["first_name"])
// console.log(obj.last_name)

// for (var i = 0; i < 1000; i += 5) {
//     console.log(i)
// }

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
// }

// for (var i of array) {
//     console.log(i)
// }

// for (var key of Object.keys(obj)) {
//     console.log(key + ": " + obj[key])
// }

// for (var key in obj) {
//     console.log(key + ": " + obj[key])
// }

// var i = 0;
// while (i < 10) {
//     console.log(i)
//     i++
// }

// do {
//     console.log("--" + i)
// } while(i < 10)

// var x = 890

// if (x > 90) {
//     console.log("Si es mayor")
// } else {
//     console.log("No es mayor")
// }

// var animal = "Kitty"

// if (animal === "Kitty") {
//     console.log("It is a pretty Kitty")
// } else {
//     console.log("Is not a pretty kitty")
// }

// var cat = (animal === "Kitty") ? "It is a pretty Kitty" : "Is not a pretty Kitty"

// switch (animal) {
//     case "Kitty":
//         console.log("Case One")
//         break;
//     case "Puppy":
//         console.log("Case Two")
//         break;
//     default:
//         console.log("Other Wise")
//         break;
// }

// function prism(l) {
//     return function(w) {
//         return function(h) {
//             return l * w * h
//         }
//     }
// }

// console.log(prism(89)(12)(9))

// var message = "Hello World"
// const foo = (function(msg) {
//     console.log("I am the LIFE" + msg);
//     return msg
// }(message));

// console.log(foo)

// function prism(l, w, h) {
//     return l * w * h
// }

// console.log(prism(23, 45, 56))

// var sumTwoNumbers = function sum (a,b) {
//     return a + b
// }

// sum(1, 3);

// var say = function say(times) {
//     say = undefined;
//     if(times > 0) {
//         console.log("Hello")
//         say(times * 1)
//     }
// }

// var saysay = say
// say = "Oops!"
// saysay(100)

// console.log(say)

function personSay(person, ...msg) {
    msg.forEach(arg => {
        console.log(person + " say: " + arg)
    })
}

personSay("Foo", "Hello", "JS", "REACT", "NATIVE", "PWA")