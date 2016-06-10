var Beverage = function(){
};

Beverage.prototype.init = function(){
  this.boil();
  this.brew();
  this.pourInCup();
  this.addCondiments();
};

Beverage.prototype.boil = function(){
  console.log('把水煮沸');
};

// 泡饮料
Beverage.prototype.brew = function(){
  throw new Error("请重写brew方法");
};

// 将饮料倒入杯子
Beverage.prototype.pourInCup = function(){
  throw new Error("请重写pourInCup方法")
};

// 加入配料
Beverage.prototype.addCondiments = function(){
  throw new Error("请重写 addCondiments方法");
};

var Coffee = function(){
};

Coffee.prototype = new Beverage();

Coffee.prototype.brew = function(){
  console.log('泡咖啡');
};

Coffee.prototype.pourInCup = function(){
  console.log('将咖啡倒入杯子里');
};

Coffee.prototype.addCondiments = function(){
  console.log('放入糖');
};

var coffee = new Coffee();
coffee.init();


var Tea = function(){
};

Tea.prototype = new Beverage();

Tea.prototype.brew = function(){
  console.log('泡茶');
};

Tea.prototype.pourInCup = function(){
  console.log('将茶水倒入杯子里');
};

Tea.prototype.addCondiments = function(){
  console.log('放入柠檬');
};

var tea = new Tea();
tea.init();
