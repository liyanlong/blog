var Queue = function(command) {
  this.firstCommand = null;
  this.lastCommand = null;
};
Queue.prototype.add = function(fn) {
  var self = this;
  // 创建任务队列命令
  function createCommand(fn) {
    return {
      nextCommand: null,
      execute: function() {
        Array.prototype.unshift.apply(arguments, [this.nextCommand, self]);
        fn.apply(this, arguments);
      }
    };
  };
  var command = createCommand(fn);

  // 设置队列
  if (!this.firstCommand) {
    this.firstCommand = command;
    this.lastCommand = command;
    return this;
  }
  this.lastCommand.nextCommand = command;
  this.lastCommand = command;
  this.lastCommand.queue = this;
  return this;
};

Queue.prototype.execute = function() {
  this.firstCommand.execute();
};

Queue.prototype.fail = function(fn) {
  this.fail = fn;
};

Queue.prototype.error = function() {
  if (!this.fail) {
    throw new Error("fail函数缺失参数");
  }
  this.fail.apply(this);
};



var queue = new Queue();
var command1 = function(next) {

  setTimeout(function() {
    console.log('first');
    // 执行下一个命令
    next.execute('come from first');
  }, 1000);
};

var command2 = function(next, queue) {
  console.log('second');

  // 跳过任务队列,执行终结
  console.log(queue.error());
};

var command3 = function() {
  console.log('命令3');
};

// 任务队列
// 遵循异步队列
queue.add(command1).add(command2).add(command3).fail(function() {
  console.log('提前结束');
});
queue.execute();
