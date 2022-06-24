$(function() {
	$(".top-block").click(function() { 
		$('.main-navigation').slideToggle(400); 
	  });
	
	  function newWindow(){
		new_window = window.open("http://localhost:3000/pfr-folio.html");
	  }
	   
	  function closeWindow(){
		new_window.close();
	  }
	});
	