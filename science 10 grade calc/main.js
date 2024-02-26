// Button click listener
document.getElementById("btn1").addEventListener("click", finalGrade);

function finalGrade() {
  console.log("page is running");
  //Input
  let one = +document.getElementById("one").value;
  let two = +document.getElementById("two").value;
  let three = +document.getElementById("three").value;

  //Proccess
  let avg = Math.sqrt(one + two + three / 3);
  let msg = `Grade = ${avg}`;

  // Output
  document.getElementById("out").innerHTML = avg;

  if (avg <= 70) {
    alert("Good job");
  } else if (avg <= 50) {
    alert("Study better");
  } else if (avg >= 80) alert("amazing");
}
