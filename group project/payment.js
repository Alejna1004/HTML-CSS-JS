const cardInput = document.getElementById("card");
const expiryInput = document.getElementById("expiry");
const form = document.getElementById("paymentForm");
const message = document.getElementById("message");

cardInput.addEventListener("input", () => {
  cardInput.value = cardInput.value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

expiryInput.addEventListener("input", () => {
  expiryInput.value = expiryInput.value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d{1,2})/, "$1/$2");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cardInput.value.replace(/\s/g, "").length !== 16) {
    message.style.color = "red";
    message.textContent = "Invalid card number!";
    return;
  }

  message.style.color = "green";
  message.textContent = "Payment processed successfully ✅";
}); 