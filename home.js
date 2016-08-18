// Michelle Togara Infos 254 Project 

// JavaScript Document 

// 1. SlideShow for Home Page

		var image1 = new Image() // images have to be preloaded first 
		image1.src = "bedroom.jpg"
		var image2 = new Image()
		image2.src = "golf.jpg"
		var image3 = new Image()
		image3.src = "spa.jpg"
		var image4 = new Image()
		image4.src = "suite.jpg"
		var image5 = new Image()
		image5.src = "day.jpg"
		var image6 = new Image()
		image6.src = "outside.jpg"
		
		var step = 1
		function slideit() {
			document.images.slide.src=eval("image"+step+".src")
		if(step<6) // if picture number is less than 6, proceed with slide show then return to 1. 
			step++
		else
			step=1
		setTimeout("slideit()",3000) // 3 second intervals
		}
		slideit()
			
			
		