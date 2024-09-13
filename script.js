const checkBox = document.querySelector('#toggle')
const montchprice = document.querySelectorAll('.card-price-monthly')
const yearprice = document.querySelectorAll('.card-price-annually')

checkBox.addEventListener('change', () => {
	console.log(checkBox.checked)
	if (checkBox.checked) {
		for (let i = 0; i < montchprice.length; i++) {
			montchprice[i].style.display = 'block'
			yearprice[i].style.display = 'none'
		}
	} else {
		for (let i = 0; i < montchprice.length; i++) {
			montchprice[i].style.display = 'none'
			yearprice[i].style.display = 'block'
		}
	}
})
