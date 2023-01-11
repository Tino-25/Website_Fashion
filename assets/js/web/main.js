// Detail product
$(document).ready(function(){
	var plus_btn = document.querySelector('.chitietsp_quantity--plus');
	var minimus_btn = document.querySelector('.chitietsp_quantity--minus');
	var quantity_input = document.querySelector('#get_quantity');
	var current_quantity = 0;
	if(quantity_input != null){
		current_quantity = Number(quantity_input.getAttribute('value'));
	

		plus_btn.onclick = function() {
			quantity_input.setAttribute('value', current_quantity = current_quantity+1);
		}

		minimus_btn.onclick = function() {
			quantity_input.setAttribute('value', current_quantity = current_quantity-1);
			if(current_quantity <= 0){
				current_quantity = 1;
				quantity_input.setAttribute('value', 1);
			}
			
		}
	}


	function caculator_size(){

	}


	function suggest_size(category, weight, height){
		var suggestSize = document.getElementById("suggest-size")
		suggestSize.value = ""
		if(category==50){
			console.log("đồ nam")
			//weight>=50 && weight<=60 && height>=160 && height<=167
			if(weight>=55 && weight<=60 && height>=160 && height<=165){
				suggestSize.value = "S"
			}
			if(weight>=60 && weight<=65 && height>=166 && height<=169){
				suggestSize.value = "M"
			}
			if(weight>=66 && weight<=70 && height>=170 && height<=174){
				suggestSize.value = "L"
			}
			if(weight>=70 && weight<=76 && height>=174 && height<=176){
				suggestSize.value = "XL"
			}
			if(weight>=76 && weight<=80 && height>=165 && height<=177){
				suggestSize.value = "XXL"
			}
		}else if(category==51){
			console.log("đồ nữ")
			if(weight>=38 && weight<=43 && height>=148 && height<=153){
				suggestSize.value = "S"
			}
			if(weight>=43 && weight<=46 && height>=153 && height<=155){
				suggestSize.value = "M"
			}
			if(weight>=46 && weight<=53 && height>=153 && height<=158){
				suggestSize.value = "L"
			}
			if(weight>=53 && weight<=57 && height>=155 && height<=162){
				suggestSize.value = "XL"
			}
			if(weight>=57 && weight<=66 && height>=155 && height<=166){
				suggestSize.value = "XXL"
			}
		}
	}


			

	if(document.getElementById("modal_suggest")!=null){
		var showGender = document.getElementById("text-gender")
		var showWeight = document.getElementById("text-weight")
		var showHeight = document.getElementById("text-height")

		var category = 0;
		var weight = 0
		var height = 0
		$('input[name="category"]').change(function() {
		  	//alert("Hello " + $(this).val());
		  	category = $(this).val()
		  	showGender.innerHTML = $(this).val()
			suggest_size(category, weight, height)
		});

		$('input[name="weight"]').keyup(function() {
			showWeight.innerHTML=""
			weight = $(this).val()
			showWeight.innerHTML = $(this).val()+" kg"
			suggest_size(category, weight, height)
		})
		$('input[name="height"]').keyup(function() {
			showHeight.innerHTML=""
			height = $(this).val()
			showHeight.innerHTML = $(this).val()+" cm"
			suggest_size(category, weight, height)
			
		})


	}
});