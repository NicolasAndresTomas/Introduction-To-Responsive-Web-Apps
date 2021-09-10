let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("example1-1").innerHTML = text.length;

function myFunction() {
  var num = 15;
  var a = num.toString();
  var b = num.toString(2);
  var c = num.toString(8);
  var d = num.toString(16);

  var n = a + "<br>" + b + "<br>" + c + "<br>" + d;

  document.getElementById("example2-1").innerHTML=n;
}

const element = document.getElementById("intro");

document.getElementById("example3-1").innerHTML =
"The text from paragraph above: " + element.innerHTML;

const letters = new Set(["a","b","c"]);
document.getElementById("example3-2").innerHTML = letters.size;
