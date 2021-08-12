// PRIMER CALLBACK
function sum(a, b) {
    return a + b;
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(24, 3, sum));

// PRINT DATE
function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);
