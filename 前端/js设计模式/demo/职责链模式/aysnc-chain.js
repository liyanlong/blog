// 同步
var strategy = {
    username: function(val) {
        return /^[a-z][\w|\d]{7,15}/.test(val);
    },
    password: function(val) {
        return /^[a-z][\w|\d]{5,12}/.test(val);
    }
}

var validator = function(name, val) {
    return strategy[name] && strategy[name](val);
};
var Chain = function(fn) {
    this.fn = fn;
    this.successor = null;
};

Chain.prototype = {

    setNextSuccessor: function(successor) {
        this.successor = successor;
    },

    passRequest: function() {
        var ret = this.fn.apply(this, arguments);
        if (ret == 'nextSuccessor') {
            return this.successor && this.successor.passRequest.apply(this.successor, arguments);
        }
        return ret;
    },
    next : function(){
       return this.successor && this.successor.passRequest.apply(this.successor, arguments);
    }

}

var loginValidator = function(form) {

    if (!validator("username", form.username)) {
        return false;
    }
    if (!validator("password", form.password)) {
        return false;
    }
    console.log('验证成功');
    return "nextSuccessor";
}

var submitLogin = function(form) {
    var self = this;
    setTimeout(function() {
        self.next(true);
    }, 2000);
}

var callbackLogin = function(isSuccess) {
    if (isSuccess) {
        console.log('登录成功');
    }
    console.log('登录失败');
}
var data = {
    username: "test123456",
    password: "abcdefg"
}
var loginValidatorChain = new Chain(loginValidator);
var submitLoginChain = new Chain(submitLogin);
var callbackLoginChain = new Chain(callbackLogin);

loginValidatorChain.setNextSuccessor(submitLoginChain);
submitLoginChain.setNextSuccessor(callbackLoginChain);
loginValidatorChain.passRequest(data);
