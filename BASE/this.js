	function fn2(sth) {
		console.log(this.name+sth);
	}
	var name = 'global';
	var obj1 = {//你不知道的js 上卷   this全面解析85页，严格来说，fn1 fn2都不属于obj1
	name:'finit',
	fn1:function () {
		console.log(this.name);//隐式绑定
	},
	fn2:fn2
}
// obj1.fn2();
// obj1.fn1();
// fn2.call(obj1);
var bar = function () {
	

	
	fn2.apply(obj1,arguments);


}
bar("_xu");
function a()
{console.log(this);} a.call(null);