alert("I'm invoked!");
alert("I'm JavaScript!");
//alert('Hello') // this line is not having semicolon
alert('Hello');
//alert('World') This is not a problem, but put the semicolon is a better way
alert('World');
alert(3 + 
1 
+ 2); // this is multiple line code and its working, this is not a correct way
alert(3 + 1 + 2); // This is a correct way of alert

// alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek" //doubt
admin = fname+lname;
alert( admin ); // "Guvi geek"
//fname is a string, so that followed concatenation it is considering lname as a string.
//That's why we got "Guvigeek" as a alert message

// alert Hello Guvi geek
let firstname=10.5;
firstname = "Guvi ";
lastname = "geek"
let name = firstname+lastname;
alert( `hello ${name}` );
//alert( "Hello" + totalname );

//Output: 1234567891011
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++)
 {
 new_string += numsArr[i];
}
console.log(new_string);
// 1234567891011

//Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//console.log(numsArr1);
var new_string1 = "";
 
for (var i = 0; i < 11; i++) 
{
 if(i == 11-1) {
    new_string1 += numsArr1[i]; 
 }
 else {
    new_string1 += numsArr1[i] + ",";
 }
 }
 console.log(new_string1);
 //1,2,3,4,5,6,7,8,9,10,11


//Output: 11 10 9 8 7 6 5 4 3 2 1
var new_string = "";
//console.log(new_string);
var numsArr = [1,2,3,4,5,6,7,8,9,10,11]; 
//console.log(numsArr.length);
for (var i = 10; i >= 0; i--) {
    /*if(i == numsArr.length-1)
    {

       new_string = numsArr[i] + " ";
       console.log(new_string);
    }
    else
    {
        new_string += numsArr[i] + " ";
    } */
    if(i == 0) {
        new_string += numsArr[i];  
    }
    else {
        new_string += numsArr[i] + " ";
    }
    
}
console.log(new_string);


// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var temp = [];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] % 2 == 0 )
 {
     temp.push("even");
 }
 else {
     temp.push(numsArr[i]);
 }
}
console.log(temp);

//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var temp = [];
for (var i = 0; i <=10; i++) {
 if(i % 2 == 0 )
 {
     temp.push("even");
 }
 else {
     temp.push(numsArr[i]);
 }
}
console.log(temp);

//Write a code to add all the numbers in the array

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) 
 sum += numsArr[i];

console.log(sum);

//Write a code to add the even numbers only

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0)
 sum += numsArr[i];
}
console.log(sum);

//Write a code to add the even numbers and subract the odd numbers
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i] % 2==0)
 {
 sum += numsArr[i];
 }
 else
 {
 sum -= numsArr[i];
 }
}
console.log(sum);

// Write a code to print inner arrays
var numsArr = [[1, 2, 3, 4, 5], [ 6, 7, 8, 9, 10, 11]];

for (var i = 0; i < numsArr.length; i++) {
 console.log(numsArr[i]);
}

//Write a code to print elements in the inner arrays
var numsArr2 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
var inner_array;
for (var i = 0; i < numsArr2.length; i++) {
     inner_array = numsArr2[i];
 //console.log(inner_array);
 for(var j = 0 ; j < inner_array.length; j++ )
     str_all += inner_array[j];
     
}
console.log(str_all);

//Write a code to replace the array value — If the index is even, replace it with ‘even’.

var numsArr5 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var temp11=[];

for (var i = 0; i < numsArr5.length; i++) {
 var inner_array11 = numsArr5[i];
 for(var j = 0 ; j < inner_array11.length; j++ ) {
     var subarr1 = [];
      if(i %2 == 0 )
      {
        subarr1.push("even");
      }
      else 
      subarr1.push(inner_array11[j]);
}
temp11.push(subarr1);
}
console.log(temp11);

//Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

var numsArr5 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var temp11=[];
  var tempraryJ = numsArr5[0].length;
for (var i = 0; i < numsArr5.length; i++) {
 var inner_array11 = numsArr5[i];
  var subarr1 = [];
  if ( i == 0)
  {
  for(var j = 0 ; j < inner_array11.length; j++ ) {
      if(j % 2 == 0 )
      {
        subarr1.push("even");
      }
      else 
      subarr1.push(inner_array11[j]);
}
}
else
{
      for(var j = 0 ; j < inner_array11.length; j++ ) {
      if(tempraryJ++ % 2 == 0 )
      {
        subarr1.push("even");
      }
      else 
      subarr1.push(inner_array11[j]);
}
}
temp11.push(subarr1);
}
console.log(temp11);
