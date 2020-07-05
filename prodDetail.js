
var response
var btn = document.getElementById("cart-btn");
var cart = document.getElementById("cart-count");
var mainInfo = document.getElementById("main-page")
var mainImg = document.getElementById("main-pic")
var heading = document.getElementById("prod-head")
var brandName = document.getElementById("prod-name")
var prodPrice = document.getElementById("price")
var prodDesc = document.getElementById("desc")
var previewPic = document.getElementById("prod-img")
var descDiv = document.getElementById("prod-desc")
var cart = document.getElementById("cart-count")
if(localStorage.getItem("totalCount") === null){
	cart.innerHTML = 0;
}
else{
cart.innerHTML = localStorage.getItem("totalCount");
}

var cardId = window.location.search.split("=")[1];
var sum = 0;

var localArr = localStorage.getItem("checkout-card");
			if(localArr === null){
				localStorage.setItem("checkout-card",[]);
				localStorage.setItem("totalCount",0);
			}



var xhttp = new XMLHttpRequest();
xhttp.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + cardId,true);
xhttp.send();
xhttp.onreadystatechange = function(){
	if(xhttp.readyState === 4){
	 response = JSON.parse(xhttp.responseText);
		
		mainImg.src = response.preview;
		heading.innerHTML = response.name;
		brandName.innerHTML = response.brand;
		prodPrice.innerHTML = response.price
		prodDesc.innerHTML = response.description;
	
		for(var i = 0;i<response.photos.length;i++){
			var data = response.photos[i]
			
			previewPic.appendChild(imgPreview(data));
			
			/*subPic.addEventListener("click",()=>showImg(subPic.src)
			);*/
		}

			function imgPreview(mVar){
				var subPic = document.createElement("img")
			subPic.src = mVar;
			
			subPic.addEventListener("click",function(){
			for(var i = 0; i<document.getElementsByClassName("border").length;i++ ){
			
				document.getElementsByClassName("border")[i].classList.remove("border")
			
			}	
				mainImg.src = mVar;
				subPic.classList.add("border")
			}
			)
			 return subPic;
			}
		
		
			//storing card in local storage
		function clickCard(res){
			
		
			var newArr = localStorage.getItem("checkout-card");
			if(newArr != null && newArr != []){
			newArr = JSON.parse(newArr)
				var isPresent = false;
				newArr.map(function(item){
					if(item.id === res.id){
						isPresent = true;
						item.count += 1;
						let mCount=localStorage.getItem("totalCount")
						mCount++;
						localStorage.setItem("totalCount",mCount)
					}
				})
				if(!isPresent){
					res.count = 1
					newArr.push(res);
					let mCount=localStorage.getItem("totalCount")
						mCount++;
						localStorage.setItem("totalCount",mCount)
				}

			localStorage.setItem("checkout-card",JSON.stringify(newArr));
			}
			else{
				res.count = 1;
				var arr = []
				arr.push(res);
				localStorage.setItem("checkout-card",JSON.stringify(arr));
				let mCount=localStorage.getItem("totalCount")
						mCount++;
						localStorage.setItem("totalCount",mCount)
						
			}
			
			cart.innerHTML = localStorage.getItem("totalCount");
           
		}
		
			btn.addEventListener("click", ()=>clickCard(response))
		
	}
	
}	
				
