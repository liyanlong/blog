var File = function(name){
  this.name = name;
  this.parent = null;
};

File.prototype.remove = function(){
  if(! this.parent instanceof Folder){
    return ;
  }
  this.parent.remove(this);
  return this;
};

File.prototype.scan = function(){
  console.log('扫描文件:' + this.name);
};

var Folder = function(name){
  this.name  = name;
  this.files = [];
};

Folder.prototype.add = function(file){
  if(file instanceof File){
    file.parent = this; // 指向文件夹
    this.files.push(file);
  }
  return this;
};

Folder.prototype.get = function(name){
  var files = new Iterator(this.files);
  while(files.next()){
    var item = files.currentItem();
    if(item.name == file){
      return item;
    }
  }
  return null;
}

Folder.prototype.remove = function(file){
  var files = new Iterator(this.files);
  while(files.next()){
    if(files.currentItem() == file){
        return files.remove();
    }
  }
}

Folder.prototype.scan = function(){
  console.log('扫描文件夹:' + this.name);
  var files = new Iterator(this.files);
  while(files.next()){
      files.currentItem().scan();
  }
}

var Iterator = function(ary) {
  var length = ary.length;
  var index = -1;
  return {
    index: function() {
      return index;
    },
    next: function() {
      return ++index < length;
    },
    currentItem: function() {
      return ary[index];
    },
    remove : function(){
      if(index >= 0 && index < length){
        var item = ary.splice(index,1);
        length = ary.length;
        return item[0];
      }
      return ;
    },
    prev: function() {
      return index-- > 0;
    },
    first: function() {
      index = 0;
      return this;
    },
    last: function() {
      index = length;
      return this;
    }
  };
};

var folder = new Folder("文件夹1");
var file   = new File("文件123");
var file2  = new File("文件234");
folder.add(file).add(file2);
file.remove();
folder.scan();
