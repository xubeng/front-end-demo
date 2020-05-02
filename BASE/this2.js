'use strict'
const a = {
    a: 'a'
  };
  
  const obj = {
    getThis: () => this,
    getThis2 () {
      return this;
    }
  };
  obj.getThis3 = obj.getThis.bind(obj);
  obj.getThis4 = obj.getThis2.bind(obj);
  
  const answers = [
    console.log( obj.getThis()),
    console.log(obj.getThis.call(a)),
    obj.getThis2(),
    obj.getThis2.call(a),
    obj.getThis3(),
    obj.getThis3.call(a),
    obj.getThis4(),
    obj.getThis4.call(a)
  ];
  
  
class Obj {
    getThis = () => this
    getThis2 () {
      return this;
    }
  }
  
  const obj2 = new Obj();
  obj2.getThis3 = obj2.getThis.bind(obj2);
  obj2.getThis4 = obj2.getThis2.bind(obj2);
  
  const answers2 = [
    // console.log(obj2.getThis()),
    obj2.getThis.call(a),
    obj2.getThis2(),
    obj2.getThis2.call(a),
    obj2.getThis3(),
    obj2.getThis3.call(a),
    obj2.getThis4(),
    obj2.getThis4.call(a)
  ];
  
//   const b={
//       'c':1,
//       'd':2
//   }
//   b.c=3;
//   console.log(b)
//   b=a;
//   console.log(b)
