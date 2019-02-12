var socket = io();
var orderArray = {};

new Vue({
  el: '#menuList',
  data: {
      burgers: food
  }
})

new Vue({
    el: '#order',
    data: {
        showorder: false,
        burger: "tom",
        namn: "tom",
        email: "tom",
        betalmetod: "tom",
        identitet: "tom",
        coordinates: {"x":"", "y":""}
    },
    methods: {
        markDone: function() {
            var data = getFormData();
            this.showorder = true;
            this.burger = getBurgers().join(" - ");
            this.namn = data[0];
            this.email = data[1];
            this.betalmetod = data[2];
            this.identitet = data[3];
        },
        displayOrder: function() {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.coordinates.x= event.clientX - 10 - offset.x;
            this.coordinates.y= event.clientY - 10 - offset.y;
        }
    }
});


function getBurgers() {
    var checkedBurgerArray = document.getElementsByClassName('burgerCheck');
    var chosenBurgers = [];
    var arrayLength = checkedBurgerArray.length;
    for (var i = 0; i < arrayLength; i++) {
        if (checkedBurgerArray[i].checked) {
            chosenBurgers.push(checkedBurgerArray[i].id);
        }
    }
    return chosenBurgers;
}

function getFormData() {
    var namn = document.getElementById('namn').value;
    var email = document.getElementById('email').value;
    var betalmetod = document.getElementById('betalmetod').value;
    var identitet = "";

    if(document.getElementById('hemligAgent').checked) {
        identitet = "Hemlig Agent";
    }
    if(document.getElementById('enhörning').checked) {
        identitet = "Enhörning";
    }
    if(document.getElementById('clarkKent').checked) {
        identitet = "Clark Kent";
    }
    if(document.getElementById('farbrorBåtsman').checked) {
        identitet = "Farbror Båtsman";
    }

    var formArray = [namn, email, betalmetod, identitet]
    return formArray;
}
