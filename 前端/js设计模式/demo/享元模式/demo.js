var peoples = [
  {firstName : 'li' , secondName : 'yanlong'},
  {firstName : 'david' , secondName : 'lee' }
];

// 未使用享元模式
var People = function(firstName,secondName){
  this.firstName  = firstName;
  this.secondName = secondName;
};

People.prototype.fullName = function(){
  return this.firstName + " " + this.secondName;
};

for(var i = 0,data;data = peoples[i++];){
  var people = new People(data.firstName,data.secondName);
  console.log(people.fullName());
};

// 使用享元模式
var People = function(){
};

People.prototype.setFullName = function(firstName,secondName){
  this.firstName = firstName;
  this.secondName = secondName;
};

People.prototype.fullName = function(){
  return this.firstName + " " + this.secondName;
};
var people = new People();
for(var i = 0,data;data = peoples[i++];){
  people.setFullName(data.firstName,data.secondName);
  console.log(people.fullName());
};
