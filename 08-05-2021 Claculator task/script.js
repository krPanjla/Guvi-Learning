function createEle(eleName, eleClass = "", eleId = "", eleInnerContent = "") {
  var ele = document.createElement(eleName);
  ele.className = eleClass;
  ele.id = eleId;
  ele.innerHTML = eleInnerContent;

  return ele;
}

document.body.style.padding = "15px";
var card = createEle("div", "card");
card.style.width = "400px";
card.style.margin = "auto";
card.style.marginTop = "100px";
card.style.background = "black";
card.style.borderRadius = "15px";

var cardBody = createEle("div", "card-body");

var upDisp = createEle("div", "", "inp", "0");
upDisp.style.marginTop = "20px";
upDisp.style.textAlign = "Right";
upDisp.style.height = "40px";
upDisp.style.color = "white";
cardBody.append(upDisp);

var display = createEle("div", "card", "out");
display.style.textAlign = "right";
display.style.paddingRight = "5px";
display.style.fontWeight = "bold";
display.style.height = "40px";

display.style.marginBottom = "70px";
cardBody.append(display);

function createBtn(number) {
  var btn = createEle("button", "btn", number, number);
  btn.style.background = "#9400D3";
  btn.style.borderRadius = "50%";
  btn.style.width = "50px";
  btn.style.height = "50px";
  btn.style.fontWeight = "bold";
  btn.style.color = "white";
  btn.style.marginLeft = "30px";
  btn.style.marginBottom = "30px";
  btn.addEventListener("click", clicked);
  return btn;
}

var btn7 = createBtn("7");
cardBody.append(btn7);

var btn8 = createBtn("8");
cardBody.append(btn8);

var btn9 = createBtn("9");
cardBody.append(btn9);

var btnP = createBtn("+");
btnP.style.background = "yellow";
btnP.style.color = "black";
cardBody.append(btnP);

var btn4 = createBtn("4");
cardBody.append(btn4);

var btn5 = createBtn("5");
cardBody.append(btn5);

var btn6 = createBtn("6");
cardBody.append(btn6);

var btnS = createBtn("-");
btnS.style.background = "yellow";
btnS.style.color = "black";
cardBody.append(btnS);

var btn1 = createBtn("1");
cardBody.append(btn1);

var btn2 = createBtn("2");
cardBody.append(btn2);

var btn3 = createBtn("3");
cardBody.append(btn3);

var btnX = createBtn("x");
btnX.id = "*";
btnX.style.background = "yellow";
btnX.style.color = "black";
cardBody.append(btnX);

var btnC = createBtn("C");
btnC.style.background = "red";
cardBody.append(btnC);

var btn0 = createBtn("0");
cardBody.append(btn0);

var btnE = createBtn("=");
btnE.style.background = "#28a745";
cardBody.append(btnE);

var btnD = createBtn("/");
btnD.style.background = "yellow";
btnD.style.color = "black";
cardBody.append(btnD);

card.append(cardBody);

document.body.append(card);
var exp = [];
function clicked(e) {
  try {
    var output = document.getElementById("out");
    var disp = document.getElementById("inp");
    var btn = e.target;

    if (btn.id === "=") {
      var ans = exp.join("");
      var outp = eval(ans);

      output.innerHTML = outp;

      exp = [];
    } else if (btn.id === "C") {
      disp.innerHTML = "";
      output.innerHTML = "";
      exp = [];
    } else {
      exp.push(btn.id);
      console.log(exp);

      disp.innerText = exp.join("");
    }
  } catch (error) {
    output.innerHTML = "Invalid Syntax";
    exp = [];
    //display.innerHTML=""
  }
}
