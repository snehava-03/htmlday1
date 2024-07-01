console.log('Hi welcome');
a=8;
let g=23;
let d;
let k='True';
let r="false";
console.log(typeof(a));
console.log(typeof(d));
console.log(typeof(k));
console.log(typeof(r));
{
     var a=23;
     let g=36;
     console.log(g);
}
console.log(a);
console.log(g);
// transcript objects
let person={
    name:"Maya",
    age: 22,
    location:"tvm"
}
console.log(person.name);
let arr=['Meera','Raj',10];
console.log(arr[2]);
console.log(arr.length);
let arr_obj=[{age:23,location:'tvm'},{age:43,location:'kochi'}];
console.log(arr_obj[1].location);
function add(a,b){
    var sum=a+b;
    return sum;
}
let result=add(20,30);
console.log(result);
let s=1;
let t=++s;
console.log(t);
let x=24;
let y='24';
if(x>y){
    console.log('x is greter');
}else if(x==y)
{
     console.log('x is same as y'+x);
}
else{
    console.log('y is greter');
}
var arr2=[10,20,30,40,50]
for (let i = 0;i < arr2.length;i++) {
    console.log(arr2[i]);
    
}
for(const i in arr2){
    console.log(i)
}
for(const i of arr2)
{
    console.log(i);
}


