let selectedPack = null;

document.querySelectorAll(".pack").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pack").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    selectedPack = btn;
  });
});

document.getElementById("payBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const cardNum = document.getElementById("cardNumber").value.trim();

  if (!username) {
    document.getElementById("message").innerText = "Please enter TikTok username!";
    return;
  }

  if (!selectedPack) {
    document.getElementById("message").innerText = "Please select a coin package!";
    return;
  }

  if (cardNum.length < 16) {
    document.getElementById("message").innerText = "Invalid card number!";
    return;
  }

  // Fake success popup
  document.getElementById("successModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("successModal").style.display = "none";
});
