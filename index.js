window.addEventListener("load", init);
function init() {
  document.body
    .getElementsByClassName("do-it")[0]
    .addEventListener("click", roll);
}

function roll() {
  const roll = getRolls(4);
  output(
    roll
      .map((i) => {
        switch (i) {
          case -1:
            return "-";
          case 1:
            return "+";
          default:
            return "0";
        }
      })
      .join(""),
    roll.reduce((acc, curr) => acc + curr, 0)
  );
}

function output(dice, sum) {
  const output = document.getElementsByClassName("output")[0];

  removeClass("latest");

  const line = document.createElement("div");
  line.title = Date().toLocaleString();
  line.className = "latest";
  line.innerHTML = `<span class=\"roll\">${dice}</span> = <span class=\"sum\">${sum}</span>`;
  output.prepend(line);
}

function removeClass(className, selector) {
  if (!selector) {
    selector = className;
  }
  const elements = Array.from(document.getElementsByClassName(selector));
  elements.forEach((element) => {
    element.className = element.className.replace(className, "");
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRolls(n) {
  const rolls = Array(n).fill(NaN);
  return rolls.map(() => getRandomInt(3) - 1);
}
