const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Resolved Data");
        reject("Something went Wrong!!!");
    }, 1500)
});

promise.then((data) => {
    console.log(data)

}).catch((error) => {
    console.log(error);
});