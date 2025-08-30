const buyButtons = document.querySelectorAll('.buy-btn');
const cardModal = document.getElementById('cardModal');
const successModal = document.getElementById('successModal');
const closeButtons = document.querySelectorAll('.close-modal');
const confirmPurchase = document.getElementById('confirmPurchase');
const customInput = document.getElementById('customInput');
const customPrice = document.getElementById('customPrice');

let selectedCoins = null;
let selectedPrice = null;

// Update custom price dynamically
customInput.addEventListener('input', () => {
  const coins = parseInt(customInput.value) || 0;
  const price = (coins * 0.0115).toFixed(2); // Dummy rate per coin
  customPrice.textContent = `$${price}`;
});

// Buy button click
buyButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const box = e.target.closest('.coin-box');
    selectedCoins = box.dataset.coins || customInput.value;
    selectedPrice = box.dataset.price || customPrice.textContent.replace('$','');

    if (!selectedCoins || selectedCoins <= 0) {
      alert("Please enter a valid custom coin amount!");
      return;
    }
    cardModal.style.display = 'flex';
  });
});

// Confirm Purchase
confirmPurchase.addEventListener('click', () => {
  cardModal.style.display = 'none';
  successModal.style.display = 'flex';
});

// Close modals
closeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cardModal.style.display = 'none';
    successModal.style.display = 'none';
  });
});
