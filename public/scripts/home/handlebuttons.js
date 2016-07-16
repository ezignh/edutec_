$(document).ready (function() {

	$("#selectRandomSeating").on("click", function(){
		window.location.href="/randomseats";
		
		return false;
	});

	$("#selectAscSeating").on("click", function(){
		window.location.href="/ascendingseats";
		
		return false;
	});

	$("#selectDescSeating").on("click", function(){
		window.location.href="/descendingseats";
		
		return false;
	});

	$("#selectRanPart").on("click", function(){
		window.location.href="/randomparticipation";
		
		return false;
	});

	$("#selectRanGroups").on("click", function(){
		window.location.href="/randomgroups";
		
		return false;
	});

	$("#aboutET").on("click", function() {
		window.location.href="/about";
	});

	$("#loginButton").on("click", function(){
		window.location.href="/register";
	});

	$("#registerButton").on("click", function(){
		window.location.href="/login";
	});

	$("#logoutButton").on("click", function(){
		window.location.href="/logout";
	});

});

