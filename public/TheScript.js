// window.onload = pageReady;
// function pageReady(){
//   console.log("Hello");

//   /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  

//   var profile = document.getElementById("profile");
//   var profile2 = document.getElementById("profile2");
//   profile.onmouseover = switchPic;
//   profile2.onmouseout = switchPic2;

//   function switchPic(){
//     profile.src = profile2.src;
//   }
//   function switchPic2(){
//     profile2.src = profile.src;
//   }

//   function resetPic(){
//     profile.src = "/img/profile.jpeg";
//   }

  
// }

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}