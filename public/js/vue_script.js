new Vue({
  el: '#menuList',
  data: {
      burgers: food
  }
})
var socket = io();
var orderArray = [];

new Vue({
    el: '#order',
    data: {
        showorder: false,
        burger: "tom",
        namn: "tom",
        email: "tom",
        betalmetod: "tom",
        identitet: "tom",
        order: orderArray
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
            socket.emit("addOrder", orderArray);
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



new Vue({
    el: '#dots',
    data: {
        orders: orderArray,
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        displayOrder: function(event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.orders.push({orderId: "T",
                              details: {x: event.clientX - 10 - offset.x,
                                        y: event.clientY - 10 - offset.y},
                              orderItems: ["Pasta", "Tomat"]
                             });
        }
    }
});
