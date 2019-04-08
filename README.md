# _Tamagotchi_

#### _A web application that recreates tamagotchi toy, Created 03/26/2019_

#### By _**Sam Stoia and Yulia Shidlovskaya**_

## Description

_A webpage that allows users to take care of tamagotchi digital pet._

## Specifications

* user can choose name of tamagotchi and birthdate start the game

* life cycle timer begins at start of game

* each "day" will have a daytime period and nighttime period, daytime will last 3/4 of "day", nighttime will last 1/4 of "day"

* tamagotchi will have 4 life cycles: baby, child, teen, adult

* tamagotchi has hunger level ranging from 0-5 (0 is not hungry, 5 is very hungry)

* tamagotchi has initial hunger of 2 when born and at the start of each day

* tamagotchi should be fed regularly to maintain good hunger level

* tamagotchi can be fed meals or snacks

* meals have point value of two, snacks have a point value of one

* there is a limit to 9 meal points per day (3 meals X 2, 3 snacks X 1)

* there is no limit on snacks, but tamagotchi can become sick if overfed snacks

* hunger level will go up by one for each daytime interval

* hunger level will go down based on point value of food being given (meal = 2, snack = 1)

* tamagotchi can become sick when overfed snacks

* user can give tamagotchi medicine to make it better

* to become healthy again, tamagotchi should be given medicine once

* tamagotchi can die if it stays sick without being given medicine for more than 3 days

* baby tamagotchi will poop five times a day, child 3 times a day

* when tamagotchi poops, it will leave behind droppings

* when droppings are left behind by tamagotchi, user should clean them up right away

* tamagotchi can become sick when it reaches six sickness points.  each uncleaned dropping is 1 points.  having hunger level reach 5 is 2 points.  having a sleepless night is two points, each additional snack over the 3 per day is one point;

* same rules apply for dealing with sick tamagotchi

* user can make tamagotchi sleep by turning off the light when it is nighttime

* if user forgets to turn off lights and tamagotchi doesn't sleep, it will contribute to making tamagotchi sick (the equivalent of having two droppings)

* tamagotchi will wake up automatically in the daytime

* if tamagotchi is sick for 2 days, it will die

## Setup/Installation Requirements

* Download and install Node.js
* Clone this repository: $ git clone repo name
* Change into the work directory: $ cd JS-tamagotchi
* Run the command $ npm install
* Run the command $ npm run build
* Run the command $ npm run start

## Support and contact details

_If you run into any issues or have questions, ideas or concerns. Please email us at sjullieb@gmail.com_

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery
* WebPack
* Node Package Manager

### License

*MIT*

Copyright (c) 2019 **_Sam Stoia and Yulia Shidlovskaya_**
