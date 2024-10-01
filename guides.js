function showPrice() {
  var countrySelect = document.getElementById("country-select").value;
  var argentinaPrice = document.getElementById("argentina-price");
  var otrosPrice = document.getElementById("otros-price");

  // Ocultar ambos div por defecto
  argentinaPrice.style.display = "none";
  otrosPrice.style.display = "none";

  // Mostrar el precio según el país seleccionado
  if (countrySelect === "argentina") {
    argentinaPrice.style.display = "block";
  } else if (countrySelect === "otros") {
    otrosPrice.style.display = "block";
  }
}
