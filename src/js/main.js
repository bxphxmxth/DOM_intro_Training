//Pour cibler un élément grâce à son id


let myH1Id = document.getElementById("monId");
console.log(myH1Id);

//Changer le texte d'un élément

myH1Id.innerHTML = "Wiii meric innerHTML"

//Pour cibler un élément grâce à sa class
//Stocke les élements dans un tableau (HTML Collection)

let myh1class = document.getElementsByClassName("maClass");
console.log(myh1class);

//Pour cibler un élement grâce à sa balise
//Stocke les élements dans un tableau (HTML Collection)

let mabaliseh2 = document.getElementsByTagName("h2");
console.log(mabaliseh2);
//Pour cibler un élement avec querySelector
//Peut cibler n'importe quel type d'élément (class/id/balise), mais ne cible que le premier

let myquery = document.querySelector("h3");
console.log(myquery);

//Pour cibler un élément avec querySelectorAll
//Stocke les élements dans un tableau (Node List)

let myqueryAll = document.querySelectorAll("h3");
console.log(myqueryAll);
//enlever un élément

myqueryAll[1].remove();


//Créer un élement balise via DOM

let elem1 = document.createElement("h5");
console.log(elem1);

//Créer un élément texte via DOM

let txt1 = document.createTextNode("Wesh la miff");
console.log(txt1);



//Je cible l'élément parent où je veux injecter mon nouvel élément

let myBody = document.querySelector("body");
console.log(myBody);


//J'attache un texte à mon h5

elem1.appendChild(txt1);

//J'attache mon h5 avec son texte à l'élément parent ciblé plus haut

myBody.appendChild(elem1)