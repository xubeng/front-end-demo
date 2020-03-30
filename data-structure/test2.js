/**
 * 键盘转换
 */
var str='H kz k xif.'
var outputStr =[]
var strArr=str.split("")
console.log(strArr);
var standardKey = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'

var natureKey =   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

var standardKeyArr = standardKey.split("");
var natureKeyArr = natureKey.split("");

for (let index = 0; index < strArr.length; index++) {
    if (natureKey.indexOf(strArr[index])!==-1) {
        outputStr.push(standardKey[natureKey.indexOf(strArr[index])])
        // console.log(index,outputStr);

    }else{
        outputStr.push(strArr[index])
    }
    
}

console.log(outputStr.join(""));