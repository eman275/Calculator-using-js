function back(){
			var exp = document.calculatrice.textview.value;
            document.calculatrice.textview.value = exp.substring(0,exp.length-1); 
		}
		document.addEventListener('contextmenu' , event => event.preventDefault());