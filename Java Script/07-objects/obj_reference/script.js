let a = {
    name : "Shivam"

};
let b = a;
b.name = "Rahul";

console.log(a);
console.log(b);

let x = [1,2];
console.log(x);

let y = x;
y.push(3);
console.log(y);
console.log(x);

let p = {
    city : "delhi"
};

let q = p;

console.log(p === q);
