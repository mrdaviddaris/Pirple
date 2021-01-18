let men = ["Peter", "James", "Socrates", "Ceaser"];
let areAllMenMortal = true;

console.log("~Using if else~");
if (areAllMenMortal) {
  console.log("All men are mortal");

  // Checking if Socrates is a man
  for (i = 0; i < men.length; i++) {
    if (men[i] == "Socrates") {
      console.log("Socrates is a man");
      console.log("Therefore, Socrates is mortal");
    } else {
      console.log(men[i] + " is not Socrates but is mortal");
    }
  }
}

