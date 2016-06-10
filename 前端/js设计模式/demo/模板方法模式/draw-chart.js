var MyChart = function(){

};

MyChart.prototype.init = function(){
  this.container();
  this.size();
  this.setData();
  this.draw();
  if(this.needTooltip){
    this.tooltip();
  }
};

MyChart.prototype.container = function(){
    throw new Error('请指定容器');
};

MyChart.prototype.size = function(w,h){
  this.width  = w || 300;
  this.height = h || 300;
};

MyChart.prototype.setData = function(){
    throw new Error("请指定关键数据");
};

MyChart.prototype.draw = function(){
    throw new Error("请完成绘制功能");
};

MyChart.prototype.tooltip = function(){
    throw new Error("辅助功能");
}

MyChart.prototype.needTooltip = false;

var MyChartFactory = function(option){
  var chart = new MyChart();
  chart.container = option.container || chart.container;
  chart.size(option.width,option.height);
  chart.setData = option.setData || chart.setData;
  chart.draw = option.draw || chart.draw;
  chart.needTooltip = option.needTooltip || chart.needTooltip;
  chart.tooltip = option.tooltip || chart.tooltip;
  return chart;
};

var a = MyChartFactory({
  container : function(){ console.log("设置container1");},
  setData   : function(){ this.data = { title : "abc"};},
  draw      : function(){ console.log('普通画图. data:',this.data);}

});

var b = MyChartFactory({
  width  : 150,
  height : 150,
  needTooltip : false,
  container : function(){ console.log("设置container2");},
  setData   : function(){ this.data = { title : "哈哈" ,type : "line"};},
  draw      : function(){ console.log('画 线性图. data:',this.data);}

});
a.init();
b.init();
