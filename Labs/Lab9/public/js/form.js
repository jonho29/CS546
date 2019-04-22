(function() {
  const primeMethods = {
    isPrime(num) {
      if (typeof num === "undefined") throw "Invalid input--undefined";
      if (typeof num !== "number") throw "Invalid input--not a number";
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
      return num > 1;
    }
  };

  const staticForm = document.getElementById("static-form");

  if (staticForm) {
    // We can store references to our elements; it's better to
    // store them once rather than re-query the DOM traversal each time
    // that the event runs.
    const numberElement = document.getElementById("number");

    const errorContainer = document.getElementById("error-container");
    const errorTextElement = errorContainer.getElementsByClassName(
      "text-goes-here"
    )[0];

    const resultContainer = document.getElementById("attempts");

    // We can take advantage of functional scoping; our event listener has access to its outer functional scope
    // This means that these variables are accessible in our callback
    staticForm.addEventListener("submit", event => {
      event.preventDefault();

      try {
        // hide containers by default
        errorContainer.classList.add("hidden");

        // Values come from inputs as strings, no matter what :(
        const numberValue = numberElement.value;

        const parsedNumberValue = parseInt(numberValue);
        const result = primeMethods.isPrime(parsedNumberValue);

        if (isNaN(parsedNumberValue)) {
          errorTextElement.textContent = "Invalid input--not a number";
          errorContainer.classList.remove("hidden");
        } else if (result) {
          let node = document.createElement("LI");
          let textNode = document.createTextNode(
            parsedNumberValue + " is a prime number"
          );
          node.appendChild(textNode);
          node.className += "is-prime";
          resultContainer.appendChild(node);
          errorContainer.classList.add("hidden");
          errorTextElement.textContent = "";
        } else if (!result) {
          let node = document.createElement("LI");
          let textNode = document.createTextNode(
            parsedNumberValue + " is not a prime number"
          );
          node.appendChild(textNode);
          node.className += "not-prime";
          resultContainer.appendChild(node);
          errorContainer.classList.add("hidden");
          errorTextElement.textContent = "";
        }
      } catch (e) {
        errorTextElement.textContent = e;
        errorContainer.classList.remove("hidden");
      }
    });
  }
})();
