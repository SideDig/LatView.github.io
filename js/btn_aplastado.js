document.addEventListener('DOMContentLoaded', function() {
  var botones = document.querySelectorAll(".boton");

  botones.forEach(function(boton) {
    boton.addEventListener("mousedown", function() {
      boton.classList.add("presionado");
    });
  
    boton.addEventListener("mouseup", function() {
      boton.classList.remove("presionado");
    });
  });
   
  });
    
