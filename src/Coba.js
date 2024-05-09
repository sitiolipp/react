//function add(a, b) {
//  return a+b;
//}

//let sum = add(10, 20);
//console.log(sum);

//let sum = add(20,25);
//let avg = sum/2;
//console.log('rata-rata =', avg);
//avg = 'selamat pagi'

// function luas(a) {
//     const phi = 3,14;
//     return phi*a*a;
// }

// console.log('luasnya =', luas);

// function getUsser() {
//     const user = [
//         {'nama': 'agos', 'email': 'agos@gmail.com'}
//         {'nama': 'satria', 'email': 'satria@gmail.com'}
//     ]
//     return user;
// }
// const ecommerce =  getUsser();
// console.log('first user :'

// )

// function add(a, b) {
//     return a+b;
// }
// let sum = (a, b)=> a+b;
// console.log('jumlah =' sum(2,4));

///////////


// (function () {
//     console.log('iife');
// })();




// function multiplay(first, second) {
//     return first * second;
// }
// console.log('hasil', multiplay(4, 34));


// let multi = (first, second) => first * second;
// console.log('hasil', multi(6, 8));


// (first, second) => {
//     console.log(first * second);
// }(10, 40);


////////////////

const one = (callback) => {
    setTimeout(() => {
        console.log("one");
        callback();
    }, 5000);
}

const two = (callback) => {
    setTimeout(() => {
        console.log("two");
        callback();
    }, 3000);
}

const three = (callback) => {
    setTimeout(() => {
        console.log("three");
        callback();
    }, 1000);
}

const four = () => {
    console.log("four");
}

one(() => {
    two(() => {
        three(four);
    });
});