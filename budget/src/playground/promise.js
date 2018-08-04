const promise = new Promise((resolve, reject) => {
    reject('err test');
    console.log('after reject, before settimeout resolve');
    setTimeout(() => {
        resolve('done');
    }, 3000);
});

promise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});