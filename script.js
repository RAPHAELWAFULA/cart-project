document.addEventListener("DOMContentLoaded", () => {
  const cart = document.querySelector(".cart");
  const totalPriceElement = document.getElementById("total-price");

  function updateTotal() {
    let total = 0;
    cart.querySelectorAll(".item").forEach((item) => {
      const price = parseFloat(item.getAttribute("data-price"));
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    totalPriceElement.textContent = `Ksh ${total.toFixed(2)}`;
  }

  cart.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("increase")) {
      const quantityElement = target.previousElementSibling;
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
      updateTotal();
    } else if (target.classList.contains("decrease")) {
      const quantityElement = target.nextElementSibling;
      if (parseInt(quantityElement.textContent) > 1) {
        quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
        updateTotal();
      }
    } else if (target.classList.contains("delete")) {
      target.closest(".item").remove();
      updateTotal();
    } else if (target.classList.contains("like")) {
      target.classList.toggle("liked");
    }
    document.addEventListener("DOMContentLoaded", () => {
      // Select all elements with the class "like"
      const likeButtons = document.querySelectorAll(".like");

      likeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Toggle the 'liked' class on the button
          button.classList.toggle("liked");
          const likedIcon = button.querySelector("liked");
          button.classList.toggle("liked");
          likedIcon.classList.toggle("liked");
        });
      });
    });
  });

  updateTotal();
});
