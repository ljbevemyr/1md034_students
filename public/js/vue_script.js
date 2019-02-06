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
        gata: "tom",
        husnummet: "tom",
        betalmetod: "tom",
        identitet: "tom"
    },
    methods: {
        markDone: function() {
            var data = getFormData();
            this.showorder = true;
            this.burger = getBurgers().join(", ");
            this.namn = data[0];
            this.email = data[1];
            this.gata = data[2];
            this.husnummer = data[3];
            this.betalmetod = data[4];
            this.identitet = data[5];

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
