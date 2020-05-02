/**插入排序
 * 
 */
function insertSort(arr){
    for (let index = 1; index < arr.length; index++) {
        const element = arr[index];
                // console.log(element);

        let j = index-1;
        // console.log(index);
        while (j>0&&arr[j]>element) {
            // let temp;
            // temp = arr[index]

            arr[j]=arr[j-1];
            // arr[index-1]=temp;
            j--;
        }
        arr[j+1]=element;

    }
    return arr;
}
let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
console.log(insertSort(arr));