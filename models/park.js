const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(indexOfDinosaur, 1)
};

Park.prototype.dinosaurWithMostVisitors = function(dinosaur){
  return Math.max.apply(this.dinosaurCollection.map(dinosaur => dinosaur.guestsAttractedPerDay));
};



module.exports = Park;
