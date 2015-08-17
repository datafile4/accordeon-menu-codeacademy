var count = 4;
var blocksArray = new Array();
var container = document.getElementById("container");
var loremContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
//function for replace classes
function replaceClass(obj,cls1,cls2){
  var classes = obj.className.split(' ');
  for(var i=0;i<classes.length; i++){
    if(classes[i]==cls1){
      classes[i]=cls2;
      break;
    }
  }
  obj.className = classes.join(' ');
}
//function for add classes
function addClass(obj,cls){
  obj.className = obj.className+" "+cls;
}
//block constructor
function Block(blockID,checked,container){
  this.blockID = blockID;
  this.checked = checked;
  this.header = document.createElement("H3");
  this.div = document.createElement("DIV");
  this.container = container;
  container.appendChild(this.header);
  container.appendChild(this.div);
}

Block.prototype.expand = function(){
    var temp = document.getElementById("div"+this.blockID);
    replaceClass(temp,"hideClass","expandClass");
}

Block.prototype.hide = function(){
  console.log(this.blockID);
  var temp =document.getElementById("div"+this.blockID);
  replaceClass(temp,"expandClass","hideClass");
}

Block.prototype.setHeaderID = function(value){
  this.header.setAttribute("id",value);
}

Block.prototype.setDivID = function(value){
  this.div.setAttribute("id",value);
}

Block.prototype.setHeaderClasses = function(classes){
  addClass(this.header, classes);
}

Block.prototype.setDivClasses = function(classes){
  addClass(this.div,classes);
}

Block.prototype.setDivContent = function(content){
  this.div.innerHTML = content;
}

Block.prototype.setHeaderContent = function(content){
  this.header.innerHTML = content;
}

function move(number){
  for(var i=0; i<3; i++){
    if(i==number){
      blocksArray[i].expand();
      blocksArray[i].checked = true;
    } else {
      blocksArray[i].hide();
      blocksArray[i].checked = false;
    }
  }
}

  blocksArray[0] = new Block(0,true,container);
  blocksArray[0].setHeaderClasses("button-header borders");
  blocksArray[0].setDivClasses("div-content borders hideClass");
  blocksArray[0].setDivID("div"+0);
  blocksArray[0].expand();
  blocksArray[0].header.addEventListener('click', function(){move(0);});
  blocksArray[0].setDivContent(loremContent);

  blocksArray[1] = new Block(1,false,container);
  blocksArray[1].setHeaderClasses("button-header borders");
  blocksArray[1].setDivClasses("div-content borders hideClass");
  blocksArray[1].setDivID("div"+1);
  blocksArray[1].header.addEventListener('click', function(){move(1);});
  blocksArray[1].setDivContent(loremContent);

  blocksArray[2] = new Block(2,false,container);
  blocksArray[2].setHeaderClasses("button-header borders");
  blocksArray[2].setDivClasses("div-content borders hideClass");
  blocksArray[2].setDivID("div"+2);
  blocksArray[2].header.addEventListener('click', function(){move(2);});
  blocksArray[2].setDivContent(loremContent);
