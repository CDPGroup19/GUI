// JavaScript Document

$( document ).bind( "pageinit", function( event, data ) {
	var stop1 = $("#stop1");
	var stop2 = $("#stop2");
	var stop3 = $("#stop3");
	var stop4 = $("#stop4");
	var stop5 = $("#stop5");
	
	stop1.show();
	stop2.show();
	stop3.show();
	stop4.show();
	stop5.show();
	
	stop1.click(function(){
        stop1.hide();
	});
	
	stop2.click(function(){
        stop2.hide();
	});
	
	stop3.click(function(){
        stop3.hide();
	});
	
	stop4.click(function(){
        stop4.hide();
	});
	
	stop5.click(function(){
        stop5.hide();
	});
	
});
