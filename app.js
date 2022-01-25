/*===========HAM-MENU============*/

let hamMenu = document.getElementById("ham-menu")
let firstLine = document.getElementById("line-one");
let secondLine = document.getElementById("line-two");
let thirdLine = document.getElementById("line-three");
let visibleUl = document.getElementById("menu");


hamMenu.addEventListener('click', function(){


  firstLine.classList.toggle("line-one-ani");
  secondLine.classList.toggle("line-two-ani");
  thirdLine.classList.toggle("line-three-ani");

  visibleUl.classList.toggle("ham-menu-visible");
})



/*name typing*/

let i = 0;
let txt = ' Mindelvitte';
let speed = 120;

function typeWriter(){
  if (i<txt.length) {
    document.getElementById("com-name").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
}

window.onload = typeWriter;





/*====================Menu================

$("#ham-menu").click(function(){
  $("#menu").slideToggle("600")
  let firstLine = document.getElementById("line-one");
  let secondLine = document.getElementById("line-two");
  let thirdLine = document.getElementById("line-three");

  firstLine.classList.toggle("line-one-ani");
  secondLine.classList.toggle("line-two-ani");
  thirdLine.classList.toggle("line-three-ani");
});

/*==========GALERY-VISIBLE======*/

/*$("#gallery-link").click(function(){
  $("#images").slideToggle("600");

  let images = document.getElementById("images");
  images.classList.toggle("visible-images")
})*/