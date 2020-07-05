$(function(){
	
	$("#slider").slick({
		dots : true,
		autoplay: true,
		autoplaySpeed: 1000 
	})
	
var mainCard = document.getElementById("card");
var mainImg = document.getElementById("main-img")
var product = document.getElementById("prod")
var brand = document.getElementById("brand-name")
var cardFlex = document.getElementById("card-flex")
var cardWrapper = document.getElementById("card-wrapper")
var prodPrice = document.getElementById("prod-price");
var accCard = document.getElementById("card-wrapper-acc")
var cart = document.getElementById("cart-count")

if(localStorage.getItem("totalCount") === null){
	cart.innerHTML = 0;
}
else{
cart.innerHTML = localStorage.getItem("totalCount");
}

var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product"  ,true);
xhttp.send();
xhttp.onreadystatechange = function(){
	if(xhttp.readyState === 4){
		if(xhttp.status === 200){
		var response= JSON.parse(xhttp.responseText);
		for(var i =0;i< response.length; i++){
		var data = response[i];
		console.log(response[i]);
		var create = createCard(data);
		if(response[i].isAccessory != true){
		cardWrapper.appendChild(create)
		}
		else{
			accCard.appendChild(create)
			}
		}
		}
		else{
			
		}
	}
}
function createCard(data){
	var mainDiv = document.createElement("div");
	mainDiv.classList.add("card");
	
	var hyperlink = document.createElement("a")
	hyperlink.href = "prodDetail.html?id=" + data.id;
	
	var img = document.createElement("img");
	mainDiv.appendChild(img);
	
	var cardDesc = document.createElement("div");
	cardDesc.classList.add("card-desc")
	
	var prodName = document.createElement("h4");
	var brandName = document.createElement("h5");
	var price = document.createElement("p");
	
	cardDesc.appendChild(prodName);
	cardDesc.appendChild(brandName);
	cardDesc.appendChild(price);
	mainDiv.appendChild(cardDesc);
	hyperlink.appendChild(img);
	hyperlink.appendChild(cardDesc);
	mainDiv.appendChild(hyperlink);
	img.src = data.preview;
		prodName.innerHTML = data.name;
		brandName.innerHTML = data.brand;
		price.innerHTML = data.price;
	return mainDiv;
}
	
})
