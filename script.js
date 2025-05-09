// let cup1 = 'cola'
// let cup2 = 'fanta'
// let cup3 = ''


// cup3 = cup1;
// cup1 = cup2;
// cup2 = cup3;
// cup3 = ''

// console.log(cup1);
// console.log(cup2);
// console.log(cup3);

// ---------------------------------------------------------------------------
// let obj = {
//     a: 7,
//     b: 3,
// }
// let a=obj.a;
// let b=obj.b;

// if (a>b) {
//     console.log(`${a} katta`);
// } else if (a<b) {
//     console.log(`${b} katta`);
// } else {
//     console.log(`teng`);
// }

// --------------------------------------------------------------------------------------------

// for(let i=1; i<=100; i++){
//     if(i %2===0){
//         console.log( i,`juft`);
//     }else{
//         console.log(i,'toq');  
//     }
// }

// ----------------------------------------------------------------------------------------------
// const array = [
//     { title: "Naruto", genre: "Action", rating: 8.5 },
//     { title: "One Piece", genre: "Adventure", rating: 9.0 },
//     { title: "Death Note", genre: "Mystery", rating: 9.2 },];


// for (let i = 0; i < array.length; i++) {
//     if (array[i].rating >= 9) {
//         console.log(array[i].rating);
//     }
// }

// -----------------------------------------------------------------------------------------------

// const students = [
//     {
//         name: "Alice",
//         age: 20,
//         grade: 75,
//         major: "Computer Science"
//     },
//     {
//         name: "Bob",
//         age: 22,
//         grade: 82,
//         major: "Mechanical Engineering"
//     },
//     {
//         name: "Charlie",
//         age: 19,
//         grade: 90,
//         major: "Mathematics"
//     },
//     {
//         name: "Diana",
//         age: 21,
//         grade: 88,
//         major: "Biology"
//     },
//     {
//         name: "Ethan",
//         age: 23,
//         grade: 70,
//         major: "History"
//     }
// ];

// for (let a = 0; a < students.length; a++) {

//     let g = students[a].grade;
//     let n = students[a].name;
//     let m = students[a].major;

//     if (g >= 75 && g < 80) {
//         console.log(n, m, g, `F`);
//     } else if (g >= 80 && g < 85) {
//         console.log(n, m, g, `C`);
//     } else if (g >= 85 && g < 90) {
//         console.log(n, m, g, `B`);
//     } else if (g > 90) {
//         console.log(n, m, g, `A`);
//     } else {
//         console.log(n, m, `imtihondan yiqildi`);
//     }
// }
// -----------------------------------------------------------------------------------------
// ----------------------home work----------------------------------------------------------

// for (let number = 2; number <= 20; number++) {
//     let tub =true
//     for(let i=2; i<number; i++)
//         if (number %i ===0) {
//             tub =false;
//         }  
//     if(tub){
//         console.log(`${number} tub son`);
//     }else{
//         console.log(number);
//     }
// }
// const order = {
//     customer: {
//         name: 'Asal',
//         contact: {
//             phone: '',
//             email: ''
//         }
//     },
//     items: [
//         { name: 'Laptop', price: 1200 },
//         { name: 'Mouse', price: 25 }
//     ],
//     payment: null,
//     shipping: {
//         address: {
//             city: 'Tashkent',
//             street: 'Yunusabad 5'
//         },
//         delivered: false
//     }

// }
// let n = order.customer.name
// let ph = order.customer.contact.phone
// let e = order.customer.contact.email
// let p = order.payment
// let city =order.shipping.address.city
// let del =order.shipping.delivered

// console.log(n);
// console.log(ph ? `Customer phone: ${ph}`:'Phone not available');
// console.log(e || `No email provided`);
// console.log(p ?? `Payment pending`);

// const total =order.items.reduce((acc , curr)=> acc.price + curr.price)
// console.log(`Total: $${total}`);

// console.log( city? `Shipping to: ${city}`: "Delivery address missing");
// console.log(order.customer.loyaltyCard?.points ?? "No loyalty points");
// del && console.log(`Order has been delivered`);
// order.getTrackingCode?.() ?? console.log('')