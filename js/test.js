//let person={
//     firstName:"Halya",
//     lasName:"test",
//     age:"50"
// };
//console.log("person = ",person);//

//let cars=["BMW","Nisan","Volvo","Saab"];
//console.log("cars= ",cars);
//console.log(cars[1]);//
//console.log(cars.length);//
//console.log(cars.toString());//
//console.log(cars.join("-"));//
//console.log(cars.puch("Saab"));//
//console.log(cars.splice(1,2));//
//cars.sort()//
//console.log("cars=",cars);//
//cars.unshift("test");//
//console.log("cars=",cars);//

//let fruits=[ "appel","orang"];//
//let res=cars.concat(fruits);//
//console.log("res=",res);//
//let res.slice(1,2)//
//console.log("res=",res)//

 
//let res= cars.filter(item=>item.lengt>4);//
// console.log("res=",res);

 //let res= cars.find(item=>item.lengt>4);//
 //console.log("res=",res);//
 //let res=cars.map(item=>item+"test")//
 //console.log("res=",res)//

 //let res =cars.reduce((acum,item)=>acum+item.lengt)
 //console.log("res=",res)


 //function voice(sound) {
   //  console.log(sound);
// }
 //voice("meow");
 //function getName(){
     //return"Petro";
 //}
 //let name =getName();
 //console.log(name);
 //let name=getName("ghj");
 //console.log(name);
 //let voice2=(param)=>{
 //console.log(param);}
// voice2("123");

//let b = window.prompt ("b=",2);

// mul =(a,b)=> {
  //

 // console.log("Hello".split(""));
 // console.log( ["H", "e", "l", "l", "o"].join(""));
//  console.log("hello".split("").reverse().join())
// console.log("Helloe".replace("e","a"));
//C=(5/9)*(F-32)

//let f =window.prompt("F=",10);
//if (!isNaN(Number(f))>=0){
//let c =(5/9)*(f*-32);
//console.log("C=",c.toFixed(1));
//}
//else
//{
 // consle.log("Error");
//}
let a =window.prompt("a=",10);
let check=(num)=>
{


//if (!isNaN(Number(a))>=0){
 
//   if (!isNaN(Number(a))>=0)
//   let c =check (Number(a));
//   console.log(c);
  
// } else {
//   consle.log("Error");
// 

// 

// let arr=srt.split("");
// let first=arr[0];
// arr.push(first)
// arr.a
// let newStr=arr.join
// console.log(newStr)
// 
let arr=[1,2,3,4,5,55,8,0,8];
let oddEveArr=(arr)=>
{
  let odd =[];
  let eved=[];
  for(let index =0;index<arr.length;index ++){
    (arr[index%2===0])?
    even.push(arr[index]);
    odd.push(arr[index]);
  }
  console.log("even=",even);
  console.log("odd=",odd);
}
oddEveArr(arr);