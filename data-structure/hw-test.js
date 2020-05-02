/**
 * 通过两个容量为x、y升的木桶，得到指定容量z。
 */

 function size(x,y,z){
    let minus = x-y>0?x-y:y-x;
    if (z%minus===0) {
        return true;
    } else if(x===z || y===z){
        return true;

    }else{
        return false;

    }
 }