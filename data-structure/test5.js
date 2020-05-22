/**     任意参数、可以多次调用的sum函数  例如sum(1,3,2)(4)
 */

function sum(){
    console.log("this arguments:"+arguments)

    var args = Array.from(arguments) 
    console.log("args:"+args)

    return function (args) {
        console.log("args1:"+args)
        for (let index = 0; index < args.length; index++) {
            const element = args[index];
            let sum=0;
            sum+=element;

            
        }
        return sum;
    }

}

// console.log(sum(4))

function sum1(a) {
    console.log(a)

    return function (b) {
        console.log(b)

        return function (c) {
            console.log(c)

        return a+b+c;
        }
    }
    
}
// console.log(sum1(1,2,3))
// console.log(sum1(1)(2)(3))

/**柯里化是指这样一个函数(假设叫做createCurry)，他接收函数A作为参数，
 * 运行后能够返回一个新的函数。并且这个新的函数能够处理函数A的剩余参数。参数只需要一个就可以 */
function sum2(func,args) {
    console.log(a)

    return function (b) {
        console.log(b)

        return function (c) {
            console.log(c)

        return a+b+c;
        }
    }
    
}
