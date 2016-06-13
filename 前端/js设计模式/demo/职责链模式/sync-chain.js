// 同步
var strategy = {
  username : function(val){
     return /^[a-z][\w|\d]{7,15}/.test(val);
  },
  password : function(val){
    return /^[a-z][\w|\d]{5,12}/.test(val);
  }
}

var validator = function(name,val){
  return  strategy[name] && strategy[name](val);
};
var Chain = function(fn){
  this.fn = fn;
  this.successor = null;
};

Chain.prototype = {

  setNextSuccessor : function(successor){
      this.successor = successor;
  },

  passRequest : function(){
    var ret = this.fn.apply(this,arguments);
    if(ret == 'nextSuccessor'){
      return this.successor && this.successor.passRequest.apply(this.successor,arguments);
    }
    return ret;
  }

}

var loginValidator = function(form){

    if(!validator("username",form.username)){
      return false;
    }
    if(!validator("password",form.password)){
      return false;
    }
    console.log('success');
    return "nextSuccessor";
}

var submitLogin = function(form){
  var self = this;
    setTimeout(function(){
      self.next();
      console.log('提交成功');
    },2000);
}

var data = {
  username : "test123456",
  password : "abcdefg"
}
var loginValidatorChain = new Chain(loginValidator);
var submitLoginChain = new Chain(submitLogin);
loginValidatorChain.setNextSuccessor(submitLoginChain);
loginValidatorChain.passRequest(data);
