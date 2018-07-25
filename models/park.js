const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.add = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function(dinosaur){
  let index = this.dinosaurs.indexOf(dinosaur);

  if (index !== -1) {
        this.dinosaurs.splice(index, 1);
    }
}

Park.prototype.findPop = function(){
  let best = this.dinosaurs[0];
  for (let dinosaur of this.dinosaurs){
    if(best.guestsAttractedPerDay < dinosaur.guestsAttractedPerDay){
      best = dinosaur;
    }
  }
  return best.species;
}

Park.prototype.findAllBySpecies = function(species){
  let result = [];
  for (let dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      result.push(dinosaur);
    }
  }
  return result;
}

Park.prototype.removeAllBySpecies = function(species){
  let clone = this.dinosaurs;
  for (let dinosaur of clone){
    if(dinosaur.species === species){
      this.remove(dinosaur);
    }
  }
}

Park.prototype.totalDailyVisitors = function(){
  let result = 0;
  for (let dinosaur of this.dinosaurs){
    result += dinosaur.guestsAttractedPerDay;
  }
  return result;
}

Park.prototype.totalYearlyVisitors = function(){
  let result = this.totalDailyVisitors();
  return result * 365;
}

Park.prototype.totalAnnualTicketSales = function(){
  return (this.totalYearlyVisitors() * this.ticketPrice);
}


module.exports = Park;
