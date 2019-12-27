// //极简的实现+链式调用
// class Promise {
//     callbacks = [];
//     constructor(fn) {
//         fn(this._resolve.bind(this));
//         // console.log(fn);

//     }
//     then(onFulfilled) {
//         this.callbacks.push(onFulfilled);
//         return this;//看这里
//     }
//     _resolve(value) {
//         this.callbacks.forEach(fn => fn(value));
//     }
// }


// let p = new Promise(resolve=>{
//   setTimeout(function(){
//     console.log('done');
//     resolve();

//     console.log( '    resolve()
//   ',   resolve()    );

//   },1000)
  
// }).then(t=>{    console.log('then1');
// }

// )

// //完整的实现
// class Promise {
//     callbacks = [];
//     state = 'pending';//增加状态
//     value = null;//保存结果
//     constructor(fn) {
//         fn(this._resolve.bind(this));
//     }
//     then(onFulfilled) {
//         return new Promise(resolve => {
//             this._handle({
//                 onFulfilled: onFulfilled || null,
//                 resolve: resolve
//             });
//         });
//     }
//     _handle(callback) {
//         if (this.state === 'pending') {
//             this.callbacks.push(callback);
//             return;
//         }
//         //如果then中没有传递任何东西
//         if (!callback.onFulfilled) {
//             callback.resolve(this.value);
//             return;
//         }
//         var ret = callback.onFulfilled(this.value);
//         callback.resolve(ret);
//     }
//     _resolve(value) {

//         if (value && (typeof value === 'object' || typeof value === 'function')) {
//             var then = value.then;
//             if (typeof then === 'function') {
//                 then.call(value, this._resolve.bind(this));
//                 return;
//             }
//         }

//         this.state = 'fulfilled';//改变状态
//         this.value = value;//保存结果
//         this.callbacks.forEach(callback => this._handle(callback));
//     }
// }


// //完整的实现+reject
// class Promise {
//     callbacks = [];
//     state = 'pending';//增加状态
//     value = null;//保存结果
//     constructor(fn) {
//         fn(this._resolve.bind(this), this._reject.bind(this));
//     }
//     then(onFulfilled, onRejected) {
//         return new Promise((resolve, reject) => {
//             this._handle({
//                 onFulfilled: onFulfilled || null,
//                 onRejected: onRejected || null,
//                 resolve: resolve,
//                 reject: reject
//             });
//         });
//     }
//     _handle(callback) {
//         if (this.state === 'pending') {
//             this.callbacks.push(callback);
//             return;
//         }

//         let cb = this.state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;

//         if (!cb) {//如果then中没有传递任何东西
//             cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
//             cb(this.value);
//             return;
//         }

//         let ret = cb(this.value);
//         cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
//         cb(ret);
//     }
//     _resolve(value) {

//         if (value && (typeof value === 'object' || typeof value === 'function')) {
//             var then = value.then;
//             if (typeof then === 'function') {
//                 then.call(value, this._resolve.bind(this), this._reject.bind(this));
//                 return;
//             }
//         }

//         this.state = 'fulfilled';//改变状态
//         this.value = value;//保存结果
//         this.callbacks.forEach(callback => this._handle(callback));
//     }
//     _reject(error) {
//         this.state = 'rejected';
//         this.value = error;
//         this.callbacks.forEach(callback => this._handle(callback));
//     }
// }
// 完整的Demo请点击https://repl.it/@morrain2016/demo-reject。运行结果如下：

// Promise 实现原理精解 - 孔家少爷的文章 - 知乎
// https://zhuanlan.zhihu.com/p/58428287


class MyPromis{

    constructor(fn){

    }
}

var em = require('events').EventEmitter;
let event = new em();
event.on('some_ev',function(){
    console.log('evnet emit1');

})
setTimeout(function (e) {
    event.emit('some_ev')
},1000)