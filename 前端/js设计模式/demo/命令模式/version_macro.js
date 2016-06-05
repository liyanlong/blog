// 命令队列
var MacroCommand = function(){
  this.commandList = [];
};
MacroCommand.prototype.add = function(command){
  this.commandList.push(command);
}
MacroCommand.prototype.execute =  function(){
  var i = 0,
      command;
  while(command = this.commandList[i++]){
      command.execute();
  }
};

var alertCommand = {
  execute : function(){
    console.log('显示遮罩层');
  }
};
var closeCommand = {
    execute : function(){
      console.log('关闭遮罩层');
    }
};

var ajaxCommand = {
  execute : function(){
    console.log('读取远程数据');
  }
};
var macroCommand = new MacroCommand();
var macroCommand2= new MacroCommand();
macroCommand2.add(ajaxCommand);

macroCommand.add(alertCommand);
macroCommand.add(closeCommand);
macroCommand.add(macroCommand2);
macroCommand.execute();
