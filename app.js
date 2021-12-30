/*===========HAM-MENU============*/

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