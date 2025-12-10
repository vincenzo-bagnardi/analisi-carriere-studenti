function tutto(){
	$('#mappa').show();$('#dashboard').show();$('#graficoDiv').show();$('#cdlDiv').show();$('#helpDiv').show();
}
function mappa(){
	$('#mappa').show();$('#dashboard').hide();$('#graficoDiv').hide();$('#cdlDiv').hide();$('#helpDiv').hide();
}
function griglia(){
	$('#mappa').hide();$('#dashboard').show();$('#graficoDiv').hide();$('#cdlDiv').hide();$('#helpDiv').hide();
}
function grafico(){
	$('#mappa').hide();$('#dashboard').hide();$('#graficoDiv').show();$('#cdlDiv').hide();$('#helpDiv').hide();
}
function cdl(){
	$('#mappa').hide();$('#dashboard').hide();$('#graficoDiv').hide();$('#cdlDiv').show();$('#helpDiv').hide();
}
function help(){
	$('#mappa').hide();$('#dashboard').hide();$('#graficoDiv').hide();$('#cdlDiv').hide();$('#helpDiv').show();
}

//creo i bottoni
function initialize() {  
  $("#full-map3d").click(function(){
	$("#map3d").animate({
	 height:"+=100",
	 width: "+=300"
	  }, 1000 );});
  $("#resize-map3d").click(function(){
	$("#map3d").animate({
	 height:"-=100",
	 width: "-=300"
	  }, 1000 );});
  $("#altezza-map3d").click(function(){
	$("#map3d").animate({
	 height:"+=100",
	  }, 1000 );});
  $("#larghezza-map3d").click(function(){
	$("#map3d").animate({
	  width: "+=100",
	  }, 1000 );});
  $("#altezza1-map3d").click(function(){
	$("#map3d").animate({
	 height:"-=100",
	  }, 1000 );});
  $("#larghezza1-map3d").click(function(){
	$("#map3d").animate({
	  width: "-=100",
	  }, 1000 );});
	  

	  
	  
	  
	$("#menu1").corner("5px");
	$("#menu2").corner("5px");
	$("#menu3").corner("5px");
	$("#menu4").corner("5px");
	$("#menu5").corner("5px");
	$("#menu6").corner("5px");
	$("#mappaTable").corner("5px");
	$("#dashboardTable").corner("5px");
	$("#graficoTable").corner("5px");
	$("#cdlTable").corner("5px");
	$("#helpTable").corner("5px");
}