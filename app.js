let result = document.getElementById("result");
let buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "C") {
      input = "";
      result.value = "";
    } else if (value === "=") {
      try {
        input = eval(input);
        result.value = input;
      } catch (error) {
        result.value = "Error";
      }
    } else {
      input += value;
      result.value = input;
    }
  });
});
