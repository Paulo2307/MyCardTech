function myFunction() {
  var x = document.getElementById("MyLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.addEventListener('click', function(event) {
    var menu = document.getElementById('MyLinks');
    var button = document.getElementById('menu-btn');

    if(menu.style.display === 'block' && 
      !menu.contains(event.target) && 
      !button.contains(event.target)) {
    menu.style.display = 'none';
    };
});