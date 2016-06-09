var Province = function(name){
  this.name = name;
  this.cities = [];
}

Province.prototype.add = function(city){
  if(!city instanceof City){
    throw new Error('只接受 city对象');
  }
  this.cities.push(city);
  return this;
}

Province.prototype.remove = function(name){
  var cities = this.cities;
  for(var i = 0,city;city = cities[i++];){
      if(city.name == name){
        return  cities.splice(i,1)[0];
      }
  }
  return null;
}

Province.prototype.scan = function(){
  var cities = this.cities;
  console.log('扫描省份:' + this.name);
  for(var i = 0,city;city = cities[i++];){
      city.scan();
  }
}


var City = function(name){
  console.log(name);
  this.name = name;
}

City.prototype.scan = function(){
  console.log('开始扫描城市:' + this.name);
};


var config =  [
  {name : "湖南" , cities : [{name: "长沙" , country: []} ,"郴州"]},
  {name : "湖北" , cities : []}
];

var ProvinceListFacotry = function(config){
  var provinceList = [];
  for(var i =0,provinceConfig;provinceConfig = config[i++];){
     var province = new Province(provinceConfig['name']);
     CitiesFactory(province,provinceConfig['cities']);
     provinceList.push(province);
  }
  return provinceList;
};

var CitiesFactory = function(province,config){
  for(var i = 0,cityConfig;cityConfig = config[i++];){
      province.add(new City( cityConfig['name'] || cityConfig));
  }
}

var provinceList = ProvinceListFacotry(config);

for(var i = 0,province;province = provinceList[i++];){
  province.scan();
}
