import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

import Tamagotchi, { lifeCycleTicks, lifeCycleName, dayDuration, nightDuration } from './tamagotchi.js';
const lifeCycleImages = ['https://www.thespruce.com/thmb/REHCMZpetkTU1B4bGra-xkbRrTg=/2599x1922/filters:no_upscale():max_bytes(150000):strip_icc()/WELP_CHICK-57f187a63df78c690ffdee17.jpg',
'https://previews.123rf.com/images/khunaspix/khunaspix1403/khunaspix140300058/26710415-young-chicken-standing-on-white-background.jpg',
'https://thenypost.files.wordpress.com/2018/04/180404-teen-bites-chicken-head-off-feature.jpg?quality=90&strip=all&w=618&h=410&crop=1',
'https://cdn.inquisitr.com/wp-content/uploads/2017/11/14-Year-Old-Pakistani-Teen-Rapes-And-Kills-Neighbors-Pet-Chicken.jpg'];
$(document).ready(function() {
  let tamagotchi;

  $.ajax({
    url: `https://api.giphy.com/v1/gifs/random?tag=tamagotchi&api_key=UEGJVQedNxWPuSqwbryHMFAFED8cnuEO`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('#showGif').attr("src", `${response.data.image_url}`);
    },
    error: function() {
      $('#showGif').attr("src", 'https://chittagongit.com//images/error-image-icon/error-image-icon-18.jpg');
    }
  });

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
    setInterval(() => {
      if(!tamagotchi.isDaytime() && tamagotchi.tiredness!=0) {
        $('#sleepButton').show();
      } else {
        $('#sleepButton').hide();
      }

      $('#backgroundImage').attr("src", lifeCycleImages[tamagotchi.lifeCycleIndex]);

      tamagotchi.getSick();

      if(tamagotchi.sick) {
        $('.sickRow').show();
        $('#medicineButton').show();
      } else {
        $('.sickRow').hide();
        $('#medicineButton').hide();
      }

      $('#tamagotchiHunger').text(tamagotchi.hunger);
      $('#tamagotchiTiredness').text(tamagotchi.tiredness);
      $('#tamagotchiPoops').text(tamagotchi.droppings);
      $('#tamagotchiLifeCycle').text(lifeCycleName[tamagotchi.lifeCycleIndex]);
    }, 1000);

    tamagotchi.start();

    $('#feedSnack').click(function() {
      tamagotchi.feedSnack();
    });

    $('#feedMeal').click(function() {
      if(tamagotchi.hunger < 2){
        $("#cantDo").show();
        $("#cantDo").text("I'm not hungry enough for a meal!");
        setTimeout(function(){
          $("#cantDo").hide();
        }, 2000);
      } else {
        tamagotchi.feedMeal();
      }
    });

    $('#sleepButton').click(function(){
      tamagotchi.sleep();
      ('#sleepButton').hide();
    });

    $('#medicineButton').click(function(){
      tamagotchi.giveMedicine();
      $('#medicineButton').hide()
    });

    $('#cleanPoops').click(function() {
      if (!tamagotchi.droppings){
        $("#cantDo").show();
        $("#cantDo").text("There aren't any poops around!");
        setTimeout(function(){
          $("#cantDo").hide();
        }, 2000);
      }
      else{
        tamagotchi.cleanPoops();
      }
    });

  });
});
