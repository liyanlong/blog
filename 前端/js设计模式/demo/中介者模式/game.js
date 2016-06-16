// 游戏 分队

var Player = function(name,teamColor){
  this.name = name;
  this.teamColor = teamColor;
  this.state = 'alive';
};
Player.prototype = {

  win  : function(){
    console.log( this.teamColor +" team: " + this.name + " win");
  },
  lose : function(){
    console.log( this.teamColor +" team: " + this.name + " lose");
  },
  die  : function(){
    this.state = 'dead';
    console.log(this.name + "死亡");
    PlayerDirector.reciveMessage("playerDead",this);
  },
  remove : function(){
    // 掉线用户移除队伍
    this.state = 'dead';
    console.log(this.name + "掉线");
    PlayerDirector.reciveMessage("playerDead",this);
  }
};
var PlayerFactory = function(name,team){
  var player = new Player(name,team);
  PlayerDirector.reciveMessage('addPlayer',player);
  return player;
};

var PlayerDirector = (function(){
  var players = {};

  //  检查队伍是否输了
  var checkTeamLose  = function(teamColor){
     return !checkTeamAlive(teamColor);
  };

  var getWinColor     = function(){

    // 检查是否只剩一只队伍
    if(checkTeamAliveNum() == 1){
      var winColor = "";
      for(var color in players){
          if(checkTeamAlive(color)){
             winColor = color;
             break;
          }
      }
      return winColor;
    }
    return false;
  };

  var checkTeamAlive = function(teamColor){
    var playersList = players[teamColor];
    var isAlive = playersList.some(function(player){
         return player.state == "alive";
    });

    return isAlive;
  };
  var checkTeamAliveNum = function(){
    var aliveTeam = 0;
    for(var color in players){
        if(checkTeamAlive(color)){
           aliveTeam++;
        }
    }
    return aliveTeam;
  };



  var teamWin = function(teamColor){
      for(var color in players){
        var flag = "lose";
         if(color == teamColor){
           var flag = "win";
         }
         players[color].forEach(function(player){
             player[flag].apply(player);
         });
      }
  };

  var operators = {

      addPlayer   : function(player){
        var teamColor = player.teamColor;
          players[teamColor] = players[teamColor] || [];
          players[teamColor].push(player);
      },
      // removePlayer : function(player){
      //   var teamColor = player.teamColor;
      //
      //   // 移除玩家
      //   players[teamColor].each(function(index,p){
      //      if(p === player){
      //        player[teamColor].splice(index,1);
      //        return false;
      //      }
      //   });
      //
      //   // 检查是否队伍输了
      //   if(checkTeamLose(teamColor)){
      //      var winColor = getWinColor();
      //      winColor && teamWin(winColor);
      //   }
      //
      // },
      playerDead : function(player){
        var teamColor = player.teamColor;
        if(checkTeamLose(teamColor)){
           var winColor = getWinColor();
           winColor && teamWin(winColor);
        }
      }

  };

  function reciveMessage(){
      var message = Array.prototype.shift.call(arguments);
      operators[message] && operators[message].apply(this,arguments);
  }
  return {
    reciveMessage : reciveMessage
  };
})();

var player1 = PlayerFactory('liyl','red');
var player2 = PlayerFactory('opt','blue');
player2.die();
