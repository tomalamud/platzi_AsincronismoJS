const doSomthingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do somthing Async'), 3000)
            : reject(new Error('Test Error'))
    });
};

const doSomthing = async () => {
    const something = await doSomthingAsync();
    console.log(something);
};

const anotherFunction = async () => {
    try {
        const something = await doSomthingAsync();
        console.log(something);
    } catch {
        console.error(error);
    }
}

console.log('Before');
anotherFunction();
console.log('After');