'use strict';

var ACCOMMODATION_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var CHECKIN_TIME = ['12:00', '13:00', '14:00'];
var CHECKOUT_TIME = ['12:00', '13:00', '14:00'];

var similarOffers = [];
for (var i = 0; i < 8; i++){
  similarOffers.push({
    "author": {
      "avatar":'img/avatars/user0(Math.floor(Math.random() * 8) + 1 ).png'},
      "offer": {
        "title": 'Заголовок объявления',
        "address": '600, 350',
        "price": Math.floor(Math.random() * 1000),
        "type": 'var accommodation = ACCOMMODATION_TYPE[Math.floor(Math.random()*ACCOMMODATION_TYPE.length)]',
        "rooms": Math.floor(Math.random() * 4),
        "guests": Math.floor(Math.random() * 3),
        "checkin": 'var checkin = CHECKIN_TIME[Math.floor(Math.random()*CHECKIN_TIME.length)]',
        "checkout": 'var checkout = CHECKOUT_TIME[Math.floor(Math.random()*CHECKOUT_TIME.length)]',
        "features": ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'], /* временно, пока не разобралась, как делать массив случайной длины*/
        "description": 'Здесь будет описание объявления',
        "photos": ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'], /* временно, пока не разобралась, как делать массив случайной длины*/
      },
      "location": {
        "x": Math.floor(Math.random() * 501) + 130,
        "y": Math.floor(Math.random() * 451) + 750,
      }
  });
}

document.querySelector('.map').classList.remove('map--faded');

var renderSimilarOffer = function (offer) {
  var offerElement =
};
