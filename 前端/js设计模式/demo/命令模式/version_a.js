// 实现命令模式1
// 命令分工

// 负责实现留言功能
var ChartRoom = {
    data: [],
    add: function(name, msg) {
        var data = {
            author: name,
            msg: msg
        }
        this.data.push(data);
    },
    indexOf: function(item) {

        function isYourSay(data, item) {
          if(!item){
            return false;
          }
          for(var i =0,key; key = ["author","msg"][i++];){
              if(typeof item[key] == "undefined"){
                return false;
              }
          }
          if (data.author == item.author && data.msg == item.msg) {
              return true;
          }
          return false;
        }

        for (var i = 0, data; data = this['data'][i]++;) {
            if (isYourSay(data,item)){
              return i;
            }
        }
        return index;
    }
};

var nameIpt = document.querySelector("input[name=author]");
var msgIpt = document.querySelector("input[name=message]");

document.querySelector('#J-add').addEventListener("click",function(){
  var name = nameIpt.value;
  var msg  = msgIpt.value;
  if(name && msg){
    ChartRoom.add(name,msg);
  }
},false);
