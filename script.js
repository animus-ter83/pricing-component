const checkBox = document.querySelector('#toggle');
const monthlyPrices = document.querySelectorAll('.card-price-monthly');
const yearlyPrices = document.querySelectorAll('.card-price-annually');

function togglePrices(showMonthly) {
  for (let i = 0; i < monthlyPrices.length; i++) {
    monthlyPrices[i].style.display = showMonthly ? 'block' : 'none';
    yearlyPrices[i].style.display = showMonthly ? 'none' : 'block';
  }
}

togglePrices(checkBox.checked);

checkBox.addEventListener('change', () => {
  togglePrices(checkBox.checked);
});