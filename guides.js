 function showPrice(id) {
    var countrySelect = document.getElementById("country-select-" + id).value;
    var argentinaPrice = document.getElementById("argentina-price-" + id);
    var otrosPrice = document.getElementById("otros-price-" + id);

    argentinaPrice.style.display = "none";
    otrosPrice.style.display = "none";

    if (countrySelect === "argentina") {
      argentinaPrice.style.display = "block";
    } else if (countrySelect === "otros") {
      otrosPrice.style.display = "block";
    }
  }
