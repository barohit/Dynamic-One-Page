
		var cart = []; 
		var prices = []; 
		var quantities = []
		var total = 0; 


		function display() {
			document.write("<html><head><link rel='stylesheet' type='text/css' href='design.css'></head><body></body></html>");
			var head = document.createElement("h1");
		
			head.setAttribute("id", "header"); 
			head.innerHTML = "Results"; 
			document.body.appendChild(head); 
			document.write("<br />")

			document.write("<div id='results2'> Your shopping cart is: ")
			document.write("<br />")
			for (var i = 0; i < cart.length; i++) {
				document.write(cart[i] + ": Quantity: " + quantities[i] +  ". Price: $" + prices[i]);
				document.write("<br />")
			}
			document.write("Total: $" + total.toFixed(2)); 
			document.write("</div>")
		};

		function addOrange() {
			if (!(cart.includes("Orange"))) {
				cart.push("Orange");
				prices.push(1.99);
				quantities.push(1);
			} else {
				var index = cart.indexOf("Orange"); 
				quantities[index] = quantities[index] + 1; 
				prices[index] = 1.99 * quantities[index];
			} 
			total += 1.99; 
		};

		function addBanana() {
			if (!(cart.includes("Banana"))) {
				cart.push("Banana");
				prices.push(1.49);
				quantities.push(1);
			} else {
				var index = cart.indexOf("Banana"); 
				quantities[index] = quantities[index] + 1; 
				prices[index] = 1.49 * quantities[index];
			} 
			total += 1.49; 
		};

		function addApple() {
			if (!(cart.includes("Apple"))) {
				cart.push("Apple");
				prices.push(1.99);
				quantities.push(1);
			} else {
				var index = cart.indexOf("Apple"); 
				quantities[index] = quantities[index] + 1; 
				prices[index] = 1.99 * quantities[index];
			} 
			total += 1.99; 
		};

		function addPeach() {
			if (!(cart.includes("Peach"))) {
				cart.push("Peach");
				prices.push(2.49);
				quantities.push(1);
				total += 2.49;
			} else {
				var index = cart.indexOf("Peach"); 
				quantities[index] = quantities[index] + 1; 
				prices[index] = 2.49 * quantities[index];
			} 
			total += 2.49; 
		};

		function addGrapes() {
			if (!(cart.includes("Grapes"))) {
				cart.push("Grapes");
				prices.push(3.19);
				quantities.push(1);
			} else {
				var index = cart.indexOf("Grapes"); 
				quantities[index] = quantities[index] + 1; 
				prices[index] = 3.19 * quantities[index];
			} 
			total += 3.19; 
		};

		function addPopcorn() {
			if (!(cart.includes("Popcorn"))) {
				cart.push("Popcorn");
				prices.push(12.99);
				quantities.push(1);
			} else {
				var index = cart.indexOf("Popcorn"); 
				quantities[index] = quantities[index] + 1; 
				prices[index] = 1.99 * quantities[index];
			} 
			total += 12.99; 
		};