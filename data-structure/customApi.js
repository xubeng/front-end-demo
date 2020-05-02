/**
 * 自定义tirm，去除头尾空格
 */
String.prototype.trim1=function () {
    var str =this
 var arr =   str.split("");
 var tmpArr = [];

  arr.forEach(function (item,index,arr) {
     if (item !== " ") {
        tmpArr.push(index);
        // console.log(index)
     }
    //  else if( item === " "&&(arr[index+1]!==" "&& arr[index-1]!==" ")){   

    //           tmpArr.push(item);

    //  }


    }
    
    )
 return str.substring(tmpArr[0],tmpArr[tmpArr.length])
}
console.log("  d   m  q  ".trim1())

String.prototype.trim2 = function(){
    return this.replace(/^\s*|\s*$/g,"");
}
console.log("  d   m  q  ".trim2())
