var fnA = function(){
    console.log('run a');
};

var fnB = function(){
    console.log('run b');
};

var Command = function(fn){
  if(typeof fn == "function"){
      this.execute = fn;
  }
}
Command.prototype.execute = function(){
  throw new Error("不属于");
}

var MacroCommand = function(){
  return {
    list : [],
    add : function(command){
        this.list.push(command);
        return this;
    },
    execute : function(){
      for(var i = 0,command;command = this.list[i++];){
          command.execute();
      }
    }
  };
};

var commandA = new Command(fnA);
var commandB = new Command(fnB);
var macroCommand = new MacroCommand();
macroCommand.add(commandA).add(commandB);
macroCommand.execute();
