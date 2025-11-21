// promise 

const myPromise = new Promise((resolve, reject) => {
    let age=20;
    if(age>=18){
        resolve("You are eligible to vote.");
    } else {
        reject("You are not eligible to vote.");
    }


});



myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

console.log("End of the script.");

myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});
console.log("End of the script2.");