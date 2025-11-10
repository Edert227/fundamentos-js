let elementos = document.querySelectorAll("#lista li");
elementos.forEach(function(item) {
  item.style.color = "green";
});
document.getElementById("lista").insertAdjacentHTML("beforebegin", "<p>✅ Lista cambiada a color verde</p>");
