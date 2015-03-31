var MakeSquareDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('square');


};

MakeSquareDancer.prototype = Object.create(MakeDancer.prototype);
MakeSquareDancer.prototype.constructor = MakeSquareDancer;
MakeSquareDancer.prototype.oldStep = MakeDancer.prototype.step;


MakeSquareDancer.prototype.step = function(){
    this.oldStep();
    this.$node.toggle();
  };