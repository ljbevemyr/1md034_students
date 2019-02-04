/*function MenuItem(bn, bs, a, im) {
    this.burgerName = bn; 
    this.burgerSpice = bs;
    this.allergies = a;
    this.image = im;
    this.nameSpice = function() {
        return this.burgerName + ' ' + this.burgerSpice;
    };
}

var fireBurger = new MenuItem('Fire burger', '2', 'Gluten', "https://www.bacoaburger.com/wp-content/uploads/labacoa-bacoa-burger-426x278.jpg");

var snowBurger = new MenuItem('Snow burger', '3', 'Gluten och Lactose', "https://www.bacoaburger.com/wp-content/uploads/b-montesa-2-394x278.jpg");

var rainBurger = new MenuItem('Rain burger', '1', '', "https://www.bacoaburger.com/wp-content/uploads/australiana-bacoa-burger-392x278.jpg");

var windBurger = new MenuItem('Wind burger', '3', 'Gluten och Lactose', "https://www.bacoaburger.com/wp-content/uploads/japonesa-bacoa-burger-392x278.jpg");

var stormBurger = new MenuItem('Storm burger', '2', 'Lactose', "https://www.bacoaburger.com/wp-content/uploads/clasica-bacoa-burger-395x278.jpg");

var menuArray = [fireBurger, snowBurger, rainBurger, windBurger, stormBurger];
var indexArray = ["fire", "sea", "mountain", "forest", "snow", "rain", "cloud", "wind"];
*/

new Vue({
  el: '#menuList',
  data: {
      burgers: food
  }
})
 
new Vue({
    el: '#order',
    methods: {
        markDone: function() {
            var confirmForm = document.getElementById('confirmForm');
            var food = document.getElementById('orderFood');
            food.innerHTML = getBurgers().join(", ");
            
            var adress = document.getBurgers('orderAdress');
            adress.innerHTML = 
            
            confirmForm.style.display = "block";
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
    var gata = document.getElementById('gata').value;
    var husnummer = document.getElementById('husnummer').value;
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

    var formArray = [namn, email, gata, husnummer, betalmetod, identitet]
    return formArray;
}
