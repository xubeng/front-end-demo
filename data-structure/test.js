// var k = parseInt(readline());
// var str = readline();
// if(str === "") return;
var k = 7;
var str = "25G3C-ABf-CD"
var strArr =  str.split("-")
var firstStr = strArr.slice(0,1);
var realArr = strArr.slice(1,strArr.length);
console.log('firstStr:',firstStr.join())
console.log('strArr:',strArr)

var realStr = realArr.join("").toUpperCase();
var arr = realStr.split("");
console.log('arr:',arr)

var arrCopy = arr.splice(0,arr.length);
console.log('arr1:',arr)

console.log('before join arrCopy :',arrCopy)

for (var j = 0; j <arrCopy.length; j=j+k+1) {
    console.log('j:',j)
    // if (j<) {
        
    // }
    arrCopy.splice(j,0,'-')

// if(j==realStr.split("").length-1){
//     arrCopy.splice(j-1,-1,'-')

// }else{

// }
 }console.log('firstStr1',firstStr)


console.log('after  join arrCopy :',firstStr.concat(arrCopy).join(""))
// for (let j = 0; j < realArr.length; j++) {
//     for (let index = 0; index < realArr[j].split("").length;index=index+k) {
            
//     }
//  }
// var firstSubStr =  str.split("-")[0]
// var subStrArrLen= str.split("-").length;
// for (var index = 1; index < strArr.length; index++) {
//     var element = strArr[index].split();
//     for (let j = 0; j < element.length; j=j+k) {
//         const element = array[j];
        
//     }
    
// }
// console.log('firstSubStr.',firstSubStr)
console.log('typeof null',typeof null)
console.log('typeof undefined',typeof undefined)
// console.log('instaceof null',Object instanceof null)
console.log('typeof false',typeof false)
console.log('typeof null',typeof null)
let str1="";
console.log(str1)

if(!str1){
    console.log("1")
}