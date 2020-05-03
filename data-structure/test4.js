/**腾讯文档 一面 */
/**数组中值出现了一次的数字
思路
标签：位运算
本题根据题意，线性时间复杂度 O(n)O(n)，很容易想到使用 Hash 映射来进行计算，遍历一次后结束得到结果，但是在空间复杂度上会达到 O(n)O(n)，需要使用较多的额外空间
既满足时间复杂度又满足空间复杂度，就要提到位运算中的异或运算 XOR，主要因为异或运算有以下几个特点：
一个数和 0 做 XOR 运算等于本身：a⊕0 = a
一个数和其本身做 XOR 运算等于 0：a⊕a = 0
XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
故而在以上的基础条件上，将所有数字按照顺序做抑或运算，最后剩下的结果即为唯一的数字
时间复杂度：O(n)O(n)，空间复杂度：O(1)O(1)

作者：guanpengchn
链接：https://leetcode-cn.com/problems/single-number/solution/hua-jie-suan-fa-136-zhi-chu-xian-yi-ci-de-shu-zi-b/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
**/
/**
 * @param {number[]} nums
 * @return {number}
 * https://blog.csdn.net/kybd2006/article/details/3727218
 */
var singleNumber = function(nums) {
    var res = nums.reduce(function(accumlator,currValue){ return accumlator^currValue});
     return res;
 };


 function FindNumsAppearOnce(array)
 {
     // write code here
     // return list, 比如[a,b]，其中ab是出现一次的两个数字
     var list=[];
     for(var i=0;i<array.length;i++){
         if(array.indexOf(array[i])==array.lastIndexOf(array[i])){
             list.push(array[i])
         }  
     }
    //  console.log(list);
 }
 FindNumsAppearOnce([1,2,1,2,3,4,2,4,7])
//  作者：qq_大脸猫_8
//  链接：https://www.imooc.com/article/20187
//  来源：慕课网

function findTwoEvenNum(array)
{
     var res = array.reduce(function(accumlator,currValue){ return accumlator^currValue});
     console.log("res:"+res)

     var array1= unique(array)
    //  var count
   console.log(array1)
     // array.reduce(function(accumlator,currValue){ if(res===accumlator^currValue)console.log(accumlator,currValue) });
     for (let index = 0; index < array1.length; index++) {
        for (let j = index+1; j < array1.length; j++) {
            if ((array1[j] ^ array1[index])===res) {
                // console.log("res1:"+res)

                console.log(array1[j],array1[index])
            }
            
        }         
     }


}
function unique (arr) {
    return Array.from(new Set(arr))
  }

// findTwoEvenNum([1,1,2,2,3,4,4,5])
function findEven2(arr) {
    var res = arr.reduce(function(accumlator,currValue){ return accumlator^currValue});
    console.log("res:"+res)
    var e1 = 0;
    var rightOne = res & (~res + 1);//永远为1？
    console.log("rightOne:"+rightOne)

    for (let i=0;i<arr.length;i++) {
        if ((arr[i]&1)!=0) {
            e1 ^= arr[i];
            console.log("e1:"+e1)

        }
    }
   
    console.log(e1,e1^res);


}

findEven2([1,1,2,2,3,4,4,5,5,6])
// console.log(9&(~9+1));
// console.log(3&-3); 
function findEven3(arr) {
    var ans = arr.reduce(function(accumlator,currValue){ return accumlator^currValue});
var ans1 =0,ans2=0;
    var pos= 0;
for(let i = 0;i <= 31;i++){//ll 的话可以换成61 
	if(ans&(1<<i)){
		pos = i;
		break;
	}
}
pos = 1<<pos;
for(let i = 1;i <= arr.length;i++){	
	if(arr[i]&pos){//当前位为1，为ans1
		ans1 ^= arr[i];
	}else{//当前位为0，为ans2
		ans2 ^= arr[i];//输出为4
	}
}
console.log(ans1,ans1^ans);

}
// findEven3([1,1,2,2,3,4,4,5,6,5])



// 反转单向链表
// 子数组的最大累加和问题