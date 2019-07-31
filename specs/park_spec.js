const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaurCollection;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 1000)
    dinosaur2 = new Dinosaur('Stegasaurous', 'Carnivore', 500)
    dinosaur3 = new Dinosaur('Diplodocus', 'Herbivore', 100)
    dinosaurCollection = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park('Jurassic Park', 10, dinosaurCollection)
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function(){
    const expected = []
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurCollection, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur2];
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaurCollection);
    // park.dinosaurWithMostVisitors(dinosaurCollection)
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurWithMostVisitors(dinosaurCollection), expected)
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
