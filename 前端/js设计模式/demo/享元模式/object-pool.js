var objectPoolFactory = function(createObj){
  var objectPool = [];

  return {
    create : function(){
      if(objectPool.length > 0){
        return objectPool.shift();
      }
      return createObj.apply(this,arguments);
    },
    recover: function(obj){
      objectPool.push(obj);
    }
  }
};

// var createElement = function(){
//   var el =  document.createElement('div');
//   el.onclick = function(e){
//     console.log(e.target);
//   }
//   return el;
// }
//
// var elementFactory = objectPoolFactory(createElement);
//
// var el =  elementFactory.create();
// el.innerHTML = "abc";
//
// elementFacotry.recover(el);
