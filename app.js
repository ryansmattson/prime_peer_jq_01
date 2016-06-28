$(function(){

var carArray = [];
var timesSubmitted = 0;
var totalPrice = 0;

$('h1 span').html('Total: ' + totalPrice);  //remove from the total price

//new Car constructor
function Car(make, model, year, color, rating, price){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.rating = rating;
  this.price = price;
}


//push new car into carArray after SUBMIT
$('#carInputForm').on('submit', function(event){
  event.preventDefault();
  var tempMake = $('#make').val();
  var tempModel = $('#model').val();
  var tempYear = $('#year').val();
  var tempColor = $('#color').val();
  // var tempRating = $('#rating').val();
  var tempRating = $('input[name=rating]:checked', '#carInputForm').val()
  var tempPrice = $('#price').val();

  carArray.push(new Car(tempMake, tempModel, tempYear, tempColor, tempRating, tempPrice));

  console.log(carArray);

  var ratingColor = '';

//find rating of car inputed and give assign the class to that color.
  switch (tempRating){
    case '1':
    ratingColor = 'red';
    break;

    case '2':
    ratingColor = 'orange';
    break;

    case '3':
    ratingColor = 'yellow';
    break;

    case '4':
    ratingColor = 'greenyellow';
    break;

    case '5':
    ratingColor = 'green';
    break;
  }

//add new box with car info in it
  $('#carListSection').append('<article class="' + ratingColor + '">' +
                                '<h3> Car: ' + (timesSubmitted + 1) + '</h3>' +
                                '<span class="label label-danger"> Remove </span>' +
                                '<li> Make: ' + carArray[timesSubmitted].make + '</li>' +
                                '<li> Model: ' + carArray[timesSubmitted].model + '</li>' +
                                '<li> Year: ' + carArray[timesSubmitted].year + '</li>' +
                                '<li> Color: ' + carArray[timesSubmitted].color + '</li>' +
                                '<li> Rating: ' + carArray[timesSubmitted].rating + '</li>' +
                                '<li> Price: <span class="getPrice">' + carArray[timesSubmitted].price + '</span></li>' +
                              '</article>');

  totalPrice += parseInt(carArray[timesSubmitted].price);
  console.log(totalPrice);

  timesSubmitted++;
  $('form').trigger('reset');  //reset text boxes
  $('h1 span').html('Total: ' + totalPrice);  //add to the total price
})


//remove car box when button is clicked
$('#carListSection').on('click', 'span.label-danger', function(event){
  event.preventDefault();
  $(this).parent().remove();
  totalPrice -= parseInt($(this).parent().find('.getPrice').html());
  $('h1 span').html('Total: ' + totalPrice);  //remove from the total price
})




})//end
