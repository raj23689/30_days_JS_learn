function loadNumbers(selectElement) {
  for (let index = 0; index <= 100; index++) {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = index;
    selectElement.appendChild(option);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadNumbers(document.getElementById("select1"));
  loadNumbers(document.getElementById("select2"));

  const submitButton = document.getElementById("submitButton");
  const select1 = document.getElementById("select1");
  const select2 = document.getElementById("select2");
  const resultsDiv = document.getElementById("results");
  const guessedValue = document.getElementById("num1");

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const val1 = parseInt(select1.value);
    const val2 = parseInt(select2.value);
    const guess = parseInt(guessedValue.value);
    // console.log(val1, val2, guess);

    if (isNaN(val1) || isNaN(val2) || isNaN(guess)) {
      resultsDiv.textContent = "Please select a range and enter a guess.";
      return;
    }

    if (guess < val1 || guess > val2) {
      resultsDiv.textContent = `Please enter a guess between ${val1} and ${val2}.`;
      return;
    }

    const randomNumber = Math.floor(Math.random() * (val2 - val1 + 1)) + val1;

    if (guess === randomNumber) {
      resultsDiv.textContent = "Correct!";
    } else if (guess < randomNumber) {
      resultsDiv.textContent = "Too low. Try again.";
    } else {
      resultsDiv.textContent = "Too high. Try again.";
    }
  });
});
