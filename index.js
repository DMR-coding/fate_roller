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
  output.style.display = "block";
  const line = document.createElement("div");
  line.innerHTML = `<span class=\"roll\">${dice}</span> = <span class=\"sum\">${sum}</span>`;
  output.prepend(line);
}

function getRolls(n) {
  const rolls = Array(n).fill(NaN);
  return rolls.map(() => Math.floor(Math.random() * 3) - 1);
}
