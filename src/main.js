import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import Tamagotchi, { lifeCycleTicks, lifeCycleName, dayDuration, nightDuration } from './tamagotchi.js';

$(document).ready(function() {
  let tamagotchi;

  $('#gameStartForm').submit(function(event) {
    event.preventDefault();
    $('#openingForm').hide();
    let name = $('#inputName').val();
    let birthYear = parseInt($('#inputDate').val().substr(0, 4));
    let birthMonth = parseInt($('#inputDate').val().substr(5, 7));
    let birthDate = parseInt($('#inputDate').val().substr(8, 10));
    tamagotchi = new Tamagotchi(name, new Date(birthYear, birthMonth, birthDate));
    $('#gameStart').show();
    $('.tamagotchiName').append(tamagotchi.name)
  });

  $('#gameStartButton').click(function() {
    $('#gameStart').hide();
    $('#tamagotchiHome').show();
    $('#buttonContainer').show();
    $('#tamagotchiHunger').append(tamagotchi.hunger);
    $('#tamagotchiTiredness').append(tamagotchi.tiredness);

    tamagotchi.start();

  });
});
