function binarySearch(arr,item) {
    var left = 0,right = arr.length-1;
    // if(arr.indexOf(item)===-1){return -1;}
    // for (let index = 0; index < arr.length; index++) {
    //     const element = arr[index];
    //     if (element===item) {
    //         return index;
    //     } else if(element>item){
            
    //     }else{

    //     }
        
    // } 不知道具体循环次数，无法使用for，可以考虑使用递归

    while (left<=right) {
        var mid = left+(right-left)/2;
        if (item===arr[mid]) {
            return mid;
        } else if(item>arr[mid]){
            left = mid+1;

        }else{
            left = mid-1;
        }
        
    }
    return -1;
}