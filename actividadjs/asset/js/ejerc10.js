console.log("Ejercicio realizado por: Edert Guevara");
const ricos = [
  "Elon Musk",
  "Larry Ellison",
  "Jeff Bezos",
  "Larry Page",
  "Mark Zuckerberg",
  "Sergey Brin",
  "Bernard Arnault & family",
  "Jensen Huang",
  "Steve Ballmer",
  "Michael Dell"
];
console.log("💰 Las 10 personas más ricas del mundo son:");
ricos.forEach((persona, i) => {
  console.log((i + 1) + ". " + persona);
});
alert("💰 Las 10 personas más ricas del mundo son:\n\n" + ricos.join("\n"));
