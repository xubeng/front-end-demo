/**
 * 按照单个字符串末尾字母的ASCII值降序输出，出栈
 */

// line=readline()       print(a+b);

let inputStr = "32?,12),an,f3mm,52";
let inputStack = inputStr.split(",")
console.log("before change:",inputStack)
if(inputStr.length>100){return false;}
console.log("before change:",inputStack.sp)

inputStack.forEach(ele=>{
    // console.log(ele.charAt(ele.length-1).charCodeAt())
    // console.log((ele.charAt(ele.length-1)))
    // console.log((ele.charAt(1)))
    // const code = ele.charAt(ele.length-1)

})
// inputStack.map(ele=>console.log(ele+1))

inputStack.forEach(ele=>{
    // console.log((ele.charAt(ele.length-1)))

})
var  outputArr;

for (let j = 0; j < inputStack.length; j++) {
    for (let i = j+1; i < inputStack.length; i++) {
        var frontCode = inputStack[j].charAt(inputStack[j].length-1).charCodeAt();
        var behindCode = inputStack[i].charAt(inputStack[i].length-1).charCodeAt();  
        // console.log(frontCode,behindCode)
        if (frontCode < behindCode) {
             var tmp;
             tmp = inputStack[j];
             inputStack[j] = inputStack[i];
             inputStack[i] = tmp;
        }
            

    }
    // const frontCode = inputStack[index].charAt(inputStack[index].length-1).charCodeAt();
    // const behindCode = inputStack[++index].charAt(inputStack[++index].length-1).charCodeAt();
//     // if(inputStack[index].charAt(ele.length-1).charCodeAt());
    
}
        console.log("after change:",inputStack)

// console.log("n".charCodeAt())
// console.log("2".charCodeAt())
// console.log("m".charCodeAt())
console.log(String.fromCharCode(109))

var a = [2,4,5,3];
a.splice(3,0,7)
console.log(a)