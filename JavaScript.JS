document.getElementById("mostrar-informacion").addEventListener("click", function() {
    var informacion = document.getElementById("informacion");
    if (informacion.style.display === "none") {
      informacion.style.display = "block";
    } else {
      informacion.style.display = "none";
    }
  });