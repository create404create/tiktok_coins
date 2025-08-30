const radios = document.querySelectorAll("input[name='coins']");
const customInputBox = document.getElementById("custom-input");
const customCoinsInput = document.getElementById("custom-coins");
const totalDisplay = document.getElementById("total");
const purchaseBtn = document.getElementById("purchaseBtn");
const successMessage = document.getElementById("success-message");

let selectedPrice = 0;

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "custom") {
      customInputBox.classList.remove("hidden");
      totalDisplay.textContent = "0";
      purchaseBtn.disabled = true;
    } else {
      customInputBox.classList.add("hidden");
      selectedPrice = parseInt(radio.dataset.price);
      totalDisplay.textContent = selectedPrice;
      purchaseBtn.disabled = false;
    }
  });
});

// Handle custom input calculation
customCoinsInput.addEventListener("input", () => {
  let coins = parseInt(customCoinsInput.value);
  if (!isNaN(coins) && coins > 0) {
    let price = (coins / 70).toFixed(2); // 1$ = 70 coins
    totalDisplay.textContent = price;
    purchaseBtn.disabled = false;
  } else {
    totalDisplay.textContent = "0";
    purchaseBtn.disabled = true;
  }
});

// Fake purchase
purchaseBtn.addEventListener("click", () => {
  successMessage.classList.remove("hidden");
  purchaseBtn.disabled = true;
});
