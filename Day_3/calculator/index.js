function mul() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const output = document.getElementById("output");

  const result = parseFloat(num1.value) * parseFloat(num2.value);
  output.innerText = `Result: ${result}`;
}

function div() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const output = document.getElementById("output");

  if (parseFloat(num2.value) === 0) {
    alert("Cannot divide by zero!");
    return;
  }

  const result = parseFloat(num1.value) / parseFloat(num2.value);
  output.innerText = `Result: ${result}`;
}
