const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeded');
    });
}, 1000);

myPromise.then(value => console.log(value));