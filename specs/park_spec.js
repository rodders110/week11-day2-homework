const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const Diet = require('../models/diet.js')

describe('Park', function() {

  let park;
  let dino1

  beforeEach(function () {
    park = new Park('Jurassic Park', 12);
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Tricerotops', 'herbivore', 100);
    dino3 = new Dinosaur('t-rex', 'carnivore', 60);
    diet = new Diet();

  });

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 12);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.add(dino1);
    assert.deepEqual(park.dinosaurs, [{"species": "t-rex", "diet": "carnivore", "guestsAttractedPerDay": 50}]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.add(dino1);
    assert.deepEqual(park.dinosaurs, [{"species": "t-rex", "diet": "carnivore", "guestsAttractedPerDay": 50}]);
    park.remove(dino1);
    assert.deepEqual(park.dinosaurs, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.add(dino1);
    park.add(dino2);
    assert.strictEqual(park.findPop(), 'Tricerotops');
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    assert.strictEqual(park.findAllBySpecies('t-rex').length, 2);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    assert.strictEqual(park.dinosaurs.length, 3);
    park.removeAllBySpecies('t-rex');
    assert.deepEqual(park.dinosaurs, [{"species": "Tricerotops", "diet": "herbivore", "guestsAttractedPerDay": 100}]);
  });

  it('should be able to get total daily guests attracted in total', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    assert.strictEqual(park.totalDailyVisitors(), 210);
  });

  it('should be able to get total guest attracted per year', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    assert.strictEqual(park.totalYearlyVisitors(), 76650);
  });

  it('should be able to calculate total annual revenue from ticket sales', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    assert.strictEqual(park.totalAnnualTicketSales(), 919800);
  });

  it('can create an object populated with diet counters for dinosaurs', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    diet.populate(park);
    assert.deepEqual([diet], [{carnivore: 2, herbivore: 1}]);
  });

});
