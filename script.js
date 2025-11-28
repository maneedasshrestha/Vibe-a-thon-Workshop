// Auto-update contributor count
function updateContributorCount() {
  const cards = document.querySelectorAll(
    ".contributor-card:not(.add-yourself)"
  );
  document.getElementById("contributor-count").textContent = cards.length;
}

// Call on page load
updateContributorCount();

// Add some interactivity
document
  .querySelectorAll(".contributor-card:not(.add-yourself)")
  .forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "translateY(-12px) scale(1.02)";
      setTimeout(() => {
        this.style.transform = "";
      }, 300);
    });
  });

// Animate stats on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const statNumber = entry.target.querySelector(".stat-number");
      const finalNumber = parseInt(statNumber.textContent);
      let currentNumber = 0;
      const increment = finalNumber / 30;

      const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= finalNumber) {
          statNumber.textContent = finalNumber;
          clearInterval(timer);
        } else {
          statNumber.textContent = Math.floor(currentNumber);
        }
      }, 50);
    }
  });
}, observerOptions);

document.querySelectorAll(".stat-card").forEach((card) => {
  observer.observe(card);
});
