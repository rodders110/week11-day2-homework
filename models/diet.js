const Diet = function(){
  this.carnivore = 0;
  this.herbivore = 0;
}

Diet.prototype.populate = function(park){
  let dinosaurs = park.dinosaurs
  for (let dinosaur of dinosaurs){
    if(dinosaur.diet === 'carnivore'){
      this.carnivore += 1;
    }else if(dinosaur.diet === 'herbivore'){
      this.herbivore += 1;
    }
  }
}

module.exports = Diet;
