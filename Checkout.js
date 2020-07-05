console.log("Checkout page loaded...")
var cartBtn = document.getElementById("order-btn")
var prodDiv = document.getElementById("chk-detail");
var totalItem =  document.getElementById("total-item")
var totalPrice = document.getElementById("bold-price")

var cart = document.getElementById("cart-count")
if(localStorage.getItem("totalCount") === null){
	cart.innerHTML = 0;
}
else{
cart.innerHTML = localStorage.getItem("totalCount");
}

totalItem.innerHTML = localStorage.getItem("totalCount");
var itemList = window.localStorage.getItem("checkout-card")
var newArr= JSON.parse(itemList);
console.log(newArr)
var data = newArr[i]

var updatePrice = 0
	for(var i = 0; i < newArr.length; i++){
		updatePrice = updatePrice + newArr[i].price * newArr[i].count;
	}
totalPrice.innerHTML = updatePrice;

for(var i=0 ; i< newArr.length;i++){

  
	function createCard(data){
	var flexDiv = document.createElement("div");
	flexDiv.classList.add("item-flex")
	
	var mainDiv = document.createElement("div");
	mainDiv.classList.add("prod-info");
	
	var img = document.createElement("img");
	img.classList.add("checkout-img")
	img.src = newArr[i].preview;
	var descDiv = document.createElement("div");
	
	var heading = document.createElement("h4");
	heading.classList.add("prod-name")
	heading.innerText = newArr[i].name;
	
	var num = document.createElement("p");
	
	num.innerText = `x${newArr[i].count}`
	

	var price = document.createElement("p");
	price.innerText = newArr[i].price * newArr[i].count;
 	
	
	
	flexDiv.appendChild(mainDiv)
	prodDiv.appendChild(mainDiv)
	mainDiv.appendChild(img)
	descDiv.appendChild(heading)
	descDiv.appendChild(num)
	descDiv.appendChild(price)
	mainDiv.appendChild(descDiv);
	
   	
	return flexDiv
}
console.log(createCard())

}	

cartBtn.addEventListener("click", function(){
	confirm("Order Placed Successfully!");
	localStorage.clear();
});

