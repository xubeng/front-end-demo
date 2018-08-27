// import loadImg from './promise'
class Cls1{
	constructor(age){
		this.age=age;
	}
	print(){
		console.log(`${this.age}`);
	}
}
let c1 = new Cls1(33);
c1.print();

// let src = 'https://csdnimg.cn/pubfooter/images/csdn_cs_qr.png';
// 	let promise =  loadImg(src);
// 	promise.then(function (img) {
// 		console.log(img.width)
// 	},function () {
// 		console.log('err')
// 	});
// ./node_modules/.bin/babel src/oop.js  查看编译后的代码