function MenuItem(bn, bs, a, im) {
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

var myElement = document.getElementById("menuJava");

function MenuBox(n) {
    var box = document.createElement("div");
    box.classList.add("box");
    box.classList.add(indexArray[n]);
    
    var name = document.createElement("h3");
    var newContent = document.createTextNode(menuArray[n].burgerName);
    name.appendChild(newContent); 
    box.appendChild(name);
    
    var imgItem = document.createElement("IMG");
    imgItem.setAttribute("src", menuArray[a].image);
    imgItem.setAttribute("width", "300");
    box.appendChild(imgItem);
    
    var infoList = document.createElement("ul");
    var infoElem1 = document.createElement("li");
    var spice = document.createTextNode(menuArray[n].burgerSpice);
    infoElem1.appendChild(spice);
    infoList.appendChild(infoElem1);
    var infoElem2 = document.createElement("li");
    var allergies = document.createTextNode(menuArray[n].allergies);
    infoElem2.appendChild(allergies);
    infoList.appendChild(infoElem2);
    box.appendChild(infoList); 

    myElement.appendChild(box);
}


for (var a in menuArray) {

    MenuBox(a);
}

var myButton = document.getElementById("button");
myButton.onclick = function() {
    console.log("clicked");
}
