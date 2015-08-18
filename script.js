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
  this.paragraph = document.createElement("P");
  this.div.appendChild(this.paragraph);
  this.arrow = document.createElement("I");
  this.arrow.className="fa fa-arrow-right rotateNormal";
  this.header.appendChild(this.arrow);
  this.container = container;
  container.appendChild(this.header);
  container.appendChild(this.div);
}

Block.prototype.expand = function(){
    replaceClass(this.div,"hideClass","expandClass");
    replaceClass(this.arrow,"rotateNormal","rotateAnormal");
}

Block.prototype.hide = function(){
  replaceClass(this.div,"expandClass","hideClass");
  replaceClass(this.arrow,"rotateAnormal","rotateNormal");
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
  this.paragraph.innerHTML = content;
}

Block.prototype.setHeaderContent = function(content){
  this.header.innerHTML = content;
}

Block.prototype.addClick = function(i){
  this.header.addEventListener('click', function(){move(i);});
}

function move(number){
  for(var i=0; i<count; i++){
    if(i==number){
      blocksArray[i].expand();
      blocksArray[i].checked = true;
    } else {
      blocksArray[i].hide();
      blocksArray[i].checked = false;
    }
  }
}

  for(var i=0; i<count; i++){
    blocksArray[i] = new Block(i,true,container);
    blocksArray[i].setHeaderClasses("button-header borders");
    blocksArray[i].setDivClasses("div-content borders hideClass");
    blocksArray[i].setDivID("div"+i);
    blocksArray[i].setHeaderID("header"+i);
    blocksArray[i].setDivContent(loremContent);
    blocksArray[i].addClick(i);
  }
blocksArray[0].expand();
