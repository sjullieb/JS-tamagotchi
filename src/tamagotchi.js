export const lifeCycleTicks = [100, 300, 600, 900];
export const lifeCycleName = ["Baby", "Child", "Teenager", "Adult"];
export const dayDuration = 20;
export const nightDuration = 5;

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
  }

  start() {
    this.isTicking = true;
    this.gameTimeInterval = setInterval(() => {
      this.timer++;
      this.checkLifeCycle();
      this.increaseHunger();
      this.increaseTiredness();
    }, 10000);
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
    if(this.timeOfDay() % (dayDuration / 5) === 0 && this.hunger <= 5 && this.timeOfDay() < dayDuration) {
      this.hunger++;
    }
  }

  feedSnack() {
    this.hunger-- ;
  }

  feedMeal() {
    this.hunger -= 2;
  }

  increaseTiredness() {
    if(this.timeOfDay() % ((dayDuration + nightDuration) / 5) === 0) {
      this.tiredness++;
    }
  }

}
