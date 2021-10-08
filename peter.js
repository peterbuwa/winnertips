let sliderIndex = 0;
		plusSlides();
		function plusSlides(){
		let image = document.getElementsByClassName("bet1");
		for(let i = 0; i < image.length; i++){
		image[i].style.display= "none";}
		
		sliderIndex++;
		if(sliderIndex > image.length){sliderIndex = 1;}
		image[sliderIndex - 1].style.display= "block";
		setTimeout(plusSlides, 3000)
		}