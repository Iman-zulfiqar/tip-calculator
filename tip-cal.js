let bill = 0;
let tip_percentage = 0;
let people = 0;
let num = document.getElementsByClassName("btn");
console.log(num);
let curr = null;
let rbill = document.getElementById("bill");
let rpeople = document.getElementById("people");
let tip_per_person = 0;
let bill_per_person = 0;

let tip_amount = document.getElementById("tip_amount");
let total_per_person = document.getElementById("total_per_person");
// calculator function
function calculator() {
  if (bill != 0 && tip_percentage != 0 && people > 0) {
    bill = parseInt(bill);
    tip_percentage = parseInt(tip_percentage);
    people = parseInt(people);

    let tip = (bill / 100) * tip_percentage;
    tip = parseFloat(tip);
    tip_per_person = tip / people;
    tip_per_person = parseFloat(tip_per_person).toFixed(2);
    bill_per_person = (tip + bill) / people;
    bill_per_person = parseFloat(bill_per_person).toFixed(2);
    if (tip_per_person == "NaN") {
      tip_per_person = 0.0;
      tip_per_person = parseFloat(tip_per_person).toFixed(2);
    }
    if (bill_per_person == "NaN") {
      bill_per_person = 0.0;
      bill_per_person = parseFloat(bill_per_person).toFixed(2);
    }
    tip_amount.innerHTML = "$" + tip_per_person;
    total_per_person.innerHTML = "$" + bill_per_person;
  }
}
// bill input
function input1() {
  bill = rbill.value;

  console.log(bill);
  calculator();
}
// tip input
function input3(a) {
  tip_percentage = num[a].value;
  console.log(tip_percentage);
  num[a].style.backgroundColor = "hsl(172, 67%, 45%)";
  num[a].style.color = "hsl(183, 100%, 15%)";

  if (curr == null) {
    curr = a;
  } else if (curr != a) {
    num[curr].style.backgroundColor = "hsl(183, 100%, 15%)";
    num[curr].style.color = "white";
    if (curr == 5) {
      num[curr].style.backgroundColor = "hsl(189, 41%, 97%)";
      num[curr].style.color = "hsl(183, 100%, 15%)";
      num[curr].value = null;
    }
    curr = a;
  }

  calculator();
}
// person input
function input2() {
  people = rpeople.value;
  console.log(people);
  if (people == 0) {
    document.getElementById("error").innerHTML = "can't be zero";
    let p = document.getElementById("people");
    p.style.border = "2px solid rgb(230, 103, 103)";
    p.style.outlineColor = " rgb(230, 103, 103)";
  } else if (people != 0) {
    document.getElementById("error").innerHTML = " ";
    let p = document.getElementById("people");
    p.style.border = " none";
    p.style.outlineColor = " hsl(172, 67%, 45%)";

    calculator();
  }
}
function reset() {
  bill = 0;
  rbill.value = null;
  people = 0;
  rpeople.value = null;
  tip_percentage = 0;
  console.log(curr);
  if (curr != null) {
    num[curr].style.backgroundColor = "hsl(183, 100%, 15%)";
    num[curr].style.color = "white";
    if (curr == 5) {
      num[curr].style.backgroundColor = "hsl(189, 41%, 97%)";
      num[curr].style.color = "hsl(183, 100%, 15%)";
      num[curr].value = null;
    }
  }
  tip_amount.innerHTML = "$0.00";
  total_per_person.innerHTML = "$0.00";
  let p = document.getElementById("people");
  p.style.border = " none";
  p.style.outlineColor = " hsl(172, 67%, 45%)";
  document.getElementById("error").innerHTML = " ";
}
