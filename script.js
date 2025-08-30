// Buy button click event
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    if (parent.classList.contains("custom-box")) {
      const customValue = document.getElementById("customInput").value;
      if (customValue && customValue > 0) {
        alert(`You selected ${customValue} custom coins`);
      } else {
        alert("Please enter a valid coin number");
      }
    } else {
      const coins = parent.querySelector(".coins").textContent;
      const price = parent.querySelector(".price").textContent;
      alert(`You selected ${coins} for ${price}`);
    }
  });
});
