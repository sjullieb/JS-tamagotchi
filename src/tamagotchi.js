import $ from 'jquery';
export const lifeCycleTicks = [10, 20, 30, 40];
export const lifeCycleName = ["Baby", "Child", "Teenager", "Adult"];
export const dayDuration = 10;
export const nightDuration = 2;

export default class Tamagotchi {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    this.gender = 0;
    this.timer = 0; // increment of 10 seconds
    this.isTicking = false;
    this.hunger = 2;
    this.lifeCycleIndex = 0;
    this.sleeplessNights = 0;
    this.snacks = 0;
    this.droppings = 0;
    this.tiredness = 0;
    this.sick = false;
    this.dead = false;
  }

  start() {
    this.isTicking = true;
    this.gameTimeInterval = setInterval(() => {
      this.timer++;
      this.checkLifeCycle();
      this.increaseHunger();
      this.increaseTiredness();
    }, 1000);
  }

  pauseGame(){
    this.isTicking = false;
    clearInterval(this.gameTimeInterval);
  }

  checkLifeCycle(){
    if(this.timer >= lifeCycleTicks[this.lifeCycleIndex]){
      this.lifeCycleIndex++;
    }
  }

  isDaytime(){
    return (this.timer % (dayDuration + nightDuration) < dayDuration);
  }

  timeOfDay () {
    return (this.timer % (dayDuration + nightDuration));
  }

  increaseHunger() {
    //if(this.timeOfDay() % (dayDuration / 5) === 0 && this.hunger <= 5 && this.timeOfDay() < dayDuration) {
      this.hunger++;
    //}
  }

  feedSnack() {
    this.hunger-- ;
  }

  feedMeal() {
    if (this.hunger >= 2) {
      this.hunger -= 2;
      setTimeout(() => {
        this.droppings++;
      }, 5000);
    }
  }

  increaseTiredness() {
    //if(this.timeOfDay() % ((dayDuration + nightDuration) / 5) === 0) {
      this.tiredness++;
    //}
  }

  sleep() {
      this.tiredness = 0;
  }

  getSick() {
    let counter = 0;
    if (this.tiredness >= 5) {
      counter++;
    }
    if (this.hunger >= 5) {
      counter++;
    }
    if (this.droppings >= 3) {
      counter++;
    }
    if (counter >= 2){
      this.sick = true;
      if(counter==3)
      {
        this.die();
      }
    }
  }

  giveMedicine() {
    this.sick = false;
  }

  cleanPoops() {
      this.droppings = 0;
  }

  die() {
    this.dead = true;
    $('#tamagotchiHome').hide();
    $('#deadRow').show();
    $('#isDead').text(`${this.name} has died. Next time, make sure you take better care of it.`);
  }



}
