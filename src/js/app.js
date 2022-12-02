const toggleBtn = document.getElementById("checkbox");
const mountly = document.querySelectorAll("#price-mouthly");
const annualy = document.querySelectorAll("#price-annualy");

const handleToggle = () => {
   annualy.forEach((item) => {
      item.classList.toggle("card__price--hidden");
   });
   mountly.forEach((item) => {
      item.classList.toggle("card__price--hidden");
   });
};

toggleBtn.addEventListener("click", handleToggle);
